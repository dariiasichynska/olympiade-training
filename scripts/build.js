/*
 * Build script for Olympiade-Training.
 *
 *   npm run build
 *
 * Produces
 *   dist/artifact.html  – modern build for a Claude artifact (uses window.claude: db, sample, user, downloads)
 *   dist/offline.html   – single-file legacy build for old Android browsers (Chrome 42 / Android 4.1):
 *                         ES5 via Babel, core-js polyfills, CSS without custom properties/grid/gap,
 *                         emoji replaced by glyphs that old Android fonts contain
 *   docs/index.html     – copy of the offline build for GitHub Pages (live demo)
 *
 * Optional environment variables (never commit real values):
 *   UPLOAD_URL  – Make.com custom webhook URL for the "Ergebnisse senden" button (offline build)
 *   DEVICE_ID   – record key used in the Make data store (default: tablet-1)
 */
const fs = require('fs'), path = require('path');
const babel = require('@babel/core');
const builder = require('core-js-builder');
const terser = require('terser');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');
const ORDER = ['figs.js', 'tasks.js', 'werkstatt.js', 'app.js'];   // figs first: tasks use figure helpers
const read = f => fs.readFileSync(path.join(SRC, f), 'utf8');

function sources() {
  let js = ORDER.map(read).join('\n');
  js = js.split('__UPLOAD_URL__').join(process.env.UPLOAD_URL || '__UPLOAD_URL__')
         .split('__DEVICE_ID__').join(process.env.DEVICE_ID || '__DEVICE_ID__');
  return js;
}

async function buildModern() {
  const head = read('head.html');
  const body = '<canvas id="sky" aria-hidden="true"></canvas><div id="app"></div><div id="toasts" aria-live="polite"></div>';
  const html = `${head}\n${body}\n<script>\n${sources()}\n</script>\n`;
  fs.writeFileSync(path.join(DIST, 'artifact.html'), html);
  return html.length;
}

