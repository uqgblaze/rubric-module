'use strict';
// Chapter-local; used by the animated and readable versions, without engine dependencies.
const rd2El=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;};
window.RD2Mixer=function(container,done){
  const root=rd2El('div','rd2-mixer');
  const intro=rd2El('p','rd2-note','Illustrative focus choices — not marks, numerical weights or a required checklist.');
  const instructions=rd2El('p','rd2-instructions','Compare two tasks, then change a focus. All eight values remain in view. Tab + Enter/Space operates every control; keys 1–8 also toggle values.');
  const tasks=rd2El('div','rd2-tasks'); tasks.setAttribute('role','group');tasks.setAttribute('aria-label','Choose a task');
  const purpose=rd2El('p','rd2-purpose');
  const tracks=rd2El('div','rd2-tracks');tracks.setAttribute('role','group');tracks.setAttribute('aria-label','Qualitative inquiry focus');
  const preview=rd2El('div','rd2-preview');preview.setAttribute('aria-live','polite');preview.setAttribute('aria-atomic','true');
  const caption=rd2El('p','rd2-focus-summary');
  const acts=rd2El('div','rd2-actions');
  const reset=rd2El('button','btn quiet','Restore this task’s example');reset.type='button';acts.append(reset);
  let current=0, active='accuracy';
  const mixes=RD2_DATA.tasks.map(t=>new Set(t.focus));
  const taskButtons=RD2_DATA.tasks.map((t,i)=>{const b=rd2El('button','btn quiet',t.name);b.type='button';b.onclick=()=>{current=i;active=t.focus[0];render();};tasks.append(b);return b;});
  const valueButtons=RD2_DATA.values.map((v,i)=>{
    const b=rd2El('button','rd2-track');b.type='button';b.dataset.value=v.id;
    const name=rd2El('span','rd2-value-name',v.name), rail=rd2El('span','rd2-rail'), thumb=rd2El('span','rd2-thumb'), state=rd2El('span','rd2-setting');rail.setAttribute('aria-hidden','true');rail.append(thumb);
    b.append(name,rail,state);b.title=v.definition;
    b.onclick=()=>{const set=mixes[current];if(set.has(v.id))set.delete(v.id);else set.add(v.id);active=v.id;render();};
    tracks.append(b);return b;
  });
  function render(){
    const task=RD2_DATA.tasks[current],set=mixes[current],value=RD2_DATA.values.find(v=>v.id===active);
    taskButtons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===current)));
    purpose.textContent='Task: '+task.purpose;
    valueButtons.forEach((b,i)=>{const v=RD2_DATA.values[i],on=set.has(v.id);b.setAttribute('aria-pressed',String(on));b.setAttribute('aria-label',v.name+': '+(on?'foreground':'keep in view')+'. Toggle focus and show an evidence example.');b.classList.toggle('rd2-active',v.id===active);b.querySelector('.rd2-setting').textContent=on?'Foreground':'In view';});
    const names=RD2_DATA.values.filter(v=>set.has(v.id)).map(v=>v.name.toLowerCase());
    caption.textContent=names.length?'Your discussion foregrounds '+names.join(', ')+'.':'No value is foregrounded. Choose a value to explore its evidence.';
    preview.replaceChildren(rd2El('p','rd2-preview-title',value.name+' → evidence for this task'),rd2El('p','rd2-example',task.examples[active]),rd2El('p','rd2-example-note',(set.has(active)?'Foregrounded for discussion. ':'Kept in view. ')+value.definition+' This example may express other values too.'));
  }
  reset.onclick=()=>{mixes[current]=new Set(RD2_DATA.tasks[current].focus);active=RD2_DATA.tasks[current].focus[0];render();};
  if(done){const go=rd2El('button','btn go','Continue');go.type='button';go.onclick=done;acts.append(go);}
  root.addEventListener('keydown',e=>{if(!e.ctrlKey&&!e.metaKey&&!e.altKey&&/^[1-8]$/.test(e.key)){e.preventDefault();e.stopPropagation();valueButtons[+e.key-1].click();}});
  root.append(intro,instructions,tasks,purpose,tracks,caption,preview,acts);container.append(root);render();
  return {key(e){if(/^[1-8]$/.test(e.key)){valueButtons[+e.key-1].click();return true;}return false;}};
};
window.RD2Worksheet=function(container,done){
  const key='rubric-design:ch02:task-evidence:v1';let saved={};
  try{const value=JSON.parse(localStorage.getItem(key)||'{}');if(value&&typeof value==='object'&&!Array.isArray(value))saved=value;}catch{}
  const form=rd2El('form','rd-worksheet rd2-worksheet'),fields={};
  const specs=[['task','Task and capability','text','e.g. Recommend a feasible service change'],['values','Useful values for this task','text','e.g. Depth and significance'],['evidence','What should students do or show?','textarea','Turn a value into evidence a reader could locate.'],['review','Where do values overlap, or need discussion?','textarea','Note possible double counting or a question for a colleague.']];
  specs.forEach(([name,label,type,placeholder])=>{const wrap=rd2El('label',type==='text'?'rd-full':'',label);const field=rd2El(type==='text'?'input':'textarea');if(type==='text')field.type='text';field.name=name;field.placeholder=placeholder;field.maxLength=1800;field.value=typeof saved[name]==='string'?saved[name]:'';fields[name]=field;wrap.append(field);form.append(wrap);});
  const checks=rd2El('fieldset','rd-checks rd-full');checks.append(rd2El('legend','','Review your evidence statement'));
  [['student','Could a student identify the action to take in this task?'],['marker','Could a marker locate that evidence without relying on a vague value label?']].forEach(([name,text])=>{const l=rd2El('label'),i=rd2El('input');i.type='checkbox';i.name=name;i.checked=saved[name]===true;fields[name]=i;l.append(i,document.createTextNode(text));checks.append(l);});form.append(checks);
  const status=rd2El('p','rd-note rd-status','Unscored. Your draft stays in this browser when storage is available. Download a copy to keep it.');status.setAttribute('role','status');
  const data=()=>Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,v.type==='checkbox'?v.checked:v.value]));
  form.addEventListener('input',()=>{try{localStorage.setItem(key,JSON.stringify(data()));status.textContent='Draft saved in this browser. This reflection is unscored.';}catch{status.textContent='Browser storage is unavailable. Download your notes to keep them.';}});
  form.addEventListener('submit',e=>e.preventDefault());
  form.addEventListener('keydown',e=>{if(e.target.matches('input, textarea')){if(e.key==='Escape')e.target.blur();e.stopPropagation();}});
  const acts=rd2El('div','rd2-actions'),download=rd2El('button','btn quiet','Download my notes');download.type='button';download.onclick=()=>{const d=data(),body=`RUBRIC DESIGN — CHAPTER 2 TASK AND EVIDENCE\n\nTask and capability\n${d.task}\n\nUseful values\n${d.values}\n\nObservable evidence\n${d.evidence}\n\nOverlap and discussion\n${d.review}\n\nStudent action test: ${d.student?'checked':'not yet checked'}\nMarker evidence test: ${d.marker?'checked':'not yet checked'}\n\nNext: test this evidence statement with a colleague and sample work.\nValues are contextual and overlapping, not marks or a compulsory checklist.\n`;
    const url=URL.createObjectURL(new Blob([body],{type:'text/plain;charset=utf-8'})),a=rd2El('a');a.href=url;a.download='my-task-values-evidence.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Notes downloaded.';};acts.append(download);
  if(done){const go=rd2El('button','btn go','Finish chapter');go.type='button';go.onclick=done;acts.append(go);}container.append(form,status,acts);
};
window.RD2ReadPractice=function(){
  const scores={};
  function update(){const values=Object.values(scores),sum=values.reduce((a,v)=>a+v,0),status=document.getElementById('reading-score');if(status)status.textContent=`First attempts: ${sum} correct from ${values.length} answered (6 questions). Mixer and reflection are unscored. Reloading this page starts a new practice score.`;}
  document.querySelectorAll('[data-question]').forEach(root=>{
    const q=RD2_DATA.questions.find(q=>q.id===root.dataset.question);let resolved=false;
    root.append(rd2El('h3','',q.title),rd2El('p','',q.prompt));
    const options=rd2El('div','rd2-read-options'),feedback=rd2El('p','rd2-read-feedback');feedback.setAttribute('role','status');
    const reveal=rd2El('button','btn quiet','Show answer');reveal.type='button';reveal.hidden=true;
    const buttons=q.options.map((text,i)=>{const b=rd2El('button','btn quiet',text);b.type='button';b.onclick=()=>{if(resolved)return;const ok=i===q.right;if(!Object.hasOwn(scores,q.id)){scores[q.id]=+ok;update();}feedback.textContent=(ok?'Correct. ':'Not quite. ')+(ok?q.why:q.wrong[i]);if(ok){resolved=true;buttons.forEach(n=>n.disabled=true);reveal.hidden=true;}else{b.disabled=true;reveal.hidden=false;}};options.append(b);return b;});
    reveal.onclick=()=>{resolved=true;buttons.forEach(n=>n.disabled=true);feedback.textContent='Answer: '+q.options[q.right]+' '+q.why;reveal.hidden=true;};root.append(options,feedback,reveal);
  });
};
