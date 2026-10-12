'use strict';
const RD7_KEYS={calibration:'rubric-design:ch07:calibration:v1',audit:'rubric-design:ch07:audit:v1',plan:'rubric-design:ch07:action-plan:v1',reading:'rubric-design:ch07:reading-first-attempts:v1'};
const rd7El=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
const rd7Read=key=>{try{const v=JSON.parse(localStorage.getItem(key)||'{}');return v&&typeof v==='object'&&!Array.isArray(v)?v:{};}catch{return {};}};
const rd7Cache={calibration:rd7Read(RD7_KEYS.calibration),audit:rd7Read(RD7_KEYS.audit),plan:rd7Read(RD7_KEYS.plan)};
const rd7Statuses=[['','Choose status'],['evidence','Evidence available'],['attention','Needs attention'],['unchecked','Not yet checked']];
const rd7Judgements=[['','Choose a provisional judgement'],['met','Threshold supported'],['not','Threshold not yet supported'],['uncertain','Uncertain — discuss the evidence']];
const rd7String=(obj,key)=>typeof obj[key]==='string'?obj[key]:'';
function rd7Save(kind,data,status){rd7Cache[kind]=data;try{localStorage.setItem(RD7_KEYS[kind],JSON.stringify(data));if(status)status.textContent='Saved in this browser. This reflection is unscored.';}catch{if(status)status.textContent='Browser storage is unavailable. Keep this page open and download your plan.';}}
function rd7Status(text='Unscored reflection. Saved in this browser when available.'){const e=rd7El('p','rd7-status',text);e.setAttribute('role','status');e.setAttribute('aria-live','polite');return e;}
function rd7Keys(root){root.addEventListener('keydown',e=>{if(e.target.matches('input,textarea,select')){if(e.key==='Escape')e.target.blur();e.stopPropagation();}});}
function rd7Select(name,items,value){const s=rd7El('select');s.name=name;items.forEach(([v,text])=>{const o=rd7El('option','',text);o.value=v;s.append(o);});s.value=items.some(([v])=>v===value)?value:'';return s;}
function rd7Field(name,label,value,placeholder='',type='textarea'){
 const wrap=rd7El('label','rd7-field',label),field=rd7El(type);field.name=name;if(type==='input')field.type='text';field.value=value;field.placeholder=placeholder;field.maxLength=1800;wrap.append(field);return{wrap,field};
}
function rd7Button(text,fn,go=false){const b=rd7El('button','btn '+(go?'go':'quiet'),text);b.type='button';b.onclick=fn;return b;}
function rd7CasePanel(full=false){const c=RD7_DATA.case,p=rd7El('div','rd7-case');p.append(rd7El('h3','','Invented workshop criterion'),rd7El('p','',c.criterion));if(full)p.append(rd7El('p','rd7-detail',c.threshold),rd7El('p','rd7-detail',c.beyond));return p;}
function rd7Sample(){return rd7El('blockquote','rd7-sample',RD7_DATA.case.sample);}

