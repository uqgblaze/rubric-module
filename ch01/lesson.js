'use strict';
const CHAPTER={number:1,title:'From labels to evidence',minutes:8,language:'en',next:'../ch02/'};
const RD={amber:'#f0b45a',blue:'#86c9e8',green:'#8fd6b0',ink:'#ece8dc',muted:'#a9bdb3'};
const rdReduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const rdTw=(e,to,t,d=.65)=>tw(e,to,t,rdReduced ? .001 : d,out);
const rdShow=(e,t=0)=>rdTw(e,{o:1},t,.5);
function rdText(p,text,x,y,size=32,fill=RD.ink,t=0,weight=500){const e=T(p,text,{x,y,size,fill,weight,o:0});rdShow(e,t);return e;}
function rdLines(p,lines,x,y,size=30,fill=RD.ink,t=0,gap=43){return lines.map((line,i)=>rdText(p,line,x,y+i*gap,size,fill,t));}
function rdBox(p,x,y,w,h,stroke=COL.faint){return mk('rect',{x,y,width:w,height:h,rx:18,fill:'#22362e',stroke,'stroke-width':2},p);}
function rdTitle(p,kicker,title){rdText(p,kicker.toUpperCase(),92,82,23,RD.blue,0,600);rdText(p,title,92,148,49,RD.ink,.05,600);}
function rdCell(p,x,y,w,h,label,lines,t=0,accent=RD.blue){const g=G(p,{o:0});rdBox(g,x,y,w,h);rdText(g,label,x+24,y+47,28,accent,0,650);rdLines(g,lines,x+24,y+100,29,RD.ink,0,40);rdShow(g,t);return g;}
function rdArrow(p,d,t,col=RD.green){const q=path(p,d,{stroke:col,'stroke-width':4,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},{d:0});rdTw(q,{d:1},t,.85);return q;}
function rdFactors(p,x,y,t,connected=false,scale=1){const g=G(p,{x,y,s:scale,o:0});rdShow(g,t);
  ['Workload','Feedback','Rework'].forEach((word,i)=>{rdBox(g,i*155,0,135,72,RD.blue);rdText(g,word,i*155+12,45,22,RD.blue);});
  if(connected){rdArrow(g,'M137 36H152M144 29L152 36L144 43',t+.2);rdArrow(g,'M292 36H307M299 29L307 36L299 43',t+.5);}return g;}
