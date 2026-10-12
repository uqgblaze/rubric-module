'use strict';
const rd5El=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;};
window.RD5AlignmentLab=function(container,done){
 const form=rd5El('form','rd5-lab');form.addEventListener('submit',e=>e.preventDefault());
 const note=rd5El('p','rd5-lab-note','Adapted case task: diagnose an operational issue and justify a feasible response. Explore two criteria; changing location alone does not change a judgement.');
 const outcomes=[['diagnose','Diagnose an operational issue'],['respond','Justify a feasible response'],['communicate','Communicate reasoned advice']];
 const judgements=[['cause','Supported causal explanation'],['response','Justified response fit + feasibility'],['navigation','Audience navigation + traceability']];
 const evidence=[['shared','Shared paragraph'],['separate','Different report sections']];
 const grid=rd5El('div','rd5-lab-grid'),map=rd5El('div','rd5-lab-map'),cells=[];
 ['Critical analysis','Application to practice'].forEach((label,i)=>{const box=rd5El('div','rd5-lab-cell');box.append(rd5El('h3','',label));const selectors={};
 [['outcome','Intended outcome',outcomes],['judgement','Quality being judged',judgements]].forEach(([name,label,options])=>{const wrap=rd5El('label','',label),select=rd5El('select');select.name='lab-'+name+'-'+i;options.forEach(([value,label])=>{const o=rd5El('option','',label);o.value=value;select.append(o);});if(name==='outcome')select.value=i?'respond':'diagnose';selectors[name]=select;wrap.append(select);box.append(wrap);});
 grid.append(box);const path=rd5El('p','rd5-lab-path');map.append(path);cells.push({...selectors,path});});
 const locLabel=rd5El('label','','Where does the evidence appear?'),loc=rd5El('select');loc.name='lab-location';evidence.forEach(([value,label])=>{const o=rd5El('option','',label);o.value=value;loc.append(o);});locLabel.append(loc);
 const status=rd5El('p','rd5-lab-feedback','Unscored exploration. Choose the judgements and outcomes, then compare the pair.');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
 const get=(arr,v)=>arr.find(a=>a[0]===v)[1];
 const preview=()=>cells.forEach(c=>{c.path.textContent=get(outcomes,c.outcome.value)+' ← '+get(judgements,c.judgement.value);});
 form.addEventListener('change',()=>{preview();status.textContent='Map updated. Compare the pair to inspect the judgement boundaries.';});
 form.addEventListener('keydown',e=>{if(e.target.matches('select')){if(e.key==='Escape')e.target.blur();e.stopPropagation();}});
 const acts=rd5El('div','rd5-actions'),compare=rd5El('button','btn go','Compare the pair');compare.type='button';compare.onclick=()=>{
 const required={cause:'diagnose',response:'respond',navigation:'communicate'},a=cells[0],b=cells[1],messages=[];
 if(a.judgement.value===b.judgement.value)messages.push('Repeated judgement: both rows reward the same quality. '+(loc.value==='separate'?'Different sections do not make that quality distinct.':'Sharing a paragraph is not the problem; repeating the reward is.'));
 else messages.push(loc.value==='shared'?'Distinct qualities can be judged in the same paragraph.':'Different judgements are visible; separate locations are not what makes them distinct.');
 if(cells.some(c=>required[c.judgement.value]!==c.outcome.value))messages.push('Check alignment: a selected outcome does not match the quality being judged in this example.');
 else if(a.judgement.value==='cause'&&b.judgement.value==='response')messages.push('This pair covers diagnosis and response: causal explanation versus response fit and feasibility. Test both boundaries with sample work.');
 else if(a.judgement.value==='response'&&b.judgement.value==='cause')messages.push('The links cover both outcomes, but the criterion names are reversed: analysis judges causal explanation; application judges response fit and feasibility.');
 else messages.push('The selected links make sense individually, but this pair leaves task learning uncovered. Include diagnosis and a feasible response.');
 status.textContent=messages.join(' ');
 };
 acts.append(compare);if(done){const next=rd5El('button','btn quiet','Continue to weights');next.type='button';next.onclick=done;acts.append(next);}
 form.append(note,grid,locLabel,map);container.append(form,status,acts);preview();
};

