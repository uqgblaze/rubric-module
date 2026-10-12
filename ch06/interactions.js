'use strict';
const rd6El=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;};
window.RD6RevisionLab=function(container,done){
 const form=rd6El('form','rd6-lab');form.addEventListener('submit',e=>e.preventDefault());
 const note=rd6El('p','rd6-lab-note','Adapted task standard: logical fit + case evidence + innovation (a justified change to current practice).');
 const label=rd6El('label','rd6-variant-label','Choose an alternative to compare'),select=rd6El('select');select.name='revision-variant';
 RD6_DATA.variants.forEach(v=>{const o=rd6El('option','',v.label);o.value=v.id;select.append(o);});label.append(select);
 const comparison=rd6El('div','rd6-compare'),before=rd6El('div','rd6-compare-cell'),after=rd6El('div','rd6-compare-cell');
 before.append(rd6El('h3','','Original wording'),rd6El('p','','Cogently proposes innovative solutions that hit the mark.'));
 const revised=rd6El('p','rd6-revised');after.append(rd6El('h3','','Selected revision'),revised);comparison.append(before,after);
 const inspection=rd6El('div','rd6-inspection');inspection.hidden=true;
 const requirements=rd6El('div','rd6-requirements'),explanation=rd6El('p','rd6-lab-feedback');explanation.setAttribute('role','status');explanation.setAttribute('aria-live','polite');
 const explicit=rd6El('p','rd6-explicit');inspection.append(requirements,explicit);
 const actions=rd6El('div','rd6-actions'),inspect=rd6El('button','btn go','Inspect this revision');inspect.type='button';
 const current=()=>RD6_DATA.variants.find(v=>v.id===select.value);
 const render=()=>{revised.textContent=current().text;inspection.hidden=true;explanation.textContent='Compare the wording, then inspect what became explicit and whether the intended standard is preserved.';};
 inspect.onclick=()=>{const v=current();requirements.replaceChildren();['Logical fit','Case evidence','Defined innovation'].forEach((r,i)=>{const e=rd6El('p','rd6-requirement '+(v.retained[i]?'explicit':'implicit'),r+': '+(v.retained[i]?'explicit':'not explicit'));requirements.append(e);});explicit.textContent='What is explicit: '+v.explicit.join('; ')+'.';inspection.hidden=false;explanation.textContent=v.inspection;};
 select.addEventListener('change',render);form.addEventListener('keydown',e=>{if(e.target.matches('select')){if(e.key==='Escape')e.target.blur();e.stopPropagation();}});
 actions.append(inspect);if(done){const next=rd6El('button','btn quiet','Continue to quantity');next.type='button';next.onclick=done;actions.append(next);}
 form.append(note,label,comparison);container.append(form,inspection,explanation,actions);render();
};

