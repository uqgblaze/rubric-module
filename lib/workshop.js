'use strict';
// One worksheet shared by the animated lesson and the responsive reading page.
window.RubricWorkshop = function(container, done) {
  const key = 'rubric-design:ch01:draft:v1';
  let saved = {};
  try { const v = JSON.parse(localStorage.getItem(key) || '{}'); if(v && typeof v === 'object' && !Array.isArray(v)) saved=v; } catch {}
  const el = (tag, cls, text) => { const n=document.createElement(tag); n.className=cls||''; if(text) n.textContent=text; return n; };
  const form=el('form','rd-worksheet');
  const fields={};
  const items=[['capability','Capability / assessment','text','e.g. Critical analysis in a case study report'],['lower','One descriptor','textarea','Describe what is visible at one level.'],['higher','Adjacent higher descriptor','textarea','Describe the different action or evidence.'],['evidence','What changes in the work?','text','e.g. Separate factors become an explained relationship.']];
  for (const [name,label,type,placeholder] of items) {
    const wrap=el('label',type==='text'?'rd-full':'',label);
    const field=el(type==='text'?'input':'textarea'); if(type==='text') field.type='text';
    field.name=name; field.placeholder=placeholder; field.maxLength=1800; field.value=typeof saved[name]==='string'?saved[name]:'';
    fields[name]=field; wrap.append(field); form.append(wrap);
  }
  const checks=el('fieldset','rd-checks rd-full'); checks.append(el('legend','','Review your draft'));
  [['student','Could a student identify a specific change before submitting?'],['marker','Could a marker point to the evidence for the difference?']].forEach(([name,text])=>{
    const label=el('label'); const input=el('input'); input.type='checkbox'; input.name=name; input.checked=saved[name]===true; fields[name]=input; label.append(input,document.createTextNode(text)); checks.append(label);
  });
  form.append(checks);
  const status=el('p','rd-note rd-status'); status.setAttribute('role','status');
  status.textContent='Your draft stays in this browser when storage is available. Download a copy to keep it.';
  const data=()=>Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,v.type==='checkbox'?v.checked:v.value]));
  form.addEventListener('input',()=>{try{localStorage.setItem(key,JSON.stringify(data())); status.textContent='Draft saved in this browser.';}catch{status.textContent='Browser storage is unavailable. Download your notes to keep them.';}});
  form.addEventListener('submit',e=>e.preventDefault());
  form.addEventListener('keydown',e=>{ if(e.target.matches('input, textarea')) { if(e.key==='Escape') e.target.blur(); e.stopPropagation(); } });
  const acts=el('div','acts'); const download=el('button','btn quiet','Download my notes'); download.type='button';
  download.onclick=()=>{const v=data(); const body=`RUBRIC DESIGN — MY CHAPTER 1 WORKSHEET\n\nCapability / assessment\n${v.capability}\n\nOne descriptor\n${v.lower}\n\nAdjacent higher descriptor\n${v.higher}\n\nObservable difference\n${v.evidence}\n\nStudent test: ${v.student?'checked':'not yet checked'}\nMarker test: ${v.marker?'checked':'not yet checked'}\n\nNext: discuss the row with a colleague and compare it with sample work.\n`;
    const url=URL.createObjectURL(new Blob([body],{type:'text/plain;charset=utf-8'})); const a=el('a'); a.href=url; a.download='my-rubric-revision.txt'; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000); status.textContent='Notes downloaded.';};
  acts.append(download);
  if(done){const finish=el('button','btn go','Finish chapter'); finish.type='button'; finish.onclick=done; acts.append(finish);}
  container.append(form,status,acts);
};
