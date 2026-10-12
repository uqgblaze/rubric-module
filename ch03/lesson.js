'use strict';
const CHAPTER={number:3,title:'Make complexity visible',minutes:11,language:'en',next:'../ch04/'};
const R3={amber:'#f0b45a',blue:'#86c9e8',green:'#8fd6b0',ink:'#ece8dc',muted:'#a9bdb3'};
const rd3Reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const r3Tw=(el,to,t,d=.65)=>tw(el,to,t,rd3Reduced ? .001 : d,out);
const r3Show=(el,t=0)=>r3Tw(el,{o:1},t,.4);
function r3Text(p,text,x,y,size=32,fill=R3.ink,t=0,weight=500){const e=T(p,text,{x,y,size,fill,weight,o:0});r3Show(e,t);return e;}
function r3Lines(p,lines,x,y,size=30,fill=R3.ink,t=0,gap=42){return lines.map((s,i)=>r3Text(p,s,x,y+i*gap,size,fill,t));}
function r3Box(p,x,y,w,h,stroke=COL.faint){return mk('rect',{x,y,width:w,height:h,rx:18,fill:'#22362e',stroke,'stroke-width':2},p);}
function r3Title(p,kicker,title){r3Text(p,kicker.toUpperCase(),92,82,23,R3.blue,0,600);r3Text(p,title,92,148,46,R3.ink,.03,600);}
function r3Card(p,x,y,w,h,title,lines,t=0,color=R3.blue){const g=G(p,{o:0});r3Box(g,x,y,w,h);r3Text(g,title,x+24,y+48,31,color,0,650);r3Lines(g,lines,x+24,y+102,29,R3.ink);r3Show(g,t);return g;}
function r3Arrow(p,d,t=0,color=R3.green){const e=path(p,d,{stroke:color,'stroke-width':4,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},{d:0});r3Tw(e,{d:1},t,.9);return e;}
function r3Node(p,x,y,label,lines,t=0){const g=G(p,{x,y,o:0});r3Box(g,0,0,340,155,R3.blue);r3Text(g,label,22,45,29,R3.blue,0,650);r3Lines(g,lines,22,93,26);r3Show(g,t);return g;}
function r3Question(q){return{id:q.id,prompt:[q.prompt],build:choice(q.options.map(s=>[s]),q.right,q.why,q.wrong)};}
const r3Ask=beat=>done=>quiz(SCREEN,RD3_DATA.questions.filter(q=>q.beat===beat).map(r3Question),done,beat==='final1'?'Chapter practice':'Quick check');
const BEATS=[
['intro','Make complexity visible',m=>{const p=panel(0);r3Text(p,'UNIT 2  /  DESCRIBE  /  CHAPTER 03',100,118,26,R3.blue);r3Lines(p,['Make complexity','visible'],100,243,76,R3.ink,0,91);r3Lines(p,['Look for the relationships','in the response.'],104,449,36,R3.muted,m('connect'),49);
const a=r3Node(p,890,189,'Staffing',['One adviser']),b=r3Node(p,1100,411,'Capacity',['Completions per hour']),c=r3Node(p,811,641,'Consultations',['Take time']);
r3Tw(a,{x:1080,y:164},m('connect'));r3Tw(b,{x:1080,y:375},m('connect'));r3Tw(c,{x:1080,y:586},m('connect'));
r3Arrow(p,'M1250 332V361M1239 350L1250 361L1261 350',m('connect')+.7);r3Arrow(p,'M1250 573V544M1239 555L1250 544L1261 555',m('connect')+.9);
}],
['lens','A lens on the response',m=>{const p=panel(0);r3Title(p,'01 · SOLO','Structure of Observed Learning Outcomes');
r3Card(p,92,245,670,202,'Inspect the response',['What relevant aspects does it use?','How does it connect or extend them?'],0);
const person=r3Card(p,888,245,595,202,'A fixed label for a person',['“A multi-structural student”'],0,R3.amber);
r3Arrow(p,'M916 339L1444 414M916 414L1444 339',m('response'),R3.amber);r3Tw(person,{o:.4},m('response'));
r3Card(p,235,521,1129,176,'Keep the context around the evidence',['Task + intended outcome + published criteria'],m('context'),R3.green);
r3Text(p,'Response structure ≠ automatic grade',401,757,36,R3.green,m('context'),600);
}],
['first','Missing the task. Finding one aspect.',m=>{const p=panel(0);r3Title(p,'02 · First two structures','Task: explain long queues');
const miss=r3Card(p,92,263,650,248,'Pre-structural',['“The logo is blue','and looks modern.”'],0,R3.amber);
r3Text(p,'Misses this task',118,563,33,R3.amber,m('miss'));r3Tw(miss,{o:.28},m('one'));
r3Card(p,838,263,650,248,'Uni-structural',['“Only one adviser','works at lunch.”'],m('one'));
r3Text(p,'One relevant aspect',864,563,33,R3.blue,m('one'));r3Text(p,'Classify the observed evidence.',468,713,37,R3.green,m('one'));
}],
['many','Several aspects, still separate',m=>{const p=panel(0);r3Title(p,'03 · Multi-structural','Several relevant aspects. No explained links.');
r3Node(p,105,325,'Staffing',['One adviser']);r3Node(p,630,325,'Arrivals',['Many at lunch'],m('several'));r3Node(p,1155,325,'Consultations',['Take time'],m('several'));
r3Lines(p,['The response lists or catalogues.','The reader is left to supply the relationships.'],185,614,38,R3.muted,m('list'),54);
}],
['q1','Classify the list',()=>panel(0),{ask:r3Ask('q1')}],
['connect','Build the explanation',m=>{const p=panel(0);r3Title(p,'04 · Relational','The same aspects become an explanation');
const a=r3Node(p,105,291,'Staffing',['One adviser']),b=r3Node(p,630,291,'Consultations',['Take time']),c=r3Node(p,1155,291,'Arrivals',['Many at lunch']);
r3Tw(a,{x:100,y:260},m('because'));r3Tw(b,{x:100,y:457},m('because'));r3Tw(c,{x:649,y:260},m('because'));
r3Arrow(p,'M457 338H518V451H617M604 439L617 451L604 463',m('because')+.6);
r3Arrow(p,'M457 535H518V451',m('because')+.8);
r3Card(p,646,425,349,175,'Limited capacity',['Few consultations','completed per hour'],m('because'));
r3Arrow(p,'M1012 337H1050V450H1090M1077 438L1090 450L1077 462',m('therefore'));
r3Arrow(p,'M1012 515H1050V450',m('therefore')+.3);
r3Card(p,1110,369,390,199,'Queue grows',['Arrivals exceed','completed consultations.'],m('therefore'),R3.green);
r3Text(p,'Support each causal claim with case evidence.',240,716,37,R3.green,m('support'));
}],
['transfer','Extend with a reason and a boundary',m=>{const p=panel(0);r3Title(p,'05 · Extended abstract','A justified extension beyond the original case');
const model=G(p,{x:94,y:262,s:1});r3Box(model,0,0,610,217,R3.blue);r3Text(model,'Student service',25,49,32,R3.blue,0,650);r3Lines(model,['Demand exceeds capacity.','The waiting queue grows.'],25,110,31);
r3Tw(model,{s:.76,x:93,y:322},m('principle'));
r3Card(p,602,230,875,156,'General principle',['Persistent demand above capacity increases waiting.'],m('principle'),R3.green);
r3Arrow(p,'M574 419H810V494M798 481L810 494L822 481',m('new'));
r3Card(p,603,509,540,161,'Online appointments',['Does the same principle apply?'],m('new'));
r3Card(p,1170,451,321,247,'Test conditions',['Arrival patterns','Consultation time','Unused slots'],m('condition'),R3.amber);
r3Arrow(p,'M1155 545V645',m('condition'),R3.amber);
r3Text(p,'Changing context alone is not a justified transfer.',260,751,35,R3.muted,m('condition'));
}],
['q2','Classify the transfer',()=>panel(0),{ask:r3Ask('q2')}],
['labels','Look past the verb and the length',m=>{const p=panel(0);r3Title(p,'06 · Avoid shortcuts','Inspect what the response actually does');
const verb=r3Card(p,92,250,540,138,'“Analyses”',[],0,R3.amber);r3Tw(verb,{x:0,y:-38,o:.3},m('verb'));
r3Card(p,92,424,540,200,'Still an unconnected list',['Staffing. Arrivals.','Consultation time.'],m('verb'));
r3Card(p,778,250,698,374,'A short, connected explanation',['One adviser limits capacity.','Arrivals exceed completions.','So the queue grows.'],m('short'),R3.blue);
r3Arrow(p,'M1408 369V432M1397 421L1408 432L1419 421',m('short')+.5);r3Arrow(p,'M1408 452V514M1397 503L1408 514L1419 503',m('short')+.9);
r3Text(p,'Verbs and length do not settle the structure.',298,730,38,R3.green,m('inspect'));
}],
['threshold','The task sets the threshold',m=>{const p=panel(0);r3Title(p,'07 · A contextual judgement','One response. Two different requirements.');
r3Card(p,294,217,1010,153,'Same multi-structural response',['Lists staffing, arrivals and consultation time.'],0);
r3Arrow(p,'M530 387V429M518 416L530 429L542 416',m('inventory'));r3Arrow(p,'M1060 387V429M1048 416L1060 429L1072 416',m('explain'));
r3Card(p,92,444,681,188,'Task A · identify relevant factors',['May meet this requirement.','Check accuracy and coverage.'],m('inventory'),R3.green);
r3Card(p,816,444,677,188,'Task B · explain queue formation',['Required relationships are missing.','A list does not explain the queue.'],m('explain'),R3.amber);
r3Lines(p,['Use the outcome, task and published criteria.','A structure alone does not determine a grade.'],292,697,32,R3.muted,m('local'),43);
}],
['q3','Check the local requirement',()=>panel(0),{ask:r3Ask('q3')}],
['wrap','Three design moves',m=>{const p=panel(0);r3Title(p,'Keep for your next rubric conversation','Make the change in reasoning visible');
r3Box(p,72,224,1454,509,R3.green);r3Text(p,'TASK + OUTCOME + CRITERIA',110,280,26,R3.green,0,650);
r3Card(p,111,368,380,188,'1 · Aspects',['Relevant elements','students should use'],m('aspects'));
r3Card(p,610,368,380,188,'2 · Relationships',['Connections supported','by evidence'],m('links'),R3.green);
r3Card(p,1107,368,380,188,'3 · Transfer',['A justified extension','with conditions'],m('transfer'),R3.green);
r3Arrow(p,'M510 462H588M575 450L588 462L575 474',m('links'));r3Arrow(p,'M1009 462H1086M1073 450L1086 462L1073 474',m('transfer'));
r3Text(p,'Use the structures the learning outcome calls for.',258,662,35,R3.muted,m('transfer'));
}],
['final1','Chapter practice',()=>panel(0),{ask:r3Ask('final1')}],
['apply','Make it local',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd3-workshop-card');c.append(h('p','kicker','Apply it · unscored reflection'),h('p','prompt','Your task. Its threshold. The visible difference.'));RD3Worksheet(c,done);P.keys=null;}}],
['finish','Chapter complete',()=>panel(0),{ask:finishCard}]
].map(([id,title,run,extra])=>({id,title,run,...extra}));
boot();setCaptions(true);
const rd3Live=new MutationObserver(()=>document.querySelectorAll('.fb:not([role])').forEach(e=>{e.setAttribute('role','status');e.setAttribute('aria-live','polite');}));
rd3Live.observe(document.getElementById('ui'),{childList:true,subtree:true});