window.RD5Worksheet=function(container,done){
 const key='rubric-design:ch05:criterion-map:v1';let saved={};try{const value=JSON.parse(localStorage.getItem(key)||'{}');if(value&&typeof value==='object'&&!Array.isArray(value))saved=value;}catch{}
 const form=rd5El('form','rd-worksheet'),fields={};
 const specs=[['task','Task and intended outcome','text','What learning should this task demonstrate?'],['weights','Proposed weights and rationale','text','Why this emphasis? Check the whole rubric totals 100%.'],['criterionA','Criterion A and its judgement','textarea','Name the capability and the quality you will judge.'],['criterionB','Criterion B and its judgement','textarea','What different quality does this criterion judge?'],['boundary','Evidence and judgement boundary','textarea','Where is the evidence? How do you avoid rewarding the same quality twice?'],['review','Test with sample work','textarea','What will you inspect or discuss with a colleague?']];
 specs.forEach(([name,label,type,placeholder])=>{const wrap=rd5El('label','',label),field=rd5El(type==='text'?'input':'textarea');if(type==='text')field.type='text';field.name=name;field.placeholder=placeholder;field.maxLength=1800;field.value=typeof saved[name]==='string'?saved[name]:'';fields[name]=field;wrap.append(field);form.append(wrap);});
 const checks=rd5El('fieldset','rd-checks rd-full');checks.append(rd5El('legend','','Review the map'));
 [['aligned','Each judgement links to intended learning and evidence.'],['distinct','The weights and distinct boundaries have a task-specific reason.']].forEach(([name,text])=>{const label=rd5El('label'),input=rd5El('input');input.type='checkbox';input.name=name;input.checked=saved[name]===true;fields[name]=input;label.append(input,document.createTextNode(text));checks.append(label);});form.append(checks);
 const status=rd5El('p','rd-note rd-status','Unscored draft. Saved in this browser when available; download a copy to keep it.');status.setAttribute('role','status');
 const data=()=>Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,v.type==='checkbox'?v.checked:v.value]));
 form.addEventListener('input',()=>{try{localStorage.setItem(key,JSON.stringify(data()));status.textContent='Draft saved in this browser. Test the map with sample work and a colleague.';}catch{status.textContent='Browser storage is unavailable. Download your draft to keep it.';}});
 form.addEventListener('submit',e=>e.preventDefault());form.addEventListener('keydown',e=>{if(e.target.matches('input, textarea')){if(e.key==='Escape')e.target.blur();e.stopPropagation();}});
 const acts=rd5El('div','rd5-actions'),download=rd5El('button','btn quiet','Download my map');download.type='button';download.onclick=()=>{const d=data(),body=`RUBRIC DESIGN - CHAPTER 5: MY CRITERION MAP\n\nTask and intended outcome\n${d.task}\n\nProposed weights and rationale\n${d.weights}\n\nCriterion A and judgement\n${d.criterionA}\n\nCriterion B and judgement\n${d.criterionB}\n\nEvidence and judgement boundary\n${d.boundary}\n\nTest with sample work\n${d.review}\n\nAlignment checked: ${d.aligned?'yes':'not yet'}\nDistinct judgements and weight rationale checked: ${d.distinct?'yes':'not yet'}\n\nIllustrative weights are not universal prescriptions. Review your full rubric against your task.\n`;
 const url=URL.createObjectURL(new Blob([body],{type:'text/plain;charset=utf-8'})),a=rd5El('a');a.href=url;a.download='my-criterion-map.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Map downloaded.';};acts.append(download);
 if(done){const go=rd5El('button','btn go','Finish chapter');go.type='button';go.onclick=done;acts.append(go);}container.append(form,status,acts);
};

window.RD5ReadPractice=function(){
 const scores={};function update(){const values=Object.values(scores),sum=values.reduce((a,v)=>a+v,0);document.getElementById('reading-score').textContent=`First attempts: ${sum} correct from ${values.length} answered (6 questions). Reflection is unscored. Reloading starts a new practice score.`;}
 document.querySelectorAll('[data-question]').forEach(root=>{const q=RD5_DATA.questions.find(q=>q.id===root.dataset.question);let resolved=false;root.append(rd5El('h3','',q.title),rd5El('p','',q.prompt));
 const options=rd5El('div','rd5-read-options'),feedback=rd5El('p','rd5-read-feedback');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');const reveal=rd5El('button','btn quiet','Show answer');reveal.type='button';reveal.hidden=true;
 const buttons=q.options.map((text,i)=>{const b=rd5El('button','btn quiet',text);b.type='button';b.onclick=()=>{if(resolved)return;const ok=i===q.right;if(!Object.hasOwn(scores,q.id)){scores[q.id]=+ok;update();}feedback.textContent=(ok?'Correct. ':'Not quite. ')+(ok?q.why:q.wrong[i]);if(ok){resolved=true;buttons.forEach(n=>n.disabled=true);reveal.hidden=true;}else{b.disabled=true;reveal.hidden=false;}};options.append(b);return b;});reveal.onclick=()=>{resolved=true;buttons.forEach(n=>n.disabled=true);feedback.textContent='Answer: '+q.options[q.right]+' '+q.why;reveal.hidden=true;};root.append(options,feedback,reveal);});
};
