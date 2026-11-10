/* ===== WERKSTATT: kurze Übungen zu den Schwachstellen ===== */
const WERKSTATT=[
{
  id:"zaehlen", ic:"🌳", titel:"Systematisch zählen",
  intro:`<p>Bei „Wie viele Möglichkeiten?“ vergisst man leicht eine – oder schreibt eine doppelt. Der Trick: <b>wie im Wörterbuch ordnen.</b></p>
<ol><li>Lege den <b>ersten Platz</b> fest (zuerst den kleinsten Buchstaben).</li>
<li>Schreibe <b>alle</b> Möglichkeiten für den Rest auf – auch wieder geordnet.</li>
<li>Erst dann kommt der nächste Buchstabe nach vorn.</li></ol>
<p class="mono" style="margin:.4em 0">A vorn: ABC, ACB · B vorn: BAC, BCA · C vorn: CAB, CBA → 3 · 2 = 6</p>`,
  items:[
    {id:"z1", text:"Schreibe alle Reihenfolgen der drei Buchstaben K, M und T auf. Erst alle mit K vorn, dann mit M, dann mit T.", field:{type:"perms", multiset:"KMT", placeholder:"KMT, …"},
     why:"K vorn: KMT, KTM. M vorn: MKT, MTK. T vorn: TKM, TMK. Für den ersten Platz gibt es 3 Buchstaben, für den zweiten noch 2: 3 · 2 = 6."},
    {id:"z2", text:"Schreibe alle Reihenfolgen von A, B, C, D auf, die mit A beginnen.", field:{type:"perms", multiset:"ABCD", prefix:"A", placeholder:"ABCD, …"},
     why:"ABCD, ABDC, ACBD, ACDB, ADBC, ADCB. Hinter dem A stehen B, C, D in allen 6 Reihenfolgen."},
    {id:"z3", text:"Wie viele Reihenfolgen von A, B, C, D gibt es insgesamt?", field:{type:"num", answer:24},
     why:"Mit jedem der 4 Buchstaben vorn gibt es 6 Reihenfolgen (wie eben bei A): 4 · 6 = 24."},
    {id:"z4", text:"Schreibe alle „Wörter“ aus zwei K und zwei L auf (zum Beispiel KLKL).", field:{type:"perms", multiset:"KKLL", placeholder:"KKLL, …"},
     why:"Lege fest, auf welchen Plätzen die zwei K stehen: 1+2, 1+3, 1+4, 2+3, 2+4, 3+4. Das gibt KKLL, KLKL, KLLK, LKKL, LKLK, LLKK – also 6. So vergisst du beim Zählen keine Möglichkeit."}
  ]
},
{
  id:"allefinden", ic:"🔍", titel:"Alle finden – keine vergessen",
  intro:`<p>In der Regionalrunde heißt es oft „Ermittle <b>alle</b> …“ oder „Wie viele Möglichkeiten gibt es?“. Punkte gibt es nur, wenn du <b>keine vergisst</b> und <b>erklärst, warum es keine weiteren gibt</b>.</p>
<ol><li><b>Ordnen:</b> Such dir ein Merkmal und geh es der Reihe nach durch – die erste Ziffer, die Größe, die Anzahl der großen Münzen …</li>
<li><b>Zählen mit Mal:</b> Kommen Entscheidungen nacheinander (erst Platz 1, dann Platz 2), nimmst du die Möglichkeiten mal: 3 · 2.</li>
<li><b>Doppelte vermeiden:</b> Anna gibt Ben die Hand – das ist derselbe Händedruck wie Ben gibt Anna die Hand.</li>
<li><b>Schlusssatz:</b> „Es gibt keine weiteren, weil …“</li></ol>`,
  items:[
    {id:"f1", text:"Paul hat die Karten 1, 3 und 5 (jede Karte nur einmal). Schreibe alle zweistelligen Zahlen auf, die er legen kann – der Größe nach.", field:{type:"numset", placeholder:"13, …", answer:[13,15,31,35,51,53]},
     why:"13, 15, 31, 35, 51, 53. Für die Zehnerstelle gibt es 3 Karten, für die Einerstelle danach noch 2: 3 · 2 = 6. Geordnet nach der ersten Ziffer vergisst man keine."},
    {id:"f2", text:"Jetzt hat Paul die Karten 0, 2 und 4. Schreibe alle dreistelligen Zahlen auf (die 0 darf nicht vorn stehen).", field:{type:"numset", placeholder:"204, …", answer:[204,240,402,420]},
     why:"204, 240, 402, 420. Vorn darf nur 2 oder 4 stehen (2 Möglichkeiten). Danach bleiben 2 Karten, die auf 2 Arten liegen können: 2 · 2 = 4."},
    {id:"f3", text:"Wie viele dreistellige Zahlen kann man mit den Karten 2, 4, 6 und 8 legen, wenn jede Karte höchstens einmal vorkommt?", field:{type:"num", answer:24},
     why:"Hunderter: 4 Karten, Zehner: noch 3, Einer: noch 2. 4 · 3 · 2 = 24."},
    {id:"f4", text:"Finde alle zweistelligen Zahlen, bei denen das Produkt der beiden Ziffern 12 ist.", field:{type:"numset", placeholder:"z. B. 34, …", answer:[26,34,43,62]},
     why:"26, 34, 43, 62. Zerlege 12 in zwei Ziffern: 2 · 6 und 3 · 4 (1 · 12 geht nicht, 12 ist keine Ziffer). Jedes Paar gibt es in zwei Reihenfolgen. Keine weiteren, weil es keine anderen Zerlegungen gibt."},
    {id:"f5", text:"Finde alle zweistelligen Zahlen mit der Quersumme 4 (Zehnerziffer + Einerziffer = 4).", field:{type:"numset", placeholder:"z. B. 13, …", answer:[13,22,31,40]},
     why:"13, 22, 31, 40. Die Zehnerziffer kann 1, 2, 3 oder 4 sein (0 geht nicht, größer als 4 auch nicht). Zu jeder gibt es genau eine Einerziffer. Also genau 4 Zahlen."},
    {id:"f6", text:"Welche Begründung zeigt am besten, dass es bei Aufgabe 5 keine weiteren Zahlen gibt?",
     field:{type:"choice", options:["A: Ich habe lange gesucht und keine weitere gefunden.","B: Die Zehnerziffer kann nur 1, 2, 3 oder 4 sein. Zu jeder gehört genau eine Einerziffer (3, 2, 1, 0). Also gibt es genau diese 4 Zahlen.","C: Es sind 4 Zahlen, weil die Quersumme 4 ist."], answer:"B: Die Zehnerziffer kann nur 1, 2, 3 oder 4 sein. Zu jeder gehört genau eine Einerziffer (3, 2, 1, 0). Also gibt es genau diese 4 Zahlen."},
     why:"Nur B geht alle Fälle der Reihe nach durch. „Lange gesucht“ ist kein Beweis, und C ist ein Zufall."},
    {id:"f7", text:"Anna, Ben, Cem und Dora setzen sich auf eine Bank mit 4 Plätzen. Anna will ganz am Rand sitzen. Wie viele Möglichkeiten gibt es?", field:{type:"num", answer:12},
     why:"Anna: linker oder rechter Rand (2 Möglichkeiten). Die anderen drei auf die drei freien Plätze: 3 · 2 · 1 = 6. Zusammen 2 · 6 = 12."},
    {id:"f8", text:"Fünf Kinder geben sich zur Begrüßung gegenseitig je einmal die Hand. Wie viele Händedrücke sind das?", field:{type:"num", answer:10},
     why:"Kind 1 gibt 4 Kindern die Hand, Kind 2 noch 3 neuen, Kind 3 noch 2, Kind 4 noch 1: 4 + 3 + 2 + 1 = 10. Achtung: 5 · 4 = 20 zählt jeden Händedruck doppelt."},
    {id:"f9", text:"Auf wie viele Arten kann man genau 10 Cent mit 1-, 2- und 5-Cent-Münzen bezahlen? (Es kommt nur darauf an, welche Münzen, nicht auf die Reihenfolge.)", field:{type:"num", answer:10},
     why:"Ordne nach der Anzahl der 5-Cent-Münzen. Zwei: 5 + 5 (1 Art). Eine: Rest 5 Cent mit 0, 1 oder 2 Zwei-Cent-Münzen (3 Arten). Keine: 10 Cent mit 0 bis 5 Zwei-Cent-Münzen (6 Arten). Zusammen 1 + 3 + 6 = 10."},
    {id:"f10", text:"Wie viele Quadrate (alle Größen zusammen) siehst du in einem Quadrat aus 3 × 3 Kästchen?", field:{type:"num", answer:14},
     why:"Ordne nach der Größe: 1 × 1: 9 Stück, 2 × 2: 4 Stück, 3 × 3: 1 Stück. Zusammen 9 + 4 + 1 = 14."}
  ]
},
{
  id:"punkt", ic:"✖", titel:"Punkt vor Strich",
  intro:`<p>Reihenfolge beim Rechnen:</p>
<ol><li><b>Klammern</b> zuerst.</li><li>Dann <b>· und :</b> (Punktrechnung).</li><li>Zuletzt <b>+ und −</b> (Strichrechnung).</li></ol>
<p>Darum ist <span class="mono">8 + 8 : 8 = 8 + 1 = 9</span>, aber <span class="mono">(8 + 8) : 8 = 16 : 8 = 2</span>.</p>`,
  items:[
    {id:"p1", text:"8 + 8 : 8 = ?", field:{type:"num", answer:9}, why:"Zuerst 8 : 8 = 1, dann 8 + 1 = 9."},
    {id:"p2", text:"(8 + 8) : 8 = ?", field:{type:"num", answer:2}, why:"Klammer zuerst: 8 + 8 = 16, dann 16 : 8 = 2."},
    {id:"p3", text:"8 − 8 : 8 = ?", field:{type:"num", answer:7}, why:"Zuerst 8 : 8 = 1, dann 8 − 1 = 7."},
    {id:"p4", text:"8 · 8 − 8 : 8 = ?", field:{type:"num", answer:63}, why:"Beide Punktrechnungen zuerst: 8 · 8 = 64 und 8 : 8 = 1. Dann 64 − 1 = 63."},
    {id:"p5", text:"(8 + 8) · 8 − 8 = ?", field:{type:"num", answer:120}, why:"Klammer: 16. Dann 16 · 8 = 128. Zuletzt 128 − 8 = 120."},
    {id:"p6", text:"Setze Klammern richtig: Schreibe eine Rechnung mit genau vier Achten, die 6 ergibt.", field:{type:"expr", target:6, eights:4, label:"= 6"},
     why:"Zum Beispiel 8 − (8 + 8) : 8 = 8 − 2 = 6. Ohne Klammer wäre 8 − 8 + 8 : 8 = 1."},
    {id:"p7", text:"Und jetzt 10 mit genau vier Achten.", field:{type:"expr", target:10, eights:4, label:"= 10"},
     why:"Zum Beispiel 8 + (8 + 8) : 8 = 8 + 2 = 10. Die Klammer sorgt dafür, dass zuerst 8 + 8 gerechnet wird."}
  ]
},
{
  id:"begruenden", ic:"📜", titel:"Begründen wie ein Profi",
  intro:`<p>Bei der Olympiade bekommt man für ein richtiges Ergebnis ohne Begründung oft nur <b>einen kleinen Teil der Punkte</b>. Eine gute Begründung hat vier Schritte:</p>
<ol><li><b>Was weiß ich?</b> „Nach Aussage (2) …“</li><li><b>Was folgt daraus – und warum?</b> „…, also …, weil …“</li><li><b>Ergebnis.</b></li><li><b>Probe</b> – und bei „Finde alle“: warum es keine weiteren gibt.</li></ol>`,
  items:[
    {id:"b1", text:"Rätsel: Tim, Ole und Pia haben je ein anderes Haustier: Hund, Katze, Fisch. (1) Tim hat keine Katze. (2) Ole hat einen Fisch. – Welche Begründung bekommt die meisten Punkte?",
     field:{type:"choice", options:["A: Tim hat den Hund, Ole den Fisch, Pia die Katze.","B: Ich habe überlegt und alles richtig zugeordnet.","C: Nach (2) hat Ole den Fisch. Tim hat nach (1) keine Katze, und den Fisch hat schon Ole – also hat Tim den Hund. Für Pia bleibt die Katze."], answer:"C: Nach (2) hat Ole den Fisch. Tim hat nach (1) keine Katze, und den Fisch hat schon Ole – also hat Tim den Hund. Für Pia bleibt die Katze."},
     why:"Nur C sagt bei jedem Schritt, WARUM (mit Aussage (1) und (2)). A ist nur das Ergebnis, B sagt gar nichts über den Weg."},
    {id:"b2", text:"Ein Heft kostet 3 €. Lisa kauft 4 Hefte und bezahlt mit einem 20-€-Schein. Wie viel bekommt sie zurück? – Welche Lösung ist vollständig?",
     field:{type:"choice", options:["A: 8 €.","B: 4 · 3 € = 12 €. 20 € − 12 € = 8 €. Lisa bekommt 8 € zurück.","C: Ich habe gerechnet und 8 herausbekommen."], answer:"B: 4 · 3 € = 12 €. 20 € − 12 € = 8 €. Lisa bekommt 8 € zurück."},
     why:"B zeigt jede Rechnung. Bei Rechenaufgaben IST die hingeschriebene Rechnung die Begründung."},
    {id:"b3", text:"Bei „Finde alle Zahlen …“ schreibt jemand: „Die Zahl muss mit 5 enden. Also ist sie 195.“ Was fehlt am meisten?",
     field:{type:"choice", options:["A: Warum auch die anderen Ziffern so sein müssen, warum es keine weiteren Zahlen gibt, und eine Probe.","B: Eine schönere Schrift.","C: Nichts, das ist vollständig."], answer:"A: Warum auch die anderen Ziffern so sein müssen, warum es keine weiteren Zahlen gibt, und eine Probe."},
     why:"Bei „Finde alle“ muss man zeigen, dass die gefundenen Zahlen passen (Probe) UND dass es keine anderen gibt. Dafür gibt es die meisten Punkte."},
    {id:"b4", text:"Welcher Satz ist eine echte Begründung?",
     field:{type:"choice", options:["A: Pia hat die Katze.","B: Tim hat nicht den Fisch, weil nach Aussage (2) Ole den Fisch hat – und jedes Kind ein anderes Tier hat.","C: Das ist einfach so."], answer:"B: Tim hat nicht den Fisch, weil nach Aussage (2) Ole den Fisch hat – und jedes Kind ein anderes Tier hat."},
     why:"B nennt die Aussage und erklärt mit „weil“, warum daraus etwas folgt. Genau so sieht ein Begründungsschritt aus."}
  ]
}
];
function wkDone(p){ let n=0, all=0; WERKSTATT.forEach(st=>st.items.forEach(it=>{ all++; if((p.werkstatt||{})[it.id]) n++; })); return {n,all}; }
function renderWerkstattCard(){
  const w=wkDone(S.prog);
  return `<section class="card wkcard" aria-label="Werkstatt"><div class="eyebrow">Werkstatt</div>
    <h2 style="font-size:20px;margin-top:4px">Kater Komets Werkstatt</h2>
    <p class="muted" style="margin:.3em 0 .7em">Kurze Übungen für vier Profi-Tricks: systematisch zählen, alle finden, Punkt vor Strich, gut begründen. ${w.n} von ${w.all} geschafft.</p>
    <button class="btn" id="toWerkstatt">Werkstatt öffnen</button></section>`;
}
function renderWerkstatt(){
  const p=S.prog, w=wkDone(p);
  return `<div class="topbar"><button class="btn ghost small" id="wkBack">← Zur Galaxie</button><span class="muted">Werkstatt · ${w.n} von ${w.all} geschafft</span></div>
  ${WERKSTATT.map(st=>{ const done=st.items.filter(it=>(p.werkstatt||{})[it.id]).length;
    return `<section class="card wk"><div class="eyebrow">Station · ${done}/${st.items.length}</div><h2 style="font-size:22px;margin-top:4px">${esc(st.titel)}</h2>
    <div class="tasktext wkintro">${st.intro}</div>
    ${st.items.map((it,k)=>{ const ok=(p.werkstatt||{})[it.id]; const v=S.wk.vals[it.id]!==undefined?S.wk.vals[it.id]:"";
      const tries=S.wk.tries[it.id]||0;
      return `<div class="wkitem ${ok?"ok":""}" data-wk="${it.id}">
        <div class="wkq"><span class="wkn">${k+1}</span>${esc(it.text)}</div>
        ${ok?`<div class="wkfb good"><b>Geschafft!</b> ${esc(it.why)}</div>`:`
        <div class="part">${fieldHTML({id:"wk"},Object.assign({id:it.id,label:it.field.label||""},it.field),v)}</div>
        <div class="row"><button class="btn small primary" data-wkcheck="${it.id}">Prüfen</button>${tries>=2?`<button class="btn small" data-wkshow="${it.id}">Lösung zeigen</button>`:""}</div>
        <div class="wkfb" id="wkfb-${it.id}" aria-live="polite">${S.wk.open[it.id]?`<b>Lösung:</b> ${esc(it.why)}`:""}</div>`}
      </div>`; }).join("")}
    </section>`; }).join("")}`;
}
function wkFind(id){ for(const st of WERKSTATT) for(const it of st.items) if(it.id===id) return it; return null; }
function wkRead(it){
  const f=it.field, box=document.querySelector(`[data-wk="${it.id}"]`); if(!box) return "";
  if(f.type==="choice"){ const b=box.querySelector('[data-yn][aria-pressed="true"]'); return b?b.dataset.v:""; }
  const inp=box.querySelector("input[type=text]"); return inp?inp.value:"";
}
function bindWerkstatt(){
  $("#wkBack").onclick=()=>{ S.view="map"; render(); window.scrollTo(0,0); };
  document.querySelectorAll(".wkitem [data-yn]").forEach(b=>b.onclick=()=>{
    const box=b.closest?b.closest(".wkitem"):b.parentNode.parentNode.parentNode;
    box.querySelectorAll("[data-yn]").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));
  });
  document.querySelectorAll("[data-wkcheck]").forEach(b=>b.onclick=()=>{
    const it=wkFind(b.dataset.wkcheck); const v=wkRead(it); S.wk.vals[it.id]=v;
    const f=Object.assign({id:it.id,label:""},it.field);
    const fb=document.getElementById("wkfb-"+it.id);
    if(!String(v).trim()){ fb.innerHTML=`<span class="err">Trag zuerst etwas ein.</span>`; return; }
    const r=checkField(f,v);
    if(r.units.every(u=>u.ok)){
      S.prog.werkstatt=S.prog.werkstatt||{}; S.prog.werkstatt[it.id]=Date.now();
      checkBadges(); saveProg(); toast("✓","Richtig!",it.why.slice(0,90)+(it.why.length>90?"…":""));
      const y=window.pageYOffset; render(); window.scrollTo(0,y);
    } else {
      S.wk.tries[it.id]=(S.wk.tries[it.id]||0)+1;
      const tries=S.wk.tries[it.id];
      const msg = r.note ? esc(r.note) : "Noch nicht richtig.";
      if(tries===2){ const y=window.pageYOffset; render(); window.scrollTo(0,y); const fb2=document.getElementById("wkfb-"+it.id); if(fb2) fb2.innerHTML=`<span class="err">${msg}</span> Probier es noch einmal – oder schau dir die Lösung an.`; }
      else fb.innerHTML=`<span class="err">${msg}</span> ${tries===1?"Probier es noch einmal.":""}`;
    }
  });
  document.querySelectorAll("[data-wkshow]").forEach(b=>b.onclick=()=>{
    const it=wkFind(b.dataset.wkshow); S.wk.open[it.id]=true; const fb=document.getElementById("wkfb-"+it.id);
    fb.innerHTML=`<b>Lösung:</b> ${esc(it.why)} <br><span class="muted">Trag die Lösung jetzt selbst ein und drück „Prüfen“.</span>`;
  });
}