window.RD7Calibration=function(container,done){
 let data={...rd7Cache.calibration},step=0;
 if(!rd7Judgements.some(([v])=>v===data.judgement))data.judgement='';
 const root=rd7El('div','rd7-calibration');rd7Keys(root);container.append(root);
 function render(focusStep=false){
  root.replaceChildren();root.dataset.step=String(step);const status=rd7Status();
  root.append(rd7El('p','rd7-step',`${step+1} of 3 · ${['Inspect independently','Compare interpretations','Record and follow up'][step]} · Unscored`));
  if(step===0){
   root.append(rd7CasePanel(true),rd7Sample());
   const form=rd7El('form','rd7-fields');form.addEventListener('submit',e=>e.preventDefault());
   const choiceWrap=rd7El('label','rd7-field','Your provisional criterion judgement'),choice=rd7Select('rd7-judgement',rd7Judgements,data.judgement);choiceWrap.append(choice);
   const evidence=rd7Field('rd7-evidence','Which words support your view?',rd7String(data,'evidence'),'Notice a relationship, missing link or uncertainty.');
   form.append(choiceWrap,evidence.wrap);const save=()=>{data.judgement=choice.value;data.evidence=evidence.field.value;rd7Save('calibration',data,status);};form.addEventListener('input',save);form.addEventListener('change',save);
   const actions=rd7El('div','rd7-actions');actions.append(rd7Button('Compare marker interpretations',()=>{if(!choice.value){status.textContent='Choose a provisional judgement, including uncertain, before comparing the markers.';choice.focus();return;}if(!evidence.field.value.trim()){status.textContent='Record a word, relationship or uncertainty you noticed before comparing the markers. Your note is unscored.';evidence.field.focus();return;}save();step=1;render(true);},true));
   root.append(form,status,actions);
  }else if(step===1){
   root.append(rd7El('p','rd7-brief','Threshold = causal connection + relevant case detail. Inspect where each marker looked.'),rd7Sample());
   const markers=rd7El('div','rd7-markers');
   [['Marker A · Is the link missing?',RD7_DATA.case.markerA],['Marker B · Trace the link',RD7_DATA.case.markerB]].forEach(([title,text],i)=>{const box=rd7El('div','rd7-marker rd7-marker-'+i);box.append(rd7El('h3','',title),rd7El('p','',text));markers.append(box);});
   const own=rd7El('p','rd7-brief','Your initial view: '+rd7Judgements.find(([v])=>v===data.judgement)[1]+'. Compare the reasoning with the criterion, not the marker’s preference.');
   const actions=rd7El('div','rd7-actions');actions.append(rd7Button('Back to my inspection',()=>{step=0;render(true);}),rd7Button('Inspect the evidence link and record',()=>{step=2;render(true);},true));
   root.append(markers,own,actions);
  }else{
   const worked=rd7El('div','rd7-worked');worked.append(rd7El('h3','','Worked interpretation · this extract only'),rd7El('p','',RD7_DATA.case.interpretation));
   const trace=rd7El('p','rd7-trace','Doubled demand + fixed staffing → more orders per worker → longer queue.');
   const form=rd7El('form','rd7-fields');form.addEventListener('submit',e=>e.preventDefault());
   const interpretation=rd7Field('rd7-interpretation','Your interpretation and rationale',rd7String(data,'interpretation'),'Connect the sample evidence to the criterion.');
   const next=rd7Field('rd7-calibration-next','A next step or remaining uncertainty',rd7String(data,'next'),'What would you record, inspect or discuss next?');form.append(interpretation.wrap,next.wrap);
   form.addEventListener('input',()=>{data.interpretation=interpretation.field.value;data.next=next.field.value;rd7Save('calibration',data,status);});
   const actions=rd7El('div','rd7-actions');actions.append(rd7Button('Back to marker comparison',()=>{step=1;render(true);}));if(done)actions.append(rd7Button('Continue to the evidence diagram',done,true));
   root.append(worked,trace,form,status,rd7El('p','rd7-small','Your writing is not automatically graded. The action-plan download includes these notes.'),actions);
  }
  if(focusStep){const heading=root.querySelector('.rd7-step');heading.tabIndex=-1;heading.focus({preventScroll:true});}
 }
 render();
};

window.RD7Audit=function(container,group,done){
 const form=rd7El('form','rd7-audit');form.addEventListener('submit',e=>e.preventDefault());rd7Keys(form);const status=rd7Status(),fields={};
 RD7_DATA.audit.filter(a=>a.group===group).forEach(a=>{
  const row=rd7El('div','rd7-audit-row'),text=rd7El('div','rd7-audit-text'),label=rd7El('label','rd7-audit-choice','Evidence status');
  const select=rd7Select('rd7-audit-'+a.id,rd7Statuses,rd7String(rd7Cache.audit,a.id));select.setAttribute('aria-label',a.title+' — evidence status');fields[a.id]=select;
  text.append(rd7El('h3','',a.title),rd7El('p','',a.question),rd7El('p','rd7-detail',a.hint));label.append(select);row.append(text,label);form.append(row);
 });
 const notes=rd7Field('rd7-audit-note-'+group,'Evidence or follow-up for these checks (optional)',rd7String(rd7Cache.audit,'note'+group),'Name a sample, conversation or issue to revisit.');notes.wrap.classList.add('rd7-audit-note');form.append(notes.wrap);
 const save=()=>{const data={...rd7Cache.audit};Object.entries(fields).forEach(([k,v])=>data[k]=v.value);data['note'+group]=notes.field.value;rd7Save('audit',data,status);};form.addEventListener('input',save);form.addEventListener('change',save);
 const actions=rd7El('div','rd7-actions');if(done)actions.append(rd7Button(group<2?'Continue to the next three checks':'Continue to priorities',done,true));
 container.append(form,status,actions);
};

