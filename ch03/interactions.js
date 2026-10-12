'use strict';
const rd3El=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;};
window.RD3Worksheet=function(container,done){
 const key='rubric-design:ch03:structure:v1';let saved={};
 try{const value=JSON.parse(localStorage.getItem(key)||'{}');if(value&&typeof value==='object'&&!Array.isArray(value))saved=value;}catch{}
 const form=rd3El('form','rd-worksheet'),fields={};
 const specs=[['task','Task and intended learning outcome','text','What capability should this assessment demonstrate?'],['threshold','Evidence required at the local threshold','text','Use your task and published criteria, not an automatic SOLO grade.'],['difference','A meaningful difference in response structure','textarea','e.g. Separate factors become a supported causal explanation.'],['conditions','Context, assumptions or limits to discuss','textarea','When is transfer expected? What evidence would justify it?']];
 specs.forEach(([name,label,type,placeholder])=>{const wrap=rd3El('label',type==='text'?'rd-full':'',label),field=rd3El(type==='text'?'input':'textarea');if(type==='text')field.type='text';field.name=name;field.placeholder=placeholder;field.maxLength=1800;field.value=typeof saved[name]==='string'?saved[name]:'';fields[name]=field;wrap.append(field);form.append(wrap);});
 const checks=rd3El('fieldset','rd-checks rd-full');checks.append(rd3El('legend','','Check your reasoning'));
 [['evidence','I describe visible evidence, rather than verbs or length alone.'],['context','I check the task and criteria before judging the threshold.']].forEach(([name,text])=>{const label=rd3El('label'),input=rd3El('input');input.type='checkbox';input.name=name;input.checked=saved[name]===true;fields[name]=input;label.append(input,document.createTextNode(text));checks.append(label);});form.append(checks);
 const status=rd3El('p','rd-note rd-status','Unscored. Saved in this browser when storage is available. Download a copy to keep it.');status.setAttribute('role','status');
 const data=()=>Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,v.type==='checkbox'?v.checked:v.value]));
 form.addEventListener('input',()=>{try{localStorage.setItem(key,JSON.stringify(data()));status.textContent='Draft saved in this browser. Reflection is unscored.';}catch{status.textContent='Browser storage is unavailable. Download your notes to keep them.';}});
 form.addEventListener('submit',e=>e.preventDefault());form.addEventListener('keydown',e=>{if(e.target.matches('input, textarea')){if(e.key==='Escape')e.target.blur();e.stopPropagation();}});
 const acts=rd3El('div','rd3-actions'),download=rd3El('button','btn quiet','Download my notes');download.type='button';download.onclick=()=>{const d=data(),body=`RUBRIC DESIGN - CHAPTER 3: RESPONSE STRUCTURE\n\nTask and intended outcome\n${d.task}\n\nLocal threshold evidence\n${d.threshold}\n\nMeaningful structural difference\n${d.difference}\n\nContext, assumptions and limits\n${d.conditions}\n\nVisible evidence check: ${d.evidence?'checked':'not yet checked'}\nTask and criteria check: ${d.context?'checked':'not yet checked'}\n\nNext: compare expectations with sample work and a colleague.\nSOLO describes the observed response. It does not supply an automatic grade.\n`;
 const url=URL.createObjectURL(new Blob([body],{type:'text/plain;charset=utf-8'})),a=rd3El('a');a.href=url;a.download='my-response-structure.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Notes downloaded.';};acts.append(download);
 if(done){const go=rd3El('button','btn go','Finish chapter');go.type='button';go.onclick=done;acts.append(go);}container.append(form,status,acts);
};
window.RD3ReadPractice=function(){
 const scores={};function update(){const values=Object.values(scores),sum=values.reduce((a,v)=>a+v,0);document.getElementById('reading-score').textContent=`First attempts: ${sum} correct from ${values.length} answered (6 questions). Reflection is unscored. Reloading starts a new practice score.`;}
 document.querySelectorAll('[data-question]').forEach(root=>{
 const q=RD3_DATA.questions.find(q=>q.id===root.dataset.question);let resolved=false;root.append(rd3El('h3','',q.title),rd3El('p','',q.prompt));
 const options=rd3El('div','rd3-read-options'),feedback=rd3El('p','rd3-read-feedback');feedback.setAttribute('role','status');
 const reveal=rd3El('button','btn quiet','Show answer');reveal.type='button';reveal.hidden=true;
 const buttons=q.options.map((text,i)=>{const b=rd3El('button','btn quiet',text);b.type='button';b.onclick=()=>{if(resolved)return;const ok=i===q.right;if(!Object.hasOwn(scores,q.id)){scores[q.id]=+ok;update();}feedback.textContent=(ok?'Correct. ':'Not quite. ')+(ok?q.why:q.wrong[i]);if(ok){resolved=true;buttons.forEach(n=>n.disabled=true);reveal.hidden=true;}else{b.disabled=true;reveal.hidden=false;}};options.append(b);return b;});
 reveal.onclick=()=>{resolved=true;buttons.forEach(n=>n.disabled=true);feedback.textContent='Answer: '+q.options[q.right]+' '+q.why;reveal.hidden=true;};root.append(options,feedback,reveal);
 });
};