window.RD6Worksheet=function(container,done){
 const key='rubric-design:ch06:accessible-descriptor:v1';let saved={};try{const value=JSON.parse(localStorage.getItem(key)||'{}');if(value&&typeof value==='object'&&!Array.isArray(value))saved=value;}catch{}
 const form=rd6El('form','rd-worksheet'),fields={};
 const specs=[['standard','Task and intended standard','text','What learning demand must the revision preserve?'],['terms','Term definition or quantity rationale','text','What term or count needs explanation, and where?'],['original','Original complete cell','textarea','Paste or write one descriptor.'],['revision','Your revised complete cell','textarea','Describe the action and evidence expected.'],['explicit','What became explicit?','textarea','Which idiom, assumption or dependency did you remove?'],['review','Check that the standard is preserved','textarea','What will a reader look for in sample work? What still needs review?']];
 specs.forEach(([name,label,type,placeholder])=>{const wrap=rd6El('label','',label),field=rd6El(type==='text'?'input':'textarea');if(type==='text')field.type='text';field.name=name;field.placeholder=placeholder;field.maxLength=1800;field.value=typeof saved[name]==='string'?saved[name]:'';fields[name]=field;wrap.append(field);form.append(wrap);});
 const checks=rd6El('fieldset','rd-checks rd-full');checks.append(rd6El('legend','','Review the revision'));
 [['standalone','This cell states its own expected performance.'],['preserved','I checked that the intended demand remains.']].forEach(([name,text])=>{const label=rd6El('label'),input=rd6El('input');input.type='checkbox';input.name=name;input.checked=saved[name]===true;fields[name]=input;label.append(input,document.createTextNode(text));checks.append(label);});form.append(checks);
 const status=rd6El('p','rd-note rd-status','Unscored draft. Saved in this browser when available; download a copy to keep it.');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
 const data=()=>Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,v.type==='checkbox'?v.checked:v.value]));
 form.addEventListener('input',()=>{try{localStorage.setItem(key,JSON.stringify(data()));status.textContent='Draft saved in this browser. Your writing is not automatically graded.';}catch{status.textContent='Browser storage is unavailable. Download your draft to keep it.';}});
 form.addEventListener('submit',e=>e.preventDefault());form.addEventListener('keydown',e=>{if(e.target.matches('input, textarea')){if(e.key==='Escape')e.target.blur();e.stopPropagation();}});
 const actions=rd6El('div','rd6-actions'),download=rd6El('button','btn quiet','Download my descriptor');download.type='button';download.onclick=()=>{const d=data(),body=`RUBRIC DESIGN - CHAPTER 6: MY ACCESSIBLE DESCRIPTOR\n\nTask and intended standard\n${d.standard}\n\nTerm definition or quantity rationale\n${d.terms}\n\nOriginal complete cell\n${d.original}\n\nRevised complete cell\n${d.revision}\n\nWhat became explicit?\n${d.explicit}\n\nCheck that the standard is preserved\n${d.review}\n\nCell stands alone: ${d.standalone?'checked':'not yet checked'}\nIntended demand preserved: ${d.preserved?'checked':'not yet checked'}\n\nThis is an unscored draft. Test the wording with a reader and sample work.\n`;
 const url=URL.createObjectURL(new Blob([body],{type:'text/plain;charset=utf-8'})),a=rd6El('a');a.href=url;a.download='my-accessible-descriptor.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Descriptor downloaded.';};actions.append(download);
 if(done){const go=rd6El('button','btn go','Finish chapter');go.type='button';go.onclick=done;actions.append(go);}container.append(form,status,actions);
};

window.RD6ReadPractice=function(){
 const key='rubric-design:ch06:reading-first-attempts:v1';let scores={};try{const value=JSON.parse(sessionStorage.getItem(key)||'{}');if(value&&typeof value==='object'&&!Array.isArray(value))RD6_DATA.questions.forEach(q=>{if(value[q.id]===0||value[q.id]===1)scores[q.id]=value[q.id];});}catch{}
 const update=()=>{const values=Object.values(scores),sum=values.reduce((a,v)=>a+v,0);document.getElementById('reading-score').textContent=`First attempts: ${sum} correct from ${values.length} answered (6 questions). Retained in this tab until you restart practice when storage is available. The workbench and worksheet are unscored.`;};
 function mount(){document.querySelectorAll('[data-question]').forEach(root=>{const q=RD6_DATA.questions.find(q=>q.id===root.dataset.question);let resolved=false;root.replaceChildren(rd6El('h3','',q.title),rd6El('p','',q.prompt));
 const options=rd6El('div','rd6-read-options'),feedback=rd6El('p','rd6-read-feedback');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');const reveal=rd6El('button','btn quiet','Show answer');reveal.type='button';reveal.hidden=true;
 const buttons=q.options.map((text,i)=>{const b=rd6El('button','btn quiet',text);b.type='button';b.onclick=()=>{if(resolved)return;const ok=i===q.right;if(!Object.hasOwn(scores,q.id)){scores[q.id]=+ok;try{sessionStorage.setItem(key,JSON.stringify(scores));}catch{}update();}feedback.textContent=(ok?'Correct. ':'Not quite. ')+(ok?q.why:q.wrong[i]);if(ok){resolved=true;buttons.forEach(n=>n.disabled=true);reveal.hidden=true;}else{b.disabled=true;reveal.hidden=false;}};options.append(b);return b;});reveal.onclick=()=>{resolved=true;buttons.forEach(n=>n.disabled=true);feedback.textContent='Answer: '+q.options[q.right]+' '+q.why;reveal.hidden=true;};root.append(options,feedback,reveal);});update();}
 document.getElementById('restart-practice').onclick=()=>{scores={};try{sessionStorage.removeItem(key);}catch{}mount();document.querySelector('[data-question] button').focus();};mount();
};
