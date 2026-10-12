'use strict';
const CHAPTER={number:2,title:'Name the quality of thinking',minutes:10,language:'en',next:'../ch03/'};
const R2={amber:'#f0b45a',blue:'#86c9e8',green:'#8fd6b0',ink:'#ece8dc',muted:'#a9bdb3'};
const rd2Reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const r2Tw=(el,to,t,d=.6)=>tw(el,to,t,rd2Reduced ? .001 : d,out);
const r2Show=(el,t=0)=>r2Tw(el,{o:1},t,.45);
function r2Text(p,text,x,y,size=32,fill=R2.ink,t=0,weight=500){const e=T(p,text,{x,y,size,fill,weight,o:0});r2Show(e,t);return e;}
function r2Lines(p,lines,x,y,size=30,fill=R2.ink,t=0,gap=42){return lines.map((s,i)=>r2Text(p,s,x,y+i*gap,size,fill,t));}
function r2Box(p,x,y,w,h,stroke=COL.faint){return mk('rect',{x,y,width:w,height:h,rx:18,fill:'#22362e',stroke,'stroke-width':2},p);}
function r2Title(p,kicker,title){r2Text(p,kicker.toUpperCase(),92,82,23,R2.blue,0,600);r2Text(p,title,92,148,48,R2.ink,.04,600);}
function r2Card(p,x,y,w,h,title,lines,t=0,color=R2.blue){const g=G(p,{o:0});r2Box(g,x,y,w,h);r2Text(g,title,x+24,y+48,31,color,0,650);r2Lines(g,lines,x+24,y+102,30,R2.ink);r2Show(g,t);return g;}
function r2Arrow(p,d,t=0,color=R2.green){const el=path(p,d,{stroke:color,'stroke-width':4,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},{d:0});r2Tw(el,{d:1},t,.7);return el;}
function r2Question(q){return {id:q.id,prompt:[q.prompt],build:choice(q.options.map(s=>[s]),q.right,q.why,q.wrong)};}
const r2Ask=beat=>done=>quiz(SCREEN,RD2_DATA.questions.filter(q=>q.beat===beat).map(r2Question),done,beat==='final1'?'Chapter practice':'Quick check');
const BEATS=[
 ['intro','Name the quality of thinking',(m)=>{const p=panel(0);r2Text(p,'UNIT 2  /  DESCRIBE  /  CHAPTER 02',100,138,26,R2.blue);r2Lines(p,['Name the quality','of thinking'],100,275,80,R2.ink,0,100);r2Lines(p,['Choose what matters.','Describe what a reader can find.'],104,496,34,R2.muted,m('evidence'),49);
   r2Card(p,1050,186,415,136,'Task',['Recommend a change.'],0);
   r2Arrow(p,'M1257 340V387M1244 374L1257 387L1270 374',m('evidence'));
   r2Card(p,1050,404,415,136,'Value',['Depth'],m('evidence'),R2.amber);
   r2Arrow(p,'M1257 555V598M1244 585L1257 598L1270 585',m('evidence')+.4);
   r2Card(p,1050,614,415,136,'Evidence',['Explains a trade-off.'],m('evidence')+.8,R2.green);
 }],
 ['language','A language for attention',(m)=>{const p=panel(0);r2Title(p,'01 · Values of Inquiry','A useful lens still needs evidence');
   const vague=r2Card(p,100,254,465,225,'“Greater depth”',['A quality name alone','leaves the work undefined.'],0,R2.amber);
   r2Arrow(p,'M585 365H677M663 353L677 365L663 377',m('question'));
   r2Card(p,700,239,780,245,'Ask a task-specific question',['What complexity should the','response address?'],m('question'),R2.blue);
   r2Tw(vague,{o:.25},m('evidence'));
   r2Text(p,'Describe the explanation a reader should find.',126,568,39,R2.green,m('evidence'),600);
   r2Lines(p,['The guide reports practical usefulness; it says this use has not been','independently validated specifically for writing rubric descriptors.'],126,641,27,R2.muted,m('caveat'),37);
 }],
 ['meaning','Make meaning dependable',(m)=>{const p=panel(0);r2Title(p,'02 · First group of values','Make meaning dependable');r2Text(p,'Illustrative survey report · three different questions',98,213,28,R2.muted);
   const defs=[['Clarity',['Can the audience','understand it?'],['Define “delayed','feedback”.'],'clarity'],['Accuracy',['Is the information','represented faithfully?'],['“Some respondents”','does not mean','“all students”.'],'accuracy'],['Precision',['Is the meaning','specific enough?'],['Name the group,','count and period.'],'precision']];
   defs.forEach(([name,question,example,mark],i)=>{const x=92+i*480;r2Card(p,x,267,451,362,name,question,m(mark));r2Lines(p,example,x+24,492,29,R2.green,m(mark)+.3,40);});
   r2Text(p,'Specific detail should serve the meaning.',98,691,32,R2.muted,m('precision'));
 }],
 ['q1','Make the scope specific',()=>panel(0),{ask:r2Ask('q1')}],
 ['explore','Explore the issue',(m)=>{const p=panel(0);r2Title(p,'03 · Two ways to explore','Develop complexity. Consider relevant alternatives.');
   r2Card(p,525,215,550,135,'Service recommendation',['What would make it feasible?'],0);
   r2Card(p,90,258,360,179,'Staff view',['Who can cover','the new hours?'],m('breadth'));
   r2Card(p,1150,258,360,179,'Service-user view',['Who can attend','at those times?'],m('breadth'));
   r2Arrow(p,'M460 331H509M496 319L509 331L496 343',m('breadth'));
   r2Arrow(p,'M1135 331H1090M1103 319L1090 331L1103 343',m('breadth'));
   r2Arrow(p,'M800 370V437M788 424L800 437L812 424',m('depth'));
   r2Card(p,525,453,550,182,'Depth · deal with complexity',['Explain the staffing constraint','and the trade-off it creates.'],m('depth'),R2.green);
   r2Lines(p,['Breadth','Compare relevant','perspectives.'],92,501,29,R2.blue,m('breadth'),39);
   r2Text(p,'Neither length nor a count of viewpoints defines quality.',240,699,32,R2.muted,m('both'));
 }],
 ['focus','Focus and connect',(m)=>{const p=panel(0);r2Title(p,'04 · Final group of values','Focus the material. Connect the reasoning.');
   r2Text(p,'Relevance',100,282,32,R2.blue,m('relevance'),650);r2Text(p,'Does this help the decision?',100,331,25,R2.muted,m('relevance'));
   r2Card(p,548,220,419,147,'Staffing schedule',['Tests feasible hours.'],m('relevance'),R2.green);
   const off=r2Card(p,996,220,496,147,'History of the logo',['Interesting, but off-topic.'],m('relevance'),R2.amber);r2Tw(off,{o:.23},m('relevance')+5);
   r2Text(p,'Significance',100,455,32,R2.blue,m('significance'),650);r2Text(p,'What matters most, and why?',100,504,25,R2.muted,m('significance'));
   r2Card(p,548,394,944,140,'Decisive constraint',['Explain why staffing determines what can operate.'],m('significance'),R2.green);
   r2Text(p,'Coherence',100,624,32,R2.blue,m('coherence'),650);r2Text(p,'Does the reasoning hold?',100,673,25,R2.muted,m('coherence'));
   ['Evidence','Claim','Recommendation'].forEach((s,i)=>{const x=548+i*323;const g=G(p,{o:0});r2Box(g,x,583,297,100,R2.blue);r2Text(g,s,x+20,644,s==='Recommendation'?25:30,R2.blue);r2Show(g,m('coherence')+i*.45);if(i<2)r2Arrow(p,`M${x+300} 633H${x+320}M${x+311} 625L${x+320} 633L${x+311} 641`,m('coherence')+.35+i*.45);});
 }],
 ['q2','Make depth visible',()=>panel(0),{ask:r2Ask('q2')}],
 ['overlap','Values work together',(m)=>{const p=panel(0);r2Title(p,'05 · The overlap principle','One piece of evidence can express several values');
   r2Card(p,92,238,440,159,'Precision',['Specify what a term means.'],0,R2.blue);r2Card(p,662,238,440,159,'Clarity',['Help the audience follow.'],m('precision'),R2.green);r2Arrow(p,'M550 316H642M628 303L642 316L628 329',m('precision'));
   r2Text(p,'Breadth needs relevance.',100,468,36,R2.ink,m('breadth'),600);
   const names=['Staff perspective','Service-user perspective','An unrelated view'];names.forEach((s,i)=>{const g=r2Card(p,92+i*480,502,451,115,s,[],m('breadth'),i===2?R2.amber:R2.blue);if(i===2)r2Tw(g,{o:.22},m('breadth')+5);});
   r2Lines(p,['Select what matters to this task.','Avoid an eight-item checklist and automatic double counting.'],100,680,31,R2.green,m('select'),44);
 }],
 ['mixer','Explore the inquiry mixer',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd2-mixer-card');c.append(h('p','kicker','Explore · unscored'),h('p','prompt','Change the task. Change the focus.'));const ctl=RD2Mixer(c,done);P.keys=e=>ctl.key(e);}}],
 ['transfer','From a value to a descriptor',(m)=>{const p=panel(0);r2Title(p,'06 · Make the value local','Task → value → observable evidence');
   r2Card(p,92,245,680,158,'Task',['Recommend a feasible service change.'],m('task'),R2.blue);
   r2Card(p,840,245,664,158,'Useful value: depth',['Staffing complicates implementation.'],m('value'),R2.amber);
   r2Arrow(p,'M1170 424V471H800V507M788 494L800 507L812 494',m('evidence'));
   r2Card(p,218,521,1164,159,'Observable evidence',['Explains how the staffing constraint affects the recommendation','and addresses the trade-off it creates.'],m('evidence'),R2.green);
   r2Text(p,'Can a student act on it? Can a marker locate it?',325,735,31,R2.muted,m('test'));
 }],
 ['q3','Use the overlap',()=>panel(0),{ask:r2Ask('q3')}],
 ['wrap','Three moves',(m)=>{const p=panel(0);r2Title(p,'Keep for your next design conversation','Three moves');
   [['1','Start with the task.','Which capability should students demonstrate?','task'],['2','Choose useful values.','Which qualities matter for this particular inquiry?','value'],['3','Describe visible evidence.','What could a student do and a marker locate?','evidence']].forEach(([n,title,line,mark],i)=>{const y=284+i*175;r2Text(p,n,125,y,60,R2.green,m(mark),650);r2Text(p,title,230,y-4,39,R2.ink,m(mark),600);r2Text(p,line,230,y+51,31,R2.muted,m(mark));});
 }],
 ['final1','Chapter practice',()=>panel(0),{ask:r2Ask('final1')}],
 ['apply','Apply it to your task',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd2-workshop-card');c.append(h('p','kicker','Apply it · unscored reflection'),h('p','prompt','Your task. Your values. Visible evidence.'));RD2Worksheet(c,done);P.keys=null;}}],
 ['finish','Chapter complete',()=>panel(0),{ask:finishCard}]
].map(([id,title,run,extra])=>({id,title,run,...extra}));
boot();
setCaptions(true);
const rd2Live=new MutationObserver(()=>document.querySelectorAll('.fb:not([role])').forEach(e=>{e.setAttribute('role','status');e.setAttribute('aria-live','polite');}));
rd2Live.observe(document.getElementById('ui'),{childList:true,subtree:true});