function rdLens(p,x,title,lines,t,col){const g=G(p,{o:0,y:18});rdBox(g,x,290,590,245,col);rdText(g,title,x+32,346,33,col);rdLines(g,lines,x+32,409,31,RD.ink,0,45);rdTw(g,{o:1,y:0},t);return g;}
const rdGradeData=[
  ['P · Pass',['Links case to theory;','mainly lists factors.']],
  ['C · Credit',['Applies theory to','several factors,','treated separately.']],
  ['D · Distinction',['Uses theory to explain','relationships between','the factors.']],
  ['HD · High Distinction',['Explains mechanisms;','identifies a limitation','in the theory.']]
];
function rdRow(p,y,times=[0,0,0,0],height=300){return rdGradeData.map(([title,lines],i)=>rdCell(p,92+i*356,y,332,height,title,lines,times[i],i>1?RD.green:RD.blue));}
const rdPractice=[
  {id:'p-revision',prompt:['Which revision gives a student the clearest action to take?'],build:choice([
    ['Move from “good analysis” to “very detailed analysis”.'],
    ['Move from listing relevant factors to explaining how they interact.'],
    ['Move from three factors to five, regardless of relevance.']
  ],1,'Explaining an interaction is a change the student can make and a marker can locate.',[
    '“Very detailed” still leaves the expected difference unclear.',null,'More factors alone do not establish a better analysis. Relevance and relationships matter.'])},
  {id:'p-evidence',prompt:['Which sentence shows an explained relationship, rather than a list?'],build:choice([
    ['The case involves workload, feedback and rework.'],
    ['The team has three important operational problems.'],
    ['Heavy workload delays feedback, so errors are found later and work is repeated.']
  ],2,'The sentence explains how one factor affects another. A marker can point to that link.',[
    'This identifies factors but does not explain how they relate.','The number of problems does not describe a relationship.',null])},
  {id:'p-calibration',prompt:['Two markers disagree after a rubric revision. What is the most useful next step?'],build:choice([
    ['Compare their evidence against the descriptors and discuss the boundary.'],
    ['Add “excellent” to the top cell so the standard is clearer.'],
    ['Assume clear descriptors guarantee agreement and average the scores.']
  ],0,'Calibration tests how the descriptors work with real responses. Shared anchors support judgement.',[
    null,'Another evaluative label will not explain the disputed evidence.','Clear wording supports consistency; it cannot guarantee agreement. Explore the reason for the difference.'])}
];
const BEATS=[
 ['intro','From labels to evidence',(m)=>{const p=panel(0);rdText(p,'RUBRIC DESIGN FUNDAMENTALS  /  CHAPTER 01',120,180,27,RD.blue);rdLines(p,['From labels','to evidence'],120,320,88,RD.ink,0,104);rdLines(p,['Make differences in quality visible','in the work students produce.'],125,590,36,RD.muted,m('sub'),50);
   const a=G(p,{o:0,x:40});rdBox(a,1080,245,385,122,RD.amber);rdText(a,'“Very good”',1115,320,40,RD.amber);rdTw(a,{x:0,o:1},.3);
   rdArrow(p,'M1268 389V467M1254 452L1268 467L1282 452',m('sub'));
   rdCell(p,1040,505,425,195,'Visible evidence',['Explains how the','factors interact.'],m('sub')+.4,RD.green);
 }],
 ['two_jobs','One rubric, two jobs',(m)=>{const p=panel(0);rdTitle(p,'01 · The purpose','One rubric. Two useful questions.');rdLens(p,92,'STUDENT  ·  before submission',['What can I change','in my work?'],m('student'),RD.blue);rdLens(p,915,'MARKER  ·  during assessment',['What evidence supports','this judgement?'],m('marker'),RD.green);
   rdArrow(p,'M684 417H913M898 407L913 417L898 427',m('marker'));rdText(p,'Shared anchor: something visible in the work.',345,692,36,RD.ink,m('anchor'),600);
 }],
 ['labels','The disappearing difference',(m)=>{const p=panel(0);rdTitle(p,'02 · Diagnose','What actually changes across the row?');
   const labels=['satisfactory','good','very good','excellent'];labels.forEach((label,i)=>{const x=92+i*356;const g=rdCell(p,x,270,332,330,['P · Pass','C · Credit','D · Distinction','HD · High Distinction'][i],['Demonstrates'],0,RD.muted);const tag=rdText(g,label,x+24,425,34,RD.amber,m('labels'),650);rdLines(g,['critical analysis','of the case.'],x+24,478,29,RD.ink);rdTw(tag,{o:0},m('strip'));
     const dash=path(g,`M${x+24} 430H${x+290}`,{stroke:RD.amber,'stroke-width':3,'stroke-dasharray':'7 9'},{o:0});rdShow(dash,m('strip')+.4);});
   rdText(p,'Remove the praise words. The difference disappears.',250,716,38,RD.amber,m('gap'),600);
 }],
 ['q1','Find the vague phrase',()=>{const p=panel(0);rdTitle(p,'Quick check · Select inside the descriptor','Which phrase leaves the quality undefined?');
   const defs=[['Demonstrates',110,310],['very good',468,260],['critical analysis',776,344],['of the case.',1168,330]];
   S.rdTargets=defs.map(([label,x,w])=>{const el=rdText(p,label,x,355,36,label==='very good'?RD.amber:RD.ink);return{el,box:[x-10,303,w,80],label};});
   rdText(p,'Click a phrase, or use ← → and Enter.',110,460,29,RD.muted);
 },{ask:done=>quiz({x:92,y:548,w:1416,cls:'side'},[{id:'c-vague',prompt:['Find the evaluation that needs an observable description.'],build:pickEls(S.rdTargets,1,'“Very good” judges quality without saying what is different in the work.',i=>['“Demonstrates” signals performance but is not the word scaling the grade.','','“Critical analysis” names the capability. The vague quality judgement appears elsewhere.','“Of the case” names the context. It does not define the quality.'][i])}],done)}],
 ['evidence','Give the arrows a reason',(m)=>{const p=panel(0);rdTitle(p,'03 · Make the evidence visible','From naming factors to explaining a relationship');rdText(p,'Illustrative case: an overloaded project team',96,214,28,RD.muted);
   rdText(p,'NAMES THE FACTORS',105,320,25,RD.blue,m('list'),600);rdFactors(p,105,358,m('list'),false,1.5);
   rdText(p,'EXPLAINS THE CONNECTION',875,320,25,RD.green,m('connect'),600);rdFactors(p,875,358,m('connect'),true,1.35);
   rdLines(p,['Rising workload delays feedback.','Errors are found later, so work is repeated.'],880,540,29,RD.ink,m('connect'),45);
   rdArrow(p,'M300 690H1290M1275 680L1290 690L1275 700',m('why'));rdText(p,'The improvement is the explained relationship.',380,759,35,RD.green,m('why'),600);
 }],
 ['progression','Read the evidence across the row',(m)=>{const p=panel(0);rdTitle(p,'04 · An illustrative critical analysis row','Different work, not stronger praise');rdText(p,'Case-study example · P (4), C (5), D (6), HD (7)',95,211,27,RD.muted);const times=['p','c','d','hd'].map(k=>m(k));rdRow(p,272,times,365);
   times.forEach((t,i)=>{const x=120+i*356;rdFactors(p,x,556,t,i>1,.58);});
   rdLines(p,['Standards depend on the task and intended learning.','These cells are an illustration, not a universal grading formula.'],165,728,31,RD.muted,m('hd'),43);
 }],
 ['q2','Match the sample to the evidence',()=>{const p=panel(0);rdTitle(p,'Quick check · Judge only the evidence shown','Which descriptor is the closest match?');rdBox(p,92,196,1416,182,RD.blue);rdLines(p,['“Using the theory, the response explains that workload delays feedback,','so errors are found later and work is repeated. It does not discuss','a limitation of the theory.”'],120,246,30,RD.ink,0,44);
   const cells=rdRow(p,415,[0,0,0,0],248);S.rdTargets=cells.map((el,i)=>({el,box:[92+i*356,415,332,248],label:rdGradeData[i][0]+': '+rdGradeData[i][1].join(' ')}));
 },{ask:done=>quiz({x:92,y:695,w:1416,cls:'side rd-picture-check'},[{id:'c-match',prompt:['Select a cell. Judge only the evidence shown.'],build:pickEls(S.rdTargets,2,'D is the closest match: theory explains the relationships. HD also asks for a limitation.',i=>['The sample goes beyond listing; it explains a relationship.','The sample connects the factors instead of treating them independently.','','The sample does not yet identify a limitation in the theory.'][i])}],done)}],
 ['judgement','Support professional judgement',(m)=>{const p=panel(0);rdTitle(p,'05 · Use the rubric with real work','Shared evidence supports a conversation');rdLens(p,92,'MARKER A',['Where do you see','the relationship?'],m('evidence'),RD.blue);rdLens(p,915,'MARKER B',['What makes this different','from the next level?'],m('evidence'),RD.green);
   rdArrow(p,'M684 415H913M898 405L913 415L898 425',m('calibrate'));rdText(p,'Compare samples → discuss boundaries → calibrate',235,663,37,RD.green,m('calibrate'),600);rdText(p,'Clear wording helps. It does not guarantee identical grades.',255,738,32,RD.muted,m('calibrate')+.8);
 }],
 ['transfer','Try it with recommendations',(m)=>{const p=panel(0);rdTitle(p,'06 · Transfer to another capability','Make the difference useful for the task');
   const a=rdCell(p,92,235,670,150,'VAGUE',['Good recommendations'],m('before'),RD.amber);const b=rdCell(p,806,235,702,150,'VAGUE',['Excellent recommendations'],m('before'),RD.amber);
   rdTw(a,{o:.4},m('after'));rdTw(b,{o:.4},m('after'));rdCell(p,92,428,670,211,'OBSERVABLE',['Proposes recommendations','relevant to the case.'],m('after'),RD.blue);rdCell(p,806,428,702,211,'OBSERVABLE',['Justifies each recommendation from the','case analysis; addresses a constraint.'],m('after'),RD.green);
   rdText(p,'What changes? Justification + a task-specific constraint.',252,748,35,RD.green,m('difference'),600);
 }],
 ['q3','Choose an observable improvement',()=>{panel(0);},{ask:done=>quiz(SCREEN,[{id:'c-upgrade',prompt:['A response treats several factors separately. Which next descriptor gives an observable improvement?'],build:choice([
   ['Analyses the factors very thoroughly.'],['Explains how the factors reinforce one another.'],['Mentions more factors than the previous level.']
 ],1,'A reader can locate the explanation of how the factors interact. That is an observable shift.',[
   '“Very thoroughly” still leaves the difference to interpretation.',null,'Quantity alone does not describe the quality of the connections.'])}],done)}],
 ['wrap','Three moves for your next row',(m)=>{const p=panel(0);rdTitle(p,'Take this into your next assessment','Three moves for a useful revision');[['Name the action.','What could you see in the work?'],['Make the difference visible.','What changes across adjacent grades?'],['Test the row twice.','Can a student act? Can a marker point to evidence?']].forEach(([a,b],i)=>{const g=G(p,{o:0});mk('circle',{cx:138,cy:302+i*157,r:31,fill:RD.green},g);rdText(g,String(i+1),128,314+i*157,31,COL.board);rdText(g,a,207,311+i*157,39,RD.ink,0,600);rdText(g,b,207,364+i*157,31,RD.muted);rdShow(g,m('w'+(i+1)));});}],
 ['final1','Chapter practice',()=>{panel(0);},{ask:done=>quiz(SCREEN,rdPractice,done,'Chapter practice')}],
 ['apply','Revise one of your own rows',()=>{panel(0);},{ask:done=>{const c=card(SCREEN,'workshop-card');c.append(h('p','kicker','Apply it · unscored reflection'),h('p','prompt','Revise two adjacent descriptors'),h('p','rd-note','Choose one capability. Make the change in student work explicit.'));RubricWorkshop(c,done);P.keys=null;}}],
 ['finish','Chapter complete',()=>{panel(0);},{ask:finishCard}]
].map(([id,title,run,extra])=>({id,title,run,...extra}));
boot();
setCaptions(true);
const rdLive=new MutationObserver(()=>document.querySelectorAll('.fb:not([role])').forEach(e=>{e.setAttribute('role','status');e.setAttribute('aria-live','polite');}));
rdLive.observe(document.getElementById('ui'),{childList:true,subtree:true});