async function buildLegacy() {
  // 1) theme tokens from head.html -> literal values (Chrome 42 has no CSS custom properties)
  const head = read('head.html');
  const vars = {};
  head.match(/:root\{([\s\S]*?)\}/)[1].replace(/--([\w-]+):([^;]+);/g, (m, k, v) => { vars[k] = v.trim(); });
  let js = sources();
  if (!/\nboot\(\);\s*$/.test(js)) throw new Error('boot() call not found at end of app.js');
  js = js.replace(/\nboot\(\);\s*$/, '\ntry{ boot().catch(function(e){ window.__fail(e); }); }catch(e){ window.__fail(e); }\n');
  js = js.replace(/var\(--([\w-]+)\)/g, (m, k) => { if (!(k in vars)) throw new Error('unknown CSS var ' + k); return vars[k].replace(/"/g, "'"); });

  // 2) emoji -> glyphs available in Android 4.x fonts
  const BADGE_GLYPH = { start:'GO', selbst:'!', treffer:'√', durchhalter:'3', forscher:'10', stern:'★', erklaer:'2+', comeback:'↑', kater:'L', halb:'½', serie:'3T', galaxie:'★', werkstatt:'W', regio:'R', regio1:'R1', zehn:'10★', zwanzig:'20★', treffer3:'3√', blitz:'B!', selbst3:'3!', nochmal:'2×', gipfel:'R2', logik2:'L+', fleiss:'3/T', woche:'7T', tage14:'14T' };
  js = js.replace(/\{id:"(\w+)", ic:"[^"]+"/g, (m, id) => { if (!BADGE_GLYPH[id]) throw new Error('no glyph for badge ' + id); return `{id:"${id}", ic:"${BADGE_GLYPH[id]}"`; });
  const MAP = { '✎':'*', '✖':'x', '🌳':'*', '📜':'*', '🔍':'*', '⭐':'★', '🔒':'×', '🛈':'i', '✦':'*', '◉':'○', '▣':'□', '✓':'√', '✗':'×' };
  for (const [k, v] of Object.entries(MAP)) js = js.split(k).join(v);

  // 3) transpile to ES5 and minify
  const es5 = babel.transformSync(js, { sourceType:'script', babelrc:false, configFile:false,
    presets:[[require.resolve('@babel/preset-env'), { targets:{ android:'4.1', ie:'11' }, modules:false }]] }).code;
  const app = (await terser.minify(es5, { ecma:5, mangle:false })).code;

  // 4) only the polyfills the app actually needs
  const polyRaw = await builder({ targets:{ android:'4.1' }, format:'bundle', modules:[
    'es.object.to-string','es.promise','es.promise.finally','es.set','es.map','es.symbol','es.symbol.description',
    'es.symbol.iterator','es.symbol.async-iterator','es.array.iterator','es.string.iterator','es.array.from',
    'es.array.includes','es.array.find','es.array.find-index','es.array.flat-map','es.array.unscopables.flat-map',
    'es.object.entries','es.object.assign','es.object.get-own-property-descriptors','es.string.pad-start',
    'es.string.includes','web.dom-collections.for-each','web.dom-collections.iterator'] });
  const poly = (await terser.minify(polyRaw, { ecma:5, safari10:true })).code;
  fs.writeFileSync(path.join(DIST, '.app.es5.js'), app);      // for `npm run check:es5`
  fs.writeFileSync(path.join(DIST, '.poly.es5.js'), poly);

  // 5) start-up guard: shows a readable error (and the user agent) instead of a blank page
  const guard = `window.__OFFLINE__=true;
function __show(h){try{var b=document.getElementById('err-box');if(!b){b=document.createElement('div');b.id='err-box';(document.getElementById('app')||document.body).appendChild(b);}b.innerHTML=h;}catch(e){}}
function __esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}
window.__fail=function(e){__show('<b>Fehler beim Start:</b> '+__esc(e&&e.message||e)+'<br><small>'+__esc(e&&e.stack||'').slice(0,600)+'</small><br><br><b>Browser:</b> '+__esc(navigator.userAgent));};
window.onerror=function(m,s,l){__show('<b>Fehler:</b> '+__esc(m)+' (Zeile '+l+')<br><br><b>Browser:</b> '+__esc(navigator.userAgent));};
setTimeout(function(){if(document.getElementById('boot-msg')&&!document.getElementById('err-box')){__show('<b>JavaScript läuft, aber das Training ist nicht gestartet.</b><br><b>Browser:</b> '+__esc(navigator.userAgent));}},6000);`;
  const html = `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Olympiade-Training</title>
<style>${read('legacy.css')}</style>
<script>${guard}</script>
</head><body>
<canvas id="sky"></canvas>
<div id="app"><div id="boot-msg"><b>Olympiade-Training wird geladen …</b>
<noscript><p><b>JavaScript ist ausgeschaltet.</b> Die Datei wurde in einer Vorschau geöffnet, die keine Programme ausführt.</p></noscript>
<p>Bleibt dieser Text stehen und erscheint keine rote Fehlermeldung, wurde die Datei nicht im Browser geöffnet, sondern in einer Vorschau (z. B. „HTML Viewer“ unter Android oder die Dateivorschau auf dem iPhone). Dort läuft das Training nicht.</p>
<p><b>Android:</b> Chrome öffnen und in die Adresszeile <span class="mono">file:///sdcard/</span> eingeben, dann den Ordner mit der Datei antippen.</p></div></div>
<div id="toasts"></div>
<script>${poly}</script>
<script>${app}</script>
</body></html>`;
  fs.writeFileSync(path.join(DIST, 'offline.html'), html);
  fs.mkdirSync(path.join(ROOT, 'docs'), { recursive:true });
  fs.writeFileSync(path.join(ROOT, 'docs', 'index.html'), html);
  return html.length;
}

(async () => {
  fs.mkdirSync(DIST, { recursive:true });
  const a = await buildModern();
  const b = await buildLegacy();
  console.log(`dist/artifact.html  ${(a/1024).toFixed(0)} KB`);
  console.log(`dist/offline.html   ${(b/1024).toFixed(0)} KB  (also docs/index.html)`);
  if (!process.env.UPLOAD_URL) console.log('UPLOAD_URL not set: the upload button is hidden in the offline build.');
})().catch(e => { console.error(e); process.exit(1); });
