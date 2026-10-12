'use strict';
const CHAPTER={number:7,title:'Calibrate, review, improve',minutes:16,language:'en'};
const R7={amber:'#f0b45a',blue:'#86c9e8',green:'#8fd6b0',ink:'#ece8dc',muted:'#a9bdb3'};
const rd7Reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const r7Tw=(el,to,t,d=.65)=>tw(el,to,t,rd7Reduced?.001:d,out);
const r7Show=(el,t=0)=>r7Tw(el,{o:1},t,.4);
function r7Text(p,text,x,y,size=32,fill=R7.ink,t=0,weight=500){const e=T(p,text,{x,y,size,fill,weight,o:0});r7Show(e,t);return e;}
function r7Lines(p,lines,x,y,size=29,fill=R7.ink,t=0,gap=40){return lines.map((s,i)=>r7Text(p,s,x,y+i*gap,size,fill,t));}
function r7Box(p,x,y,w,h,stroke=COL.faint){return mk('rect',{x,y,width:w,height:h,rx:16,fill:'#22362e',stroke,'stroke-width':2},p);}
function r7Title(p,kicker,title){r7Text(p,kicker.toUpperCase(),85,80,23,R7.blue,0,650);r7Text(p,title,85,145,45,R7.ink,.02,600);}
function r7Card(p,x,y,w,h,title,lines,t=0,color=R7.blue,size=28){const g=G(p,{o:0});r7Box(g,x,y,w,h);r7Text(g,title,x+22,y+42,28,color,0,650);r7Lines(g,lines,x+22,y+86,size,R7.ink,0,size+10);r7Show(g,t);return g;}
function r7Arrow(p,d,t=0,color=R7.green){const e=path(p,d,{stroke:color,'stroke-width':4,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},{d:0});r7Tw(e,{d:1},t,.8);return e;}
function r7Question(q){return{id:q.id,prompt:[q.prompt],build:choice(q.options.map(s=>[s]),q.right,q.why,q.wrong)};}
const r7Ask=beat=>done=>quiz(SCREEN,RD7_DATA.questions.filter(q=>q.beat===beat).map(r7Question),done,beat==='final1'?'Chapter practice':'Quick check');
const r7AuditAsk=group=>done=>{const c=card(SCREEN,'rd7-audit-card');c.append(h('p','kicker',`Unscored audit · ${group+1} of 3`),h('p','prompt',['Usefulness and judgement','Check the learning demand','Clarity, thresholds and context'][group]));RD7Audit(c,group,done);P.keys=null;};
const BEATS=[
['intro','Calibrate, review, improve',m=>{const p=panel(0);r7Text(p,'UNIT 3  /  DESIGN AND REVIEW  /  CHAPTER 07',90,105,26,R7.blue);r7Lines(p,['Calibrate, review,','improve'],90,220,77,R7.ink,0,88);r7Text(p,'A defensible judgement. A concrete next action.',94,419,35,R7.muted);
 r7Card(p,90,508,400,169,'EVIDENCE',['What does the work show?'],0,R7.blue,27);r7Card(p,597,508,408,169,'INTERPRETATION',['How does it fit the criterion?'],m('connect'),R7.green,27);r7Card(p,1112,508,398,169,'NEXT ACTION',['What will we test or revise?'],m('connect',.3),R7.green,26);r7Arrow(p,'M512 592H574M562 580L574 592L562 604',m('connect'));r7Arrow(p,'M1027 592H1089M1077 580L1089 592L1077 604',m('connect',.3));r7Text(p,'Bring one rubric, one work sample and a question to investigate.',94,754,29,R7.ink,m('connect',.7));}],
['anchors','Start with shared anchors',m=>{const p=panel(0);r7Title(p,'01 · Calibration','Tie the judgement to work and the criterion');
 const work=r7Card(p,90,241,555,199,'STUDENT WORK',['Specific words, actions','or relationships'],0,R7.blue),standard=r7Card(p,954,241,555,199,'STATED DESCRIPTOR',['Expected feature, quality','and threshold'],0,R7.ink);
 r7Tw(work,{x:18},m('link'),.7);r7Tw(standard,{x:-18},m('link'),.7);r7Text(p,'supports?',699,310,30,R7.green,m('link'));r7Arrow(p,'M686 350H914M898 337L914 350L898 363',m('link'));
 r7Card(p,143,564,555,136,'MARKER A',['Where is the evidence?'],m('compare'),R7.blue,28);r7Card(p,902,564,555,136,'MARKER B',['How does the standard apply?'],m('compare'),R7.blue,28);r7Arrow(p,'M421 542L746 382M1178 542L848 382',m('compare'));r7Text(p,'Agreement needs a defensible reason.',495,770,30,R7.green,m('compare'));}],
['calibration','Inspect before comparing',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd7-calibration-card');c.append(h('p','kicker','Calibration rehearsal · original workshop example'),h('p','prompt','A queue explanation: how would you judge it?'));RD7Calibration(c,done);P.keys=null;}}],
['compare','Locate the causal link',m=>{const p=panel(0);r7Title(p,'02 · Same sample, different readings','Look for the mechanism between the facts');r7Text(p,'INVENTED EXTRACT · THIS CRITERION ONLY',90,206,23,R7.muted);
 r7Card(p,90,246,426,132,'Orders doubled',['Demand increased'],0,R7.blue,28);r7Card(p,582,246,426,132,'Staffing stayed at 3',['Capacity stayed fixed'],0,R7.blue,28);
 r7Card(p,319,456,644,143,'More orders per worker',['The sample states this mechanism.'],m('mechanism'),R7.green,28);r7Arrow(p,'M303 399L483 435M795 399L693 435',m('mechanism'));
 r7Card(p,1114,456,398,143,'Queue lengthened',['The stated outcome'],m('mechanism'),R7.blue,28);r7Arrow(p,'M984 528H1092M1078 515L1092 528L1078 541',m('mechanism'));
 r7Card(p,90,641,894,119,'THRESHOLD SUPPORTED',['Causal link + relevant case detail'],m('threshold'),R7.green,29);r7Arrow(p,'M642 614V631',m('threshold'));
 r7Card(p,1028,641,484,119,'NOT DEMONSTRATED',['An alternative tested with evidence'],m('limit'),R7.amber,24);
}],
['q1','Which evidence supports the judgement?',()=>panel(0),{ask:r7Ask('q1')}],
['record','Record and test the interpretation',m=>{const p=panel(0);r7Title(p,'03 · Make calibration usable','Leave a shared anchor for the next judgement');
 r7Card(p,90,252,295,145,'1 · Inspect',['Independently'],0,R7.blue,27);r7Card(p,465,252,295,145,'2 · Discuss',['Evidence + criterion'],0,R7.blue,25);r7Arrow(p,'M405 324H444M431 312L444 324L431 336',0);
 r7Card(p,840,252,295,145,'3 · Record',['Interpretation + why'],m('record'),R7.green,25);r7Arrow(p,'M780 324H819M806 312L819 324L806 336',m('record'));
 r7Card(p,1215,252,295,145,'4 · Test',['Another sample'],m('test'),R7.blue,27);r7Arrow(p,'M1155 324H1194M1181 312L1194 324L1181 336',m('test'));
 const note=G(p,{o:0});r7Box(note,90,508,1420,230,R7.green);r7Text(note,'RECORDED ANCHOR · QUEUE EXTRACT',115,551,27,R7.green);r7Lines(note,['Workload per worker links demand and staffing to the queue.','Case detail supports the threshold. An alternative is not tested.','Revisit uncertain or borderline examples together.'],115,604,29,R7.ink,0,48);r7Show(note,m('record'));
 r7Arrow(p,'M1363 417V452H238V418M226 430L238 418L250 430',m('test'));r7Text(p,'Test the interpretation',660,478,23,R7.muted,m('test'));
}],
['profile','Use a pattern to investigate',m=>{const p=panel(0);r7Title(p,'04 · Review in context','A grade pattern is a question to investigate');r7Text(p,'Invented course-grade profile · 40 students',90,212,27,R7.blue);
 const left=137,base=682,scale=20,counts=[1,1,2,5,6,13,12];r7Text(p,'Students',90,311,24,R7.muted);[0,5,10,15].forEach(n=>{const y=base-n*scale;path(p,`M${left-7} ${y}H724`,{stroke:n?'#40584d':R7.muted,'stroke-width':n?1:2});r7Text(p,String(n),89,y+8,23,R7.muted);});
 counts.forEach((n,i)=>{const x=164+i*80,bar=mk('rect',{x,y:base,width:46,height:0,rx:5,fill:R7.blue},p);r7Tw(bar,{a_y:base-n*scale,a_height:n*scale},m('pattern'),1.1);r7Text(p,String(i+1),x+15,721,25,R7.ink);r7Text(p,String(n),x+10,base-n*scale-13,25,R7.blue,m('pattern',1.1));});r7Text(p,'Course grade',308,760,25,R7.muted);
 const rows=[['Work samples','What standard does the work show?'],['Marking consistency','Are criteria applied consistently?'],['Task alignment','Does the task assess its outcomes?'],['Opportunity to learn','What preparation was available?'],['Context + local requirements','What else helps explain the pattern?']];
 rows.forEach(([head,sub],i)=>{const t=m('investigate')+i*.18,y=232+i*108;r7Card(p,893,y,617,100,head,[sub],t,R7.blue,22);r7Arrow(p,`M832 ${y+44}H874`,t);});
 r7Arrow(p,'M745 509H832M832 276V708',m('investigate'));r7Text(p,'No target shape. No automatic scaling.',847,785,25,R7.amber,m('investigate',.85));
}],
['q2','Investigate before changing',()=>panel(0),{ask:r7Ask('q2')}],
['opportunity','Opportunity does not require a recipient',m=>{const p=panel(0);r7Title(p,'05 · Check the opportunity','The highest standard must be achievable');
 r7Card(p,90,354,332,195,'TASK CONSTRAINTS',['Time, scope','and resources'],0,R7.blue,31);r7Text(p,'RANGE OF STANDARDS',565,228,25,R7.muted,m('access'));
 [['Below threshold',268,R7.blue],['Threshold',439,R7.blue],['Highest standard',610,R7.green]].forEach(([label,y,color])=>{r7Card(p,565,y,361,107,label,[],m('access'),color);r7Arrow(p,`M443 449L544 ${y+54}`,m('access'));});
 const observed=G(p,{o:0});r7Box(observed,1080,268,430,449);r7Text(observed,'OBSERVED WORK',1104,311,28,R7.blue);r7Lines(observed,['Judge the evidence','against the standards.'],1104,370,29,R7.ink,0,42);const blank=r7Box(observed,1104,482,382,161,R7.amber);blank.setAttribute('stroke-dasharray','10 9');r7Lines(observed,['No sample shown at','the highest standard','in this illustration.'],1123,525,25,R7.muted,0,36);r7Show(observed,m('recipient'));
 r7Text(p,'Opportunity ≠ a required recipient in every cohort',329,778,31,R7.green,m('recipient'));
}],
['boundaries','Keep the decisions distinct',m=>{const p=panel(0);r7Title(p,'06 · Separate the decisions','A criterion result does not decide eligibility');
 r7Card(p,90,283,420,228,'CRITERION JUDGEMENT',['This evidence,','this descriptor','and this threshold'],0,R7.blue,30);
 r7Card(p,590,283,420,228,'FINAL COURSE GRADE',['Course assessment','requirements','and outcomes'],m('course'),R7.ink,30);r7Arrow(p,'M531 396H568M555 384L568 396L555 408',m('course'));
 r7Card(p,1090,283,420,228,'ELIGIBILITY DECISION',['Current procedure','and course profile','apply conditions'],m('conditional'),R7.green,30);r7Arrow(p,'M1031 396H1068M1055 384L1068 396L1055 408',m('conditional'));
 r7Lines(p,['Supplementary eligibility is conditional.','One criterion shortfall creates no automatic entitlement.'],90,620,35,R7.green,m('conditional'),56);r7Text(p,'Describe performance. Handle integrity matters through separate processes.',90,765,28,R7.muted,m('conditional'));
}],
['audit1','Audit 1 of 3 · Usefulness and judgement',()=>panel(0),{ask:r7AuditAsk(0)}],
['audit2','Audit 2 of 3 · The learning demand',()=>panel(0),{ask:r7AuditAsk(1)}],
['audit3','Audit 3 of 3 · Clarity and context',()=>panel(0),{ask:r7AuditAsk(2)}],
['priorities','Choose by consequence',m=>{const p=panel(0);r7Title(p,'07 · Choose the follow-up','The importance of an issue sets the priority');
 const minor=r7Card(p,90,277,629,145,'MINOR WORDING EDITS',['Useful, but a lower consequence here'],0,R7.muted,27),threshold=r7Card(p,877,277,631,145,'AMBIGUOUS THRESHOLD',['Could change the judgement'],0,R7.amber,29);
 r7Tw(threshold,{x:-787,y:-30},m('consequence'),1.0);r7Tw(minor,{x:787,y:204},m('consequence'),1.0);r7Text(p,'INVESTIGATE FIRST',91,449,25,R7.green,m('consequence',1.1));
 r7Card(p,90,481,631,123,'EVIDENCE NEEDED',['Samples + marker interpretations'],m('follow'),R7.blue,27);r7Arrow(p,'M404 411V474',m('follow'));r7Card(p,90,647,631,110,'FOLLOW-UP',['Action + owner + review point'],m('follow',.4),R7.green,27);r7Arrow(p,'M404 615V638',m('follow',.4));r7Lines(p,['Choose by consequence','and the evidence needed.','Do not count issues into a score.'],900,680,29,R7.ink,m('follow',.6),39);
}],
['q3','Choose a worthwhile priority',()=>panel(0),{ask:r7Ask('q3')}],
['wrap','Make the review a cycle',m=>{const p=panel(0);r7Title(p,'Keep beside your rubric','Make one defensible next decision');r7Card(p,91,247,1420,125,'1 · Inspect evidence',['What does the work demonstrate against the intended standard?'],m('inspect'),R7.blue,30);r7Card(p,91,419,1420,125,'2 · Compare and record',['How do the interpretations connect evidence with the criterion?'],m('discuss'),R7.green,30);r7Card(p,91,591,1420,125,'3 · Act and review',['Who will test the change, with what evidence and when?'],m('act'),R7.green,30);r7Arrow(p,'M65 652H43V309H65',m('act'));r7Text(p,'Review strengthens the next decision; it does not certify perfection.',94,777,28,R7.muted,m('act'));}],
['final1','Chapter practice',()=>panel(0),{ask:r7Ask('final1')}],
['apply','Commit to one next action',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd7-plan-card');c.append(h('p','kicker','Apply it · unscored priority and action plan'),h('p','prompt','One important issue. One concrete next action.'));RD7Plan(c,done);P.keys=null;}}],
['finish','Take the plan into practice',()=>panel(0),{ask:()=>{finishCard();const wrap=document.querySelector('.finwrap');wrap.append(h('p','rd7-fin-note','Take one work sample and its criterion to a colleague. Record the interpretation, make a justified improvement and review its effect.'));}}]
].map(([id,title,run,extra])=>({id,title,run,...extra}));
boot();setCaptions(true);
const rd7Live=new MutationObserver(()=>document.querySelectorAll('.fb:not([role])').forEach(e=>{e.setAttribute('role','status');e.setAttribute('aria-live','polite');}));rd7Live.observe(document.getElementById('ui'),{childList:true,subtree:true});
