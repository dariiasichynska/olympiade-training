/* ===== DEMO-AUFGABEN =====
   Eigene Aufgaben im Stil der Mathematik-Olympiade (Klasse 5), geschrieben für dieses Repository.
   Die echten Olympiade-Aufgaben sind urheberrechtlich geschützt und deshalb nicht enthalten.
   Jede Aufgabe: Text (de), Übersetzung (ua), Antwortfelder, 3 gestufte Tipps, Musterlösung, Bewertungshinweis. */
const TASKS = [
{
  id:"demo01", jahr:"Demo", thema:"Logik", titel:"Die Schulband",
  text:`<p>Ben, Lia und Tom spielen in der Schulband. Jedes Kind spielt genau ein Instrument: Gitarre, Klavier oder Trommel. Alle drei Instrumente kommen vor.</p>
<ol class="cond"><li data-n="(1)">Ben spielt nicht Klavier.</li><li data-n="(2)">Das Kind an der Trommel ist jünger als Lia.</li><li data-n="(3)">Ben ist das älteste der drei Kinder.</li></ol>
<p>Ermittle, wer welches Instrument spielt. Begründe deine Lösung.</p>`,
  ua:`<p>Бен, Лія і Том грають у шкільному гурті. Кожна дитина грає рівно на одному інструменті: гітарі, фортепіано або барабані. Усі три інструменти задіяні.</p>
<ol class="cond"><li data-n="(1)">Бен не грає на фортепіано.</li><li data-n="(2)">Дитина за барабаном молодша за Лію.</li><li data-n="(3)">Бен — найстарший із трьох дітей.</li></ol>
<p>Визнач, хто на якому інструменті грає. Обґрунтуй розв'язок.</p>`,
  fields:[
    {id:"band", type:"assign", label:"Wer spielt welches Instrument?", rows:["Ben","Lia","Tom"], options:["Gitarre","Klavier","Trommel"],
     answer:{Ben:"Gitarre",Lia:"Klavier",Tom:"Trommel"}}
  ],
  hints:[
    "Fang mit der Trommel an. Aussage (2) sagt etwas darüber, wer sie NICHT spielen kann.",
    "Lia kann nicht an der Trommel sein, denn niemand ist jünger als er selbst. Und Ben? Er ist der Älteste (3) – kann er jünger als Lia sein?",
    "Weder Lia noch Ben spielen Trommel, also spielt Tom Trommel. Für Ben bleiben Gitarre und Klavier – Aussage (1) entscheidet. Lia bekommt das letzte Instrument."
  ],
  loesung:`<p><b>Ben: Gitarre · Lia: Klavier · Tom: Trommel</b></p>
<ul><li>Nach (2) ist das Kind an der Trommel jünger als Lia. Lia selbst kann es also nicht sein.</li>
<li>Ben ist nach (3) der Älteste, also nicht jünger als Lia. Ben spielt also auch nicht Trommel.</li>
<li>Damit spielt Tom Trommel.</li>
<li>Ben spielt nach (1) nicht Klavier, also Gitarre. Für Lia bleibt das Klavier.</li></ul>`,
  rubrik:"Wichtig: Begründung mit (2), warum Lia und mit (3), warum Ben nicht Trommel spielt; danach (1). Nur Ergebnis höchstens Note 4."
},
{
  id:"demo02", jahr:"Demo", thema:"Zeit", titel:"Der Schulbus",
  text:`<p>Mia muss um 8:30 Uhr in der Schule sein. Ihr Bus fährt laut Fahrplan um 7:52 Uhr ab und braucht 26 Minuten bis zur Haltestelle an der Schule. Heute hat der Bus 9 Minuten Verspätung. Von der Haltestelle bis zum Klassenzimmer braucht Mia 6 Minuten.</p>
<ol class="parts"><li data-n="a)">Um wie viel Uhr ist Mia heute im Klassenzimmer?</li><li data-n="b)">Kommt sie pünktlich?</li></ol>`,
  ua:`<p>Мія має бути в школі о 8:30. Її автобус за розкладом відправляється о 7:52 і їде 26 хвилин до зупинки біля школи. Сьогодні автобус запізнюється на 9 хвилин. Від зупинки до класу Мія йде 6 хвилин.</p>
<ol class="parts"><li data-n="a)">О котрій годині Мія сьогодні буде в класі?</li><li data-n="b)">Чи прийде вона вчасно?</li></ol>`,
  fields:[
    {id:"a", part:"a)", type:"time", label:"Ankunft im Klassenzimmer", answer:"8:33"},
    {id:"b", part:"b)", type:"yesno", label:"Kommt Mia pünktlich?", answer:"nein"}
  ],
  hints:[
    "Zeichne eine Zeitleiste und trage nacheinander ein: Abfahrt laut Plan, Verspätung, Fahrt, Fußweg.",
    "Die echte Abfahrt ist 9 Minuten später als 7:52 Uhr. Rechne dann die 26 Minuten Fahrt und die 6 Minuten Fußweg dazu.",
    "7:52 + 9 min = 8:01 Uhr. 8:01 + 26 min = 8:27 Uhr. 8:27 + 6 min = ? Vergleiche mit 8:30 Uhr."
  ],
  loesung:`<p><b>a) 8:33 Uhr · b) Nein, 3 Minuten zu spät.</b></p>
<ul><li>Echte Abfahrt: 7:52 Uhr + 9 min = 8:01 Uhr.</li><li>Ankunft an der Haltestelle: 8:01 Uhr + 26 min = 8:27 Uhr.</li><li>Im Klassenzimmer: 8:27 Uhr + 6 min = 8:33 Uhr. Das ist 3 Minuten nach 8:30 Uhr.</li></ul>`,
  rubrik:"Zwischenzeiten 8:01 und 8:27 müssen erkennbar sein. Nur „Nein“ ohne Rechnung höchstens Note 5."
},
{
  id:"demo03", jahr:"Demo", thema:"Muster", titel:"Streichholz-Quadrate",
  text:`<p>Lukas legt Quadrate aus Streichhölzern in eine Reihe (siehe Abbildung). Für 1 Quadrat braucht er 4 Hölzer, für 2 Quadrate 7 Hölzer, für 3 Quadrate 10 Hölzer.</p>
<ol class="parts"><li data-n="a)">Wie viele Hölzer braucht er für 5 Quadrate?</li><li data-n="b)">Wie viele Hölzer braucht er für 20 Quadrate?</li><li data-n="c)">Lukas hat genau 100 Hölzer. Wie viele Quadrate kann er legen, wenn er alle Hölzer verbraucht?</li></ol>`,
  ua:`<p>Лукас викладає квадрати із сірників у ряд (див. малюнок). Для 1 квадрата потрібно 4 сірники, для 2 квадратів — 7, для 3 квадратів — 10.</p>
<ol class="parts"><li data-n="a)">Скільки сірників потрібно для 5 квадратів?</li><li data-n="b)">Скільки сірників потрібно для 20 квадратів?</li><li data-n="c)">У Лукаса рівно 100 сірників. Скільки квадратів він може викласти, якщо використає всі сірники?</li></ol>`,
  fig:"hoelzer",
  fields:[
    {id:"a", part:"a)", type:"num", label:"Hölzer für 5 Quadrate", answer:16},
    {id:"b", part:"b)", type:"num", label:"Hölzer für 20 Quadrate", answer:61},
    {id:"c", part:"c)", type:"num", label:"Quadrate mit 100 Hölzern", answer:33}
  ],
  hints:[
    "Schreibe eine Tabelle: Quadrate 1, 2, 3, 4, 5 und daneben die Hölzer. Was fällt dir auf?",
    "Mit jedem neuen Quadrat kommen 3 Hölzer dazu, denn eine Seite teilt es mit dem Quadrat davor. Das erste Quadrat braucht eins mehr.",
    "Für n Quadrate: 1 + 3 · n Hölzer. a) 1 + 3 · 5. b) 1 + 3 · 20. c) 1 + 3 · n = 100, also 3 · n = 99."
  ],
  loesung:`<ul><li>Jedes neue Quadrat braucht nur 3 Hölzer, weil es eine Seite mit dem vorherigen teilt. Für n Quadrate: 1 + 3 · n Hölzer (das eine Holz ganz links plus 3 je Quadrat).</li>
<li><b>a) 16:</b> 1 + 3 · 5 = 16. <b>b) 61:</b> 1 + 3 · 20 = 61. <b>c) 33:</b> 1 + 3 · n = 100 ⇒ 3 · n = 99 ⇒ n = 33. Probe: 1 + 3 · 33 = 100 ✓.</li></ul>`,
  rubrik:"Regel (je Quadrat 3 Hölzer, Start 1 bzw. 4) muss erklärt sein; c) mit Rückwärtsrechnung und Probe."
},
{
  id:"demo04", jahr:"Demo", thema:"Kombinatorik", titel:"Fahnen basteln",
  text:`<p>Für ein Klassenfest basteln die Kinder Fahnen mit vier waagerechten Streifen. Jede Fahne bekommt genau zwei rote, einen blauen und einen gelben Streifen.</p>
<ol class="parts"><li data-n="a)">Schreibe alle verschiedenen Fahnen auf. Kürze die Farben mit R, B und G ab (G = gelb) und schreibe die Streifen von oben nach unten, zum Beispiel RRBG.</li>
<li data-n="b)">Wie viele verschiedene Fahnen gibt es?</li></ol>`,
  ua:`<p>До класного свята діти майструють прапорці з чотирма горизонтальними смугами. Кожен прапорець має рівно дві червоні, одну синю й одну жовту смугу.</p>
<ol class="parts"><li data-n="a)">Запиши всі різні прапорці. Скорочуй кольори літерами R (червоний), B (синій) і G (жовтий) і записуй смуги згори вниз, наприклад RRBG.</li>
<li data-n="b)">Скільки існує різних прапорців?</li></ol>`,
  fields:[
    {id:"a", part:"a)", type:"perms", multiset:"RRBG", label:"Alle Fahnen", placeholder:"RRBG, …"},
    {id:"b", part:"b)", type:"num", label:"Anzahl der Fahnen", answer:12}
  ],
  hints:[
    "Geh systematisch vor wie im Wörterbuch: zuerst alle Fahnen, die oben B haben, dann G, dann R.",
    "Andere Idee: Wo kommt der blaue Streifen hin? 4 Möglichkeiten. Wo der gelbe? Danach sind die roten Plätze klar.",
    "Für Blau gibt es 4 Plätze, für Gelb danach noch 3 Plätze, die zwei übrigen Plätze sind rot: 4 · 3 = 12. Prüfe, ob deine Liste 12 verschiedene Fahnen hat."
  ],
  loesung:`<p><b>12 Fahnen.</b></p>
<ul><li>Blau kann auf einem der 4 Plätze liegen, Gelb dann auf einem der 3 übrigen; die zwei restlichen Plätze sind rot: 4 · 3 = 12.</li>
<li>Liste (geordnet): BGRR, BRGR, BRRG, GBRR, GRBR, GRRB, RBGR, RBRG, RGBR, RGRB, RRBG, RRGB.</li></ul>`,
  rubrik:"Vollständige, systematische Liste oder Produktregel mit Erklärung. Doppelte oder fehlende Fahnen kosten Punkte."
},
{
  id:"demo05", jahr:"Demo", thema:"Gleichungen", titel:"Obst auf der Waage",
  text:`<p>Alle Äpfel wiegen gleich viel, ebenso alle Birnen und alle Pflaumen. Auf einer Waage stellt Emma fest:</p>
<ol class="cond"><li data-n="(1)">Zwei Äpfel wiegen genau so viel wie drei Birnen.</li><li data-n="(2)">Eine Birne wiegt genau so viel wie vier Pflaumen.</li></ol>
<ol class="parts"><li data-n="a)">Welches Obst ist am schwersten?</li><li data-n="b)">Wie viele Pflaumen wiegen so viel wie zwei Äpfel?</li><li data-n="c)">Eine Pflaume wiegt 25 g. Wie schwer sind eine Birne und ein Apfel?</li></ol>`,
  ua:`<p>Усі яблука важать однаково, так само всі груші й усі сливи. На вагах Емма встановлює:</p>
<ol class="cond"><li data-n="(1)">Два яблука важать рівно стільки, скільки три груші.</li><li data-n="(2)">Одна груша важить рівно стільки, скільки чотири сливи.</li></ol>
<ol class="parts"><li data-n="a)">Який фрукт найважчий?</li><li data-n="b)">Скільки слив важать стільки, скільки два яблука?</li><li data-n="c)">Одна слива важить 25 г. Скільки важать одна груша й одне яблуко?</li></ol>`,
  fig:"obst",
  fields:[
    {id:"a", part:"a)", type:"choice", options:["Apfel","Birne","Pflaume"], label:"Am schwersten ist …", answer:"Apfel"},
    {id:"b", part:"b)", type:"num", label:"Pflaumen", answer:12},
    {id:"c1", part:"c)", type:"num", label:"Birne", unit:"g", answer:100},
    {id:"c2", part:"c)", type:"num", label:"Apfel", unit:"g", answer:150}
  ],
  hints:[
    "Aus (2) siehst du sofort: Eine Birne ist schwerer als eine Pflaume. Aus (1): Wenn 2 Äpfel so viel wiegen wie 3 Birnen – ist ein Apfel dann schwerer oder leichter als eine Birne?",
    "Ersetze in (1) jede Birne durch 4 Pflaumen.",
    "3 Birnen = 3 · 4 = 12 Pflaumen, also wiegen 2 Äpfel so viel wie 12 Pflaumen. c) Birne = 4 · 25 g. 2 Äpfel = 12 · 25 g = 300 g."
  ],
  loesung:`<p><b>a) Apfel · b) 12 · c) Birne 100 g, Apfel 150 g</b></p>
<ul><li>(2): Eine Birne wiegt so viel wie 4 Pflaumen, ist also schwerer als eine Pflaume. (1): 2 Äpfel wiegen so viel wie 3 Birnen, also ist ein Apfel schwerer als eine Birne. Am schwersten ist der Apfel.</li>
<li>b) 3 Birnen = 3 · 4 Pflaumen = 12 Pflaumen, also 2 Äpfel = 12 Pflaumen.</li>
<li>c) Birne: 4 · 25 g = 100 g. 2 Äpfel = 12 · 25 g = 300 g, ein Apfel 150 g. Probe (1): 2 · 150 = 300 = 3 · 100 ✓.</li></ul>`,
  rubrik:"Ersetzen (Birne → 4 Pflaumen) muss erkennbar sein; a) mit Begründung aus (1) und (2); Probe ist ein Plus."
},
{
  id:"demo06", jahr:"Demo", thema:"Zahlen", titel:"Ungerade Ziffern",
  text:`<p>Gesucht sind alle dreistelligen Zahlen mit diesen Eigenschaften:</p>
<ol class="cond"><li data-n="(1)">Alle Ziffern sind ungerade und voneinander verschieden.</li><li data-n="(2)">Die Quersumme ist 15.</li><li data-n="(3)">Die Zahl ist durch 5 teilbar.</li></ol>
<p>Ermittle alle solchen Zahlen und zeige, dass es keine weiteren gibt.</p>`,
  ua:`<p>Шукаємо всі трицифрові числа з такими властивостями:</p>
<ol class="cond"><li data-n="(1)">Усі цифри непарні й різні між собою.</li><li data-n="(2)">Сума цифр дорівнює 15.</li><li data-n="(3)">Число ділиться на 5.</li></ol>
<p>Знайди всі такі числа й покажи, що інших немає.</p>`,
  fields:[
    {id:"z", type:"numset", label:"Alle gesuchten Zahlen (mit Komma trennen)", placeholder:"z. B. 123, 456", answer:[195,375,735,915]}
  ],
  hints:[
    "Welche Endziffer muss eine Zahl haben, die durch 5 teilbar ist? Welche davon ist ungerade?",
    "Die letzte Ziffer ist 5. Die beiden anderen Ziffern sind ungerade, verschieden, nicht 5 und haben zusammen die Summe 15 − 5 = 10.",
    "Ungerade Ziffern außer 5: 1, 3, 7, 9. Welche Paare davon ergeben 10? Jedes Paar kann in zwei Reihenfolgen vorne stehen."
  ],
  loesung:`<p><b>195, 375, 735, 915</b></p>
<ul><li>(3): Durch 5 teilbar heißt Endziffer 0 oder 5; ungerade ist nur 5.</li>
<li>(2): Die ersten beiden Ziffern ergeben zusammen 15 − 5 = 10. (1): Sie sind ungerade, verschieden und nicht 5, also aus 1, 3, 7, 9. Paare mit Summe 10: 1 + 9 und 3 + 7.</li>
<li>Jedes Paar in zwei Reihenfolgen: 195, 915, 375, 735. Weitere gibt es nicht, weil alle Möglichkeiten durchgegangen sind. Probe z. B. 735: 7 + 3 + 5 = 15, endet auf 5 ✓.</li></ul>`,
  rubrik:"Volle Punkte nur mit Ausschluss-Begründung (Endziffer 5, Paare mit Summe 10) und Probe."
},
{
  id:"demo07", jahr:"Demo", thema:"Geometrie", titel:"Der Gemüsegarten",
  text:`<p>Ein rechteckiger Gemüsegarten wird mit einem Zaun von genau 20 m Länge eingezäunt. Seine Seitenlängen sind ganze Meter.</p>
<ol class="parts"><li data-n="a)">Gib alle möglichen Größen des Gartens an (z. B. 3 × 7). Gärten, die durch Drehung gleich sind, zählen nur einmal.</li>
<li data-n="b)">Welcher dieser Gärten hat die größte Fläche? Gib die Fläche in m² an.</li></ol>`,
  ua:`<p>Прямокутний город огороджують парканом завдовжки рівно 20 м. Його сторони — цілі метри.</p>
<ol class="parts"><li data-n="a)">Вкажи всі можливі розміри городу (наприклад, 3 × 7). Городи, однакові після повороту, рахуються один раз.</li>
<li data-n="b)">Який із цих городів має найбільшу площу? Вкажи площу в м².</li></ol>`,
  legend:"Schreibe Größen so: 3x7, 4x6 (x oder · oder ×).",
  fields:[
    {id:"a", part:"a)", type:"sizes", label:"Alle Gartengrößen", answer:["1x9","2x8","3x7","4x6","5x5"]},
    {id:"b", part:"b)", type:"num", label:"größte Fläche", unit:"m²", answer:25}
  ],
  hints:[
    "Der Zaun läuft um alle vier Seiten. Länge + Breite + Länge + Breite = 20 m. Was ergibt dann Länge + Breite?",
    "Länge + Breite = 10. Schreibe alle Paare ganzer Zahlen auf: 1 + 9, 2 + 8, …",
    "Rechne für jedes Paar die Fläche aus (Länge · Breite) und vergleiche."
  ],
  loesung:`<ul><li><b>a)</b> Umfang 2 · (Länge + Breite) = 20, also Länge + Breite = 10: <b>1 × 9, 2 × 8, 3 × 7, 4 × 6, 5 × 5</b>.</li>
<li><b>b)</b> Flächen: 9, 16, 21, 24, 25 m². Am größten ist das Quadrat 5 × 5 mit <b>25 m²</b>.</li></ul>`,
  rubrik:"a) Herleitung Länge + Breite = 10 und vollständige Liste; b) alle Flächen verglichen."
},
{
  id:"demo08", jahr:"Demo", thema:"Rechnen", titel:"Vier Fünfen",
  text:`<p>Stelle die Zahlen 1 bis 6 jeweils mit <b>genau vier Fünfen</b> dar. Du darfst nur +, −, ·, : und Klammern benutzen und musst „Punkt vor Strich“ beachten.</p>
<p>Beispiel: 5 − 5 + 5 − 5 = 0.</p>`,
  ua:`<p>Запиши кожне з чисел від 1 до 6 за допомогою <b>рівно чотирьох п'ятірок</b>. Можна використовувати лише +, −, ·, : і дужки, дотримуючись правила «множення й ділення раніше за додавання й віднімання».</p>
<p>Приклад: 5 − 5 + 5 − 5 = 0.</p>`,
  legend:"Tippe zum Beispiel: (5 + 5) : 5 · 5. Für „mal“ geht ·, * oder x, für „geteilt“ : oder /.",
  fields:[1,2,3,4,5,6].map(n=>({id:"z"+n, type:"expr", digit:5, target:n, eights:4, label:"= "+n})),
  hints:[
    "Kleine Bausteine aus zwei Fünfen: 5 : 5 = 1, 5 − 5 = 0, 5 + 5 = 10, 5 · 5 = 25.",
    "Mit drei Fünfen: (5 + 5) : 5 = 2. Und 5 · 5 = 25 kann man durch 5 teilen. Achte auf Klammern: 5 + 5 : 5 ist 6, nicht 2!",
    "3 = (5 + 5 + 5) : 5. 4 = (5 · 5 − 5) : 5. 6 = (5 · 5 + 5) : 5. Für 5: 5 + (5 − 5) · 5."
  ],
  loesung:`<p>Es gibt viele richtige Darstellungen, zum Beispiel:</p>
<ul class="mono"><li>1 = 5 : 5 + 5 − 5</li><li>2 = 5 : 5 + 5 : 5</li><li>3 = (5 + 5 + 5) : 5</li><li>4 = (5 · 5 − 5) : 5</li><li>5 = 5 + (5 − 5) · 5</li><li>6 = (5 · 5 + 5) : 5</li></ul>`,
  rubrik:"Jede Darstellung muss genau vier Fünfen benutzen und mit Punkt-vor-Strich stimmen. Kurzer Satz zum Vorgehen genügt."
},
{
  id:"demo09", jahr:"Demo", thema:"Geometrie", titel:"Ein Schnitt durchs Quadrat",
  noLw:true,
  text:`<p>Zeichne ein Quadrat und schneide es mit einer geraden Linie in zwei Teile. Zeichne mit Bleistift und Lineal:</p>
<ol class="parts"><li data-n="a)">zwei Dreiecke,</li><li data-n="b)">zwei Vierecke,</li><li data-n="c)">ein Dreieck und ein Fünfeck,</li><li data-n="d)">ein Dreieck und ein Viereck.</li></ol>
<p>Du brauchst keine Begründung zu schreiben.</p>`,
  ua:`<p>Намалюй квадрат і розріж його однією прямою лінією на дві частини. Намалюй олівцем і лінійкою:</p>
<ol class="parts"><li data-n="a)">два трикутники,</li><li data-n="b)">два чотирикутники,</li><li data-n="c)">трикутник і п'ятикутник,</li><li data-n="d)">трикутник і чотирикутник.</li></ol>
<p>Обґрунтування писати не потрібно.</p>`,
  legend:"Zeichne auf Papier. Danach hakst du ab, was du geschafft hast, und vergleichst mit den Musterzeichnungen.",
  fields:[
    {id:"s", type:"selfcheck", label:"Diese Zeichnungen habe ich gemacht:", items:["a) zwei Dreiecke","b) zwei Vierecke","c) Dreieck + Fünfeck","d) Dreieck + Viereck"]}
  ],
  hints:[
    "Probiere verschiedene Schnitte: durch zwei Ecken, durch eine Ecke, quer durch zwei gegenüberliegende Seiten, an einer Ecke vorbei.",
    "Wo die Linie den Rand schneidet, entstehen neue Ecken. Geht sie genau durch eine Ecke des Quadrats, entsteht dort keine neue.",
    "a) Diagonale. b) von der linken zur rechten Seite. c) Schneide eine Ecke ab. d) Von einer Ecke zur Mitte einer gegenüberliegenden Seite."
  ],
  loesung:`<p>Beispiele (blau = Schnittlinie):</p>`+cutSolutions(),
  rubrik:"Reine Zeichenaufgabe; Selbsteinschätzung."
}
];