window.RD7Plan=function(container,done){
 const data={...rd7Cache.plan},form=rd7El('form','rd7-plan rd7-fields');form.addEventListener('submit',e=>e.preventDefault());rd7Keys(form);const fields={},status=rd7Status('Unscored action plan. Your download includes all nine audit answers and calibration notes.');
 const priorityWrap=rd7El('label','rd7-field','Which issue will you follow up first?');fields.priority=rd7Select('rd7-plan-priority',[['','Choose by importance'],...RD7_DATA.audit.map(a=>[a.id,a.title]),['other','Another relevant issue']],rd7String(data,'priority'));priorityWrap.append(fields.priority);form.append(priorityWrap);
 [['why','Why this issue matters','What consequence makes it a priority?','input'],['action','One concrete action','What will you inspect, discuss or revise?','textarea'],['evidence','Evidence to inspect and a success check','What sample or interpretation will show whether it helped?','textarea'],['people','Who will be involved?','Name a colleague, marker group or role.','input'],['review','When will you review the result?','Record a date or a specific assessment milestone.','input']].forEach(([name,label,placeholder,type])=>{const f=rd7Field('rd7-plan-'+name,label,rd7String(data,name),placeholder,type);fields[name]=f.field;form.append(f.wrap);});
 const values=()=>Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,v.value]));const save=()=>rd7Save('plan',values(),status);form.addEventListener('input',save);form.addEventListener('change',save);
 const actions=rd7El('div','rd7-actions');actions.append(rd7Button('Download my audit and action plan',()=>{
  const p=values(),a=rd7Cache.audit,c=rd7Cache.calibration;rd7Cache.plan=p;
  const label=(options,v)=>options.find(([id])=>id===v)?.[1]||'Not recorded';
  let body='RUBRIC DESIGN — CHAPTER 7\nMY CALIBRATION, AUDIT AND ACTION PLAN\n\nThis is an unscored reflection, not certification of rubric quality. Choose follow-up by importance and evidence, not the number of answers.\n\nCALIBRATION — INVENTED QUEUE CASE\n'+RD7_DATA.case.criterion+'\n'+RD7_DATA.case.threshold+'\n'+RD7_DATA.case.beyond+'\n\nSample: '+RD7_DATA.case.sample+'\n\nProvisional criterion judgement: '+(c.judgement?label(rd7Judgements,c.judgement):'Not recorded')+'\nEvidence noticed: '+rd7String(c,'evidence')+'\nMy interpretation: '+rd7String(c,'interpretation')+'\nNext step / uncertainty: '+rd7String(c,'next')+'\n\nNINE-CHECK AUDIT\n';
  RD7_DATA.audit.forEach(q=>{body+='\n'+q.title+'\n'+q.question+'\nStatus: '+(a[q.id]?label(rd7Statuses,a[q.id]):'Not recorded')+'\n';});
  [0,1,2].forEach(g=>{body+='\nNotes for checks '+(g*3+1)+'–'+(g*3+3)+': '+rd7String(a,'note'+g)+'\n';});
  const priority=RD7_DATA.audit.find(q=>q.id===p.priority)?.title||(p.priority==='other'?'Another relevant issue':'Not recorded');
  body+='\nPRIORITY AND ACTION\nPriority: '+priority+'\nWhy it matters: '+p.why+'\nAction: '+p.action+'\nEvidence and success check: '+p.evidence+'\nPeople involved: '+p.people+'\nReview point: '+p.review+'\n\nCriterion evidence is distinct from final course grades and conditional supplementary eligibility. Review grade patterns with evidence, context and current local requirements. Official public guidance checked 10 October 2026; see the readable chapter for live links.\n';
  const url=URL.createObjectURL(new Blob([body],{type:'text/plain;charset=utf-8'})),link=rd7El('a');link.href=url;link.download='rubric-review-action-plan.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Audit, calibration notes and action plan downloaded.';
 },false));if(done)actions.append(rd7Button('Finish the book',done,true));
 container.append(form,status,rd7El('p','rd7-small','A completed audit is a starting point. Test your chosen action with evidence and a colleague.'),actions);
};

window.RD7ReadPractice=function(){
 let scores={};try{const v=JSON.parse(sessionStorage.getItem(RD7_KEYS.reading)||'{}');if(v&&typeof v==='object'&&!Array.isArray(v))RD7_DATA.questions.forEach(q=>{if(v[q.id]===0||v[q.id]===1)scores[q.id]=v[q.id];});}catch{}
 const update=()=>{const vals=Object.values(scores);document.getElementById('reading-score').textContent=`First attempts: ${vals.reduce((a,v)=>a+v,0)} correct from ${vals.length} answered (6 questions). Retained in this tab until practice restarts when storage is available. Calibration, the audit and your plan are unscored.`;};
 function mount(){document.querySelectorAll('[data-question]').forEach(root=>{const q=RD7_DATA.questions.find(q=>q.id===root.dataset.question);let resolved=false;root.replaceChildren(rd7El('h3','',q.title),rd7El('p','',q.prompt));const options=rd7El('div','rd7-read-options'),feedback=rd7Status('');feedback.classList.add('rd7-read-feedback');const reveal=rd7Button('Show answer',()=>{resolved=true;buttons.forEach(n=>n.disabled=true);feedback.textContent='Answer: '+q.options[q.right]+' '+q.why;reveal.hidden=true;});reveal.hidden=true;
 const buttons=q.options.map((text,i)=>{const b=rd7Button(text,()=>{if(resolved)return;const ok=i===q.right;if(!Object.hasOwn(scores,q.id)){scores[q.id]=+ok;try{sessionStorage.setItem(RD7_KEYS.reading,JSON.stringify(scores));}catch{}update();}feedback.textContent=(ok?'Correct. ':'Not quite. ')+(ok?q.why:q.wrong[i]);if(ok){resolved=true;buttons.forEach(n=>n.disabled=true);reveal.hidden=true;}else{b.disabled=true;reveal.hidden=false;}});options.append(b);return b;});root.append(options,feedback,reveal);});update();}
 document.getElementById('restart-practice').onclick=()=>{scores={};try{sessionStorage.removeItem(RD7_KEYS.reading);}catch{}mount();document.querySelector('[data-question] button').focus();};mount();
};
