/* ===== Abbildungen (SVG) für die Demo-Aufgaben ===== */
const FIG_INK="var(--text)", FIG_MUTED="var(--muted)", FIG_FILL="var(--panel-2)";
function svgWrap(w,h,inner,label,maxw){ return `<svg class="fig" viewBox="0 0 ${w} ${h}" width="${maxw||w}" height="${Math.round((maxw||w)*h/w)}" role="img" aria-label="${label}">${inner}</svg>`; }
function miniFig(inner,label){ return `<figure class="minifig">${svgWrap(120,120,inner,label,110)}<figcaption>${label}</figcaption></figure>`; }
const FIGS={
  // Streichholz-Quadrate in einer Reihe: 1, 2, 3 Quadrate
  hoelzer: ()=>{ const s=34; let g="", x0=10;
    const stick=(x1,y1,x2,y2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#d9a35b" stroke-width="5" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="3.6" fill="#e2574c"/>`;
    [1,2,3].forEach(n=>{ for(let k=0;k<n;k++){ const x=x0+k*s; g+=stick(x+3,20,x+s-3,20)+stick(x+3,20+s,x+s-3,20+s); }
      for(let k=0;k<=n;k++){ const x=x0+k*s; g+=stick(x,23,x,20+s-3); }
      g+=`<text x="${x0+n*s/2}" y="${20+s+24}" text-anchor="middle" font-size="12" fill="${FIG_MUTED}">${n} ${n===1?"Quadrat":"Quadrate"}</text>`; x0+=n*s+34; });
    return svgWrap(x0,90,g,"Streichhölzer: 1 Quadrat aus 4 Hölzern, 2 Quadrate aus 7, 3 Quadrate aus 10",Math.min(x0,360)); },
  // Waage mit Obst
  obst: ()=>{ const f=(x,y,c)=>{ const col={A:"#e2574c",B:"#c9b23a",P:"#8a5cc9"}[c]; return `<circle cx="${x}" cy="${y}" r="13" fill="${col}"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">${c}</text>`; };
    let g=""; [0,1].forEach(i=>g+=f(20+i*30,25,"A")); g+=`<text x="82" y="31" font-size="20" fill="${FIG_INK}">=</text>`; [0,1,2].forEach(i=>g+=f(120+i*30,25,"B"));
    g+=f(20,80,"B")+`<text x="52" y="86" font-size="20" fill="${FIG_INK}">=</text>`; [0,1,2,3].forEach(i=>g+=f(90+i*30,80,"P"));
    g+=`<text x="260" y="31" font-size="12" fill="${FIG_MUTED}">(1)</text><text x="260" y="86" font-size="12" fill="${FIG_MUTED}">(2)</text>`;
    return svgWrap(290,110,g,"Waage: 2 Äpfel wiegen so viel wie 3 Birnen. 1 Birne wiegt so viel wie 4 Pflaumen.",290); }
};
function cutSolutions(){
  const sq=`<rect x="15" y="15" width="90" height="90" fill="none" stroke="${FIG_INK}" stroke-width="2"/>`;
  const ln=(x1,y1,x2,y2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--comet)" stroke-width="2.5"/>`;
  return `<div class="minifigs">${miniFig(sq+ln(5,5,115,115),"zwei Dreiecke")+miniFig(sq+ln(5,85,115,40),"zwei Vierecke")+miniFig(sq+ln(5,60,60,5),"Dreieck + Fünfeck")+miniFig(sq+ln(15,15,115,70),"Dreieck + Viereck")}</div>`;
}
