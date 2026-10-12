'use strict';
const rd4El=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;};
window.RD4RowLab=function(container,done){
 const form=rd4El('form','rd4-lab');form.addEventListener('submit',e=>e.preventDefault());
 const note=rd4El('p','rd4-lab-note','Task: find, interpret and select operational issues. Preview shows the common spine and changing evidence; complete cells must retain earlier requirements.');
 const capLabel=rd4El('label','rd4-capability','Choose the common capability'),cap=rd4El('select');cap.name='lab-capability';
 [['','Choose a capability'],['issues','Problem identification'],['references','Citation formatting'],['audience','Audience communication']].forEach(([value,label])=>{const o=rd4El('option','',label);o.value=value;cap.append(o);});capLabel.append(cap);
 const spines={issues:'Identifies relevant case issues',references:'Formats citations',audience:'Communicates to the audience'};
 const evidence=[['0','Accurate identification','accurately from the information supplied.'],['1','Adds organisational context','and locates them in organisational context.'],['2','Adds evidenced relationships','and explains symptom–cause links using case evidence.'],['3','Adds justified priority','and ranks issues by justified organisational impact.'],['9','Switches to citation format','with a perfectly formatted reference list.']];
 const grid=rd4El('div','rd4-lab-grid'),cells=[];
 ['P · threshold','C · middle','D · middle','HD · strongest'].forEach((label,i)=>{const box=rd4El('div','rd4-lab-cell'),heading=rd4El('h3','',label),controlLabel=rd4El('label','','Evidence distinction'),select=rd4El('select');select.name='lab-cell-'+i;
 evidence.forEach(([value,label])=>{const o=rd4El('option','',label);o.value=value;select.append(o);});controlLabel.append(select);
 const spine=rd4El('p','rd4-lab-spine','Choose the common capability'),difference=rd4El('p','rd4-lab-difference');box.append(heading,controlLabel,spine,difference);grid.append(box);cells.push({select,spine,difference});});
 const status=rd4El('p','rd4-lab-feedback','Unscored rehearsal. Set the capability and change the cell evidence, then compare.');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
 const preview=()=>{cells.forEach(c=>{c.spine.textContent=spines[cap.value]||'Choose the common capability';c.difference.textContent=evidence.find(e=>e[0]===c.select.value)[2];});};
 form.addEventListener('change',()=>{preview();status.textContent='Preview updated. Compare the row to inspect its evidence differences.';});
 form.addEventListener('keydown',e=>{if(e.target.matches('select')){if(e.key==='Escape')e.target.blur();e.stopPropagation();}});
 const acts=rd4El('div','rd4-actions'),compare=rd4El('button','btn go','Compare my row');compare.type='button';compare.onclick=()=>{
 const v=cells.map(c=>+c.select.value),issues=[];
 if(cap.value!=='issues')issues.push('This task needs problem identification. '+(cap.value?'The selected capability assesses a different action.':'Choose a common capability.'));
 if(v.includes(9))issues.push('Citation formatting switches capability inside the row. Replace that distinction with evidence about case issues.');
 if(v[0]!==0||v[3]!==3)issues.push('Check the taught local anchors: accurate identification at P, justified priority at HD.');
 if(v.some((n,i)=>i&&n<=v[i-1])&&!v.includes(9))issues.push('Adjacent cells repeat or reverse the evidence sequence. Compare what changes between each pair.');
 status.textContent=issues.length?issues.slice(0,2).join(' '):'The sequence matches this worked example: identification → context → evidenced relationships → justified priority. Keep earlier requirements in each full cell, then test with sample work; this is not a quality score.';
 };
 acts.append(compare);if(done){const next=rd4El('button','btn quiet','Continue to worked row');next.type='button';next.onclick=done;acts.append(next);}
 form.append(note,capLabel,grid);container.append(form,status,acts);preview();
};

