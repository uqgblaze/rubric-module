'use strict';
const CHAPTER={number:5,title:'Assess capabilities',minutes:8,language:'en',next:'../ch06/'};
const R5={amber:'#f0b45a',blue:'#86c9e8',green:'#8fd6b0',ink:'#ece8dc',muted:'#a9bdb3'};
const rd5Reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const r5Tw=(el,to,t,d=.65)=>tw(el,to,t,rd5Reduced ? .001 : d,out);
const r5Show=(el,t=0)=>r5Tw(el,{o:1},t,.4);
function r5Text(p,text,x,y,size=32,fill=R5.ink,t=0,weight=500){const e=T(p,text,{x,y,size,fill,weight,o:0});r5Show(e,t);return e;}
function r5Lines(p,lines,x,y,size=29,fill=R5.ink,t=0,gap=40){return lines.map((s,i)=>r5Text(p,s,x,y+i*gap,size,fill,t));}
function r5Box(p,x,y,w,h,stroke=COL.faint){return mk('rect',{x,y,width:w,height:h,rx:16,fill:'#22362e',stroke,'stroke-width':2},p);}
function r5Title(p,kicker,title){r5Text(p,kicker.toUpperCase(),85,80,23,R5.blue,0,650);r5Text(p,title,85,146,46,R5.ink,.02,600);}
function r5Card(p,x,y,w,h,title,lines,t=0,color=R5.blue){const g=G(p,{o:0});r5Box(g,x,y,w,h);r5Text(g,title,x+22,y+43,30,color,0,650);r5Lines(g,lines,x+22,y+93,27,R5.ink,0,37);r5Show(g,t);return g;}
function r5Arrow(p,d,t=0,color=R5.green){const e=path(p,d,{stroke:color,'stroke-width':4,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},{d:0});r5Tw(e,{d:1},t,.8);return e;}
function r5Question(q){return{id:q.id,prompt:[q.prompt],build:choice(q.options.map(s=>[s]),q.right,q.why,q.wrong)};}
const r5Ask=beat=>done=>quiz(SCREEN,RD5_DATA.questions.filter(q=>q.beat===beat).map(r5Question),done,beat==='final1'?'Chapter practice':'Quick check');
const BEATS=[
['intro','Assess capabilities',m=>{const p=panel(0);r5Text(p,'UNIT 3  /  DESIGN AND REVIEW  /  CHAPTER 05',90,110,26,R5.blue);r5Lines(p,['Assess','capabilities'],90,226,76,R5.ink,0,87);r5Text(p,'What learning does each row judge?',94,420,34,R5.muted);
r5Card(p,92,500,555,185,'WHERE EVIDENCE APPEARS',['Introduction · Analysis · Conclusion']);r5Card(p,886,500,620,185,'WHAT STUDENTS DEMONSTRATE',['Identify · Explain · Apply · Communicate'],m('capability'),R5.green);r5Arrow(p,'M682 592H850M834 580L850 592L834 604',m('capability'));
}],
['sections','Separate location from judgement',m=>{const p=panel(0);r5Title(p,'01 · Inspect the descriptors','Different sections can repeat one judgement');const names=['Introduction','Literature review','Analysis','Recommendations','Conclusion','Referencing'];const moving=[];
names.forEach((s,i)=>{const x=88+(i%3)*494,y=230+Math.floor(i/3)*217,g=G(p,{x,y});r5Box(g,0,0,435,70);r5Text(g,s,20,45,29,R5.blue);moving.push(g);r5Tw(g,{x:90,y:216+i*82},m('move'),1);});
r5Text(p,'EVIDENCE LOCATIONS',90,192,22,R5.muted,m('move'));
[1,2,3].forEach((idx,k)=>{const badge=G(p,{x:720,y:248+k*126,o:0});r5Box(badge,0,0,642,72,R5.amber);r5Text(badge,'Same causal explanation',22,46,29,R5.amber);r5Show(badge,m('repeat')+k*.15);r5Arrow(p,`M545 ${251+idx*82}L696 ${284+k*126}`,m('repeat')+k*.15,R5.amber);});
r5Lines(p,['Three places ≠ three distinct judgements','Inspect what earns the marks.'],653,684,30,R5.ink,m('repeat'),44);
}],
['map','Trace the alignment',m=>{const p=panel(0);r5Title(p,'02 · Adapted case-study task','Criterion → intended outcome → evidence');r5Text(p,'CAPABILITY CRITERIA',85,210,23,R5.muted);r5Text(p,'LOCAL OUTCOMES',630,210,23,R5.muted);r5Text(p,'EVIDENCE',1150,210,23,R5.muted);
const criteria=[['Problem identification','Select relevant issues'],['Critical analysis','Explain causes with evidence'],['Application to practice','Justify a feasible response'],['Academic communication','Make advice usable']];criteria.forEach(([a,b],i)=>r5Card(p,85,235+i*126,443,104,a,[b],0));
r5Card(p,630,279,402,122,'Diagnose an issue',['Selection + explanation'],m('outcomes'),R5.green);r5Card(p,630,489,402,104,'Justify a response',[],m('outcomes'),R5.green);r5Card(p,630,615,402,104,'Communicate advice',[],m('outcomes'),R5.green);
[[287,318],[413,363],[539,540],[665,666]].forEach(([a,b])=>r5Arrow(p,`M545 ${a}L608 ${b}`,m('outcomes')));
r5Card(p,1148,256,365,184,'Across sections',['Case details','Supported relationships','Recommendation rationale'],m('evidence'),R5.blue);r5Card(p,1148,501,365,161,'Whole report',['Audience navigation','Traceable advice'],m('evidence'),R5.blue);
r5Arrow(p,'M1048 340L1130 345M1048 540L1130 403M1048 665L1130 580',m('evidence'),R5.blue);r5Text(p,'Check descriptors. A new label alone is not alignment.',333,780,28,R5.amber,m('evidence'));
}],
['q1','More than a new label',()=>panel(0),{ask:r5Ask('q1')}],
['distinct','Shared passage, distinct dimensions',m=>{const p=panel(0);r5Title(p,'03 · The boundary is the judgement','One passage can support two dimensions');
r5Card(p,85,211,1430,144,'A response paragraph',['Explains the queue using capacity evidence; proposes a staffing change within budget.']);
r5Card(p,90,442,670,164,'CRITICAL ANALYSIS',['Supported causal explanation'],m('two'),R5.blue);r5Card(p,844,442,670,164,'APPLICATION TO PRACTICE',['Justified response fit + feasibility'],m('two'),R5.green);r5Arrow(p,'M794 369L422 422M794 369L1186 422',m('two'));
const dupe=r5Card(p,91,644,667,91,'Same causal explanation again',[],m('duplicate'),R5.amber);r5Tw(dupe,{y:-202,o:0},m('duplicate',1.1),1.2);r5Text(p,'Shared passage: OK when dimensions are distinct.',830,700,27,R5.green,m('two'));r5Text(p,'Repeated quality: review the second reward.',105,740,27,R5.amber,m('duplicate',1.7));
}],
['q2','Inspect the judgement boundary',()=>panel(0),{ask:r5Ask('q2')}],
['lab','Explore two criteria',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd5-lab-card');c.append(h('p','kicker','Unscored rehearsal · keyboard friendly'),h('p','prompt','What does each criterion add?'));RD5AlignmentLab(c,done);P.keys=null;}}],
['weights','Give weights a reason',m=>{const p=panel(0);r5Title(p,'04 · Illustrative source weights','A share of marks needs a learning rationale');const names=['Identify','Analyse','Apply','Communicate'],weights=[20,35,25,20],cols=[R5.blue,R5.green,R5.blue,R5.green];let left=100;
names.forEach((s,i)=>{const initial=100+i*350,g=G(p,{x:initial,y:259}),w=weights[i]*14,rect=r5Box(g,0,0,350,148,cols[i]);rect.classList.add("rd5-weight-segment");r5Text(g,s,22,46,28,cols[i]);const before=r5Text(g,'25%',22,112,40,R5.ink);const after=r5Text(g,weights[i]+'%',22,112,40,R5.ink,m('example'));r5Tw(before,{o:0},m('example'),.2);r5Tw(g,{x:left},m('example'),1.2);r5Tw(rect,{a_width:w},m('example'),1.2);left+=w;});
r5Text(p,'20 + 35 + 25 + 20 = 100%',101,466,32,R5.ink,m('example'));r5Text(p,'EXAMPLE, NOT A DEFAULT',101,517,26,R5.amber,m('example'));
r5Card(p,100,566,1400,158,'JUSTIFY THE CHOICE',['Intended outcomes  +  task emphasis  +  opportunity to demonstrate the capability'],m('justify'),R5.green);
}],
['q3','Justify the emphasis',()=>panel(0),{ask:r5Ask('q3')}],
['check','Keep structure purposeful',m=>{const p=panel(0);r5Title(p,'05 · Test the whole map','Follow the learning, keep useful structure');r5Card(p,85,248,417,171,'Intended outcome',['What learning matters?']);r5Card(p,595,248,417,171,'Criterion judgement',['What quality is judged?']);r5Card(p,1105,248,410,171,'Observable evidence',['What supports it?']);r5Arrow(p,'M520 337H577M1030 337H1087',.2);
const headings=r5Card(p,85,501,495,141,'Report headings',['Task and genre expectations']);r5Tw(headings,{x:450},m('structure'),1);r5Card(p,1105,501,410,178,'Keep expectations explicit',['A section may serve','a valid capability.'],m('structure'),R5.green);r5Arrow(p,'M1034 569H1087',m('structure'));r5Text(p,'Review the judgement, not just the row title.',391,756,33,R5.amber,m('structure'));
}],
['wrap','Three design checks',m=>{const p=panel(0);r5Title(p,'Keep beside your rubric','Every criterion earns its place');r5Card(p,91,254,1420,122,'1 · Align',['Intended learning → criterion → evidence'],m('align'),R5.blue);r5Card(p,91,419,1420,122,'2 · Separate',['Distinct judgements may share a passage.'],m('separate'),R5.green);r5Card(p,91,584,1420,122,'3 · Justify',['Weights express the task’s learning emphasis.'],m('justify'),R5.blue);r5Arrow(p,'M60 315V645',m('justify'));}],
['final1','Chapter practice',()=>panel(0),{ask:r5Ask('final1')}],
['apply','Map your own rubric',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd5-workshop-card');c.append(h('p','kicker','Apply it · unscored draft'),h('p','prompt','Two criteria. Distinct judgements. A reason for the weights.'));RD5Worksheet(c,done);P.keys=null;}}],
['finish','Chapter complete',()=>panel(0),{ask:finishCard}]
].map(([id,title,run,extra])=>({id,title,run,...extra}));
boot();setCaptions(true);
const rd5Live=new MutationObserver(()=>document.querySelectorAll('.fb:not([role])').forEach(e=>{e.setAttribute('role','status');e.setAttribute('aria-live','polite');}));rd5Live.observe(document.getElementById('ui'),{childList:true,subtree:true});

