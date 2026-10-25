/*
 * Sanity checks for the task data:
 *   – every model answer is accepted by the answer checker,
 *   – typical wrong answers are rejected with a helpful note,
 *   – every task has a translation and exactly three hints.
 * Run: npm test
 */
const fs = require('fs'), path = require('path'), assert = require('assert');
const SRC = path.join(__dirname, '..', 'src');
let code = ['figs.js', 'tasks.js', 'werkstatt.js'].map(f => fs.readFileSync(path.join(SRC, f), 'utf8')).join('\n')
         + fs.readFileSync(path.join(SRC, 'app.js'), 'utf8').replace(/\nboot\(\);\s*$/, '');
code = 'var document={addEventListener(){},hidden:false};var window={};var localStorage={getItem(){return null},setItem(){}};'
     + code + '\nmodule.exports={TASKS,checkTask,checkField,permsOf,WERKSTATT};';
const m = new module.constructor(); m._compile(code, 'bundle.js');
const { TASKS, checkTask, checkField, permsOf, WERKSTATT } = m.exports;

const EXPR = { 8: { 6:'8-(8+8):8', 10:'8+(8+8):8' }, 5: { 1:'5:5+5-5', 2:'5:5+5:5', 3:'(5+5+5):5', 4:'(5·5-5):5', 5:'5+(5-5)·5', 6:'(5*5+5)/5' } };
function modelValue(f) {
  switch (f.type) {
    case 'num':    return f.cents ? '0,' + f.answer : String(f.answer);
    case 'money':  return f.answer.map(String);
    case 'perms':  return [...permsOf(f.multiset)].filter(w => !f.prefix || w.indexOf(f.prefix) === 0).join(', ');
    case 'sizes': case 'seq': case 'numset': return f.answer.join(', ');
    case 'expr':   return EXPR[f.digit || 8][f.target];
    case 'selfcheck': return f.items.slice();
    default:       return f.answer;
  }
}
let n = 0;
assert.strictEqual(new Set(TASKS.map(t => t.id)).size, TASKS.length, 'task ids must be unique');
for (const t of TASKS) {
  assert.ok(t.ua && t.hints.length === 3 && t.loesung && t.rubrik, `${t.id}: ua, 3 hints, solution, rubric required`);
  const vals = {}; t.fields.forEach(f => { vals[f.id] = modelValue(f); });
  const r = checkTask(t, vals);
  assert.strictEqual(r.richtig, r.einheiten, `${t.id}: model answer not accepted`);
  n++;
}
for (const st of WERKSTATT) for (const it of st.items) {
  const f = Object.assign({ id: it.id, label: '' }, it.field);
  assert.ok(checkField(f, modelValue(f)).units.every(u => u.ok), `Werkstatt ${it.id}: model answer not accepted`);
  n++;
}
// wrong answers produce helpful notes
const flags = TASKS.find(t => t.id === 'demo04').fields[0];
assert.strictEqual(checkField(flags, 'RRBG, RBRG, RRBG').note, '2 von 12 gefunden · doppelt: RRBG');
const five = TASKS.find(t => t.id === 'demo08').fields[1];
assert.ok(/ergibt 6/.test(checkField(five, '5+5:5').note + ' ergibt 6') && !checkField(five, '5+5:5').units[0].ok, 'precedence: 5+5:5 is 6, not 2');
assert.strictEqual(checkField(TASKS.find(t => t.id === 'demo06').fields[0], '195, 915').note, '2 von 4 gefunden');
console.log(`OK – ${n} tasks/exercises checked, ${TASKS.length} demo tasks.`);