window.RD4Worksheet=function(container,done){
 const key='rubric-design:ch04:descriptor-row:v1';let saved={};try{const value=JSON.parse(localStorage.getItem(key)||'{}');if(value&&typeof value==='object'&&!Array.isArray(value))saved=value;}catch{}
 const form=rd4El('form','rd-worksheet'),fields={};
 const specs=[['task','Task and intended outcome','text','What must students demonstrate?'],['capability','Stable capability / common spine','text','What action and object stay the same?'],['minimum','Minimum acceptable evidence','textarea','Write a complete local threshold descriptor.'],['middle1','First intermediate cell','textarea','Retain the capability. Name the next evidence distinction.'],['middle2','Second intermediate cell','textarea','Retain required evidence. Make the next difference visible.'],['strongest','Strongest evidence','textarea','Define strong performance for this task, not a universal grade.']];
 specs.forEach(([name,label,type,placeholder])=>{const wrap=rd4El('label','',label),field=rd4El(type==='text'?'input':'textarea');if(type==='text')field.type='text';field.name=name;field.placeholder=placeholder;field.maxLength=1800;field.value=typeof saved[name]==='string'?saved[name]:'';fields[name]=field;wrap.append(field);form.append(wrap);});
 const checks=rd4El('fieldset','rd-checks rd-full');checks.append(rd4El('legend','','Test each boundary'));
 [['student','A student can name an action to improve the work.'],['marker','A marker can point to evidence; each cell stands alone.']].forEach(([name,text])=>{const label=rd4El('label'),input=rd4El('input');input.type='checkbox';input.name=name;input.checked=saved[name]===true;fields[name]=input;label.append(input,document.createTextNode(text));checks.append(label);});form.append(checks);
 const status=rd4El('p','rd-note rd-status','Unscored draft. Saved in this browser when storage is available. Download a copy to keep it.');status.setAttribute('role','status');
 const data=()=>Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,v.type==='checkbox'?v.checked:v.value]));
 form.addEventListener('input',()=>{try{localStorage.setItem(key,JSON.stringify(data()));status.textContent='Draft saved in this browser. Review it with sample work and a colleague.';}catch{status.textContent='Browser storage is unavailable. Download your draft to keep it.';}});
 form.addEventListener('submit',e=>e.preventDefault());form.addEventListener('keydown',e=>{if(e.target.matches('input, textarea')){if(e.key==='Escape')e.target.blur();e.stopPropagation();}});
 const acts=rd4El('div','rd4-actions'),download=rd4El('button','btn quiet','Download my row');download.type='button';download.onclick=()=>{const d=data(),body=`RUBRIC DESIGN - CHAPTER 4: MY DESCRIPTOR ROW\n\nTask and intended outcome\n${d.task}\n\nStable capability / spine\n${d.capability}\n\nMinimum acceptable evidence\n${d.minimum}\n\nFirst intermediate cell\n${d.middle1}\n\nSecond intermediate cell\n${d.middle2}\n\nStrongest evidence\n${d.strongest}\n\nStudent action test: ${d.student?'checked':'not yet checked'}\nMarker evidence and standalone cell test: ${d.marker?'checked':'not yet checked'}\n\nNext: test with sample work and a colleague. Use your local grade labels.\n`;
 const url=URL.createObjectURL(new Blob([body],{type:'text/plain;charset=utf-8'})),a=rd4El('a');a.href=url;a.download='my-descriptor-row.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Row downloaded.';};acts.append(download);
 if(done){const go=rd4El('button','btn go','Finish chapter');go.type='button';go.onclick=done;acts.append(go);}container.append(form,status,acts);
};

window.RD4ReadPractice=function(){
 const scores={};function update(){const values=Object.values(scores),sum=values.reduce((a,v)=>a+v,0);document.getElementById('reading-score').textContent=`First attempts: ${sum} correct from ${values.length} answered (6 questions). Reflection is unscored. Reloading starts a new practice score.`;}
 document.querySelectorAll('[data-question]').forEach(root=>{const q=RD4_DATA.questions.find(q=>q.id===root.dataset.question);let resolved=false;root.append(rd4El('h3','',q.title),rd4El('p','',q.prompt));
 const options=rd4El('div','rd4-read-options'),feedback=rd4El('p','rd4-read-feedback');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');const reveal=rd4El('button','btn quiet','Show answer');reveal.type='button';reveal.hidden=true;
 const buttons=q.options.map((text,i)=>{const b=rd4El('button','btn quiet',text);b.type='button';b.onclick=()=>{if(resolved)return;const ok=i===q.right;if(!Object.hasOwn(scores,q.id)){scores[q.id]=+ok;update();}feedback.textContent=(ok?'Correct. ':'Not quite. ')+(ok?q.why:q.wrong[i]);if(ok){resolved=true;buttons.forEach(n=>n.disabled=true);reveal.hidden=true;}else{b.disabled=true;reveal.hidden=false;}};options.append(b);return b;});reveal.onclick=()=>{resolved=true;buttons.forEach(n=>n.disabled=true);feedback.textContent='Answer: '+q.options[q.right]+' '+q.why;reveal.hidden=true;};root.append(options,feedback,reveal);});
};
