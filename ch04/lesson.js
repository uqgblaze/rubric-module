'use strict';
const CHAPTER={number:4,title:'Build a descriptor row',minutes:12,language:'en',next:'../ch05/'};
const R4={amber:'#f0b45a',blue:'#86c9e8',green:'#8fd6b0',ink:'#ece8dc',muted:'#a9bdb3'};
const rd4Reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const r4Tw=(el,to,t,d=.65)=>tw(el,to,t,rd4Reduced ? .001 : d,out);
const r4Show=(el,t=0)=>r4Tw(el,{o:1},t,.4);
function r4Text(p,text,x,y,size=32,fill=R4.ink,t=0,weight=500){const e=T(p,text,{x,y,size,fill,weight,o:0});r4Show(e,t);return e;}
function r4Lines(p,lines,x,y,size=30,fill=R4.ink,t=0,gap=41){return lines.map((s,i)=>r4Text(p,s,x,y+i*gap,size,fill,t));}
function r4Box(p,x,y,w,h,stroke=COL.faint){return mk('rect',{x,y,width:w,height:h,rx:17,fill:'#22362e',stroke,'stroke-width':2},p);}
function r4Title(p,kicker,title){r4Text(p,kicker.toUpperCase(),85,82,23,R4.blue,0,600);r4Text(p,title,85,148,46,R4.ink,.03,600);}
function r4Card(p,x,y,w,h,title,lines,t=0,color=R4.blue){const g=G(p,{o:0});r4Box(g,x,y,w,h);r4Text(g,title,x+24,y+48,31,color,0,650);r4Lines(g,lines,x+24,y+105,29,R4.ink);r4Show(g,t);return g;}
function r4Arrow(p,d,t=0,color=R4.green){const e=path(p,d,{stroke:color,'stroke-width':4,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},{d:0});r4Tw(e,{d:1},t,.8);return e;}
function r4RowCell(p,i,lines,t=0,evidenceAt=0){const x=66+i*374,g=G(p,{o:0});r4Box(g,x,258,349,359);r4Text(g,['P','C','D','HD'][i],x+22,306,33,R4.green,0,650);r4Lines(g,['Identifies relevant','case issues'],x+22,365,27,R4.blue,0,37);r4Lines(g,lines,x+22,462,27,R4.ink,evidenceAt,38);r4Show(g,t);return g;}
function r4Question(q){return{id:q.id,prompt:[q.prompt],build:choice(q.options.map(s=>[s]),q.right,q.why,q.wrong)};}
const r4Ask=beat=>done=>quiz(SCREEN,RD4_DATA.questions.filter(q=>q.beat===beat).map(r4Question),done,beat==='final1'?'Chapter practice':'Quick check');
const BEATS=[
['intro','Build a descriptor row',m=>{const p=panel(0);r4Text(p,'UNIT 2  /  DESCRIBE  /  CHAPTER 04',90,114,26,R4.blue);r4Lines(p,['Build a','descriptor row'],90,228,72,R4.ink,0,86);r4Text(p,'One capability. Visible differences.',92,425,35,R4.muted);
const labels=['Identify','Context','Relationships','Priority'];labels.forEach((s,i)=>{const x=90+i*375;r4Box(p,x,517,346,173);r4Text(p,['P','C','D','HD'][i],x+22,560,29,R4.green);r4Text(p,s,x+22,641,29,R4.ink,m('spine'));});r4Arrow(p,'M115 596H1465',m('spine'),R4.blue);r4Text(p,'Common spine: identifies relevant case issues',780,250,31,R4.blue,m('spine'));r4Text(p,'Illustrative labels for this task only',827,332,27,R4.muted,m('spine'));
}],
['spine','One capability, visible differences',m=>{const p=panel(0);r4Title(p,'01 · Parallel construction','Hold the capability steady');
r4Card(p,100,250,1370,157,'SPINE · shared action and object',['Identifies relevant case issues…'],0,R4.blue);
const change=r4Card(p,100,477,1370,183,'DISTINGUISHER · change in the evidence',['…and explains symptom–cause relationships using case evidence.'],m('change'),R4.green);r4Tw(change,{y:-18},m('change'),.7);
r4Arrow(p,'M785 423V451M773 439L785 451L797 439',m('change'));r4Text(p,'Repeated words help comparison. Shared capability makes it coherent.',220,743,30,R4.muted,m('change'));
}],
['ends','Anchor both ends in the task',m=>{const p=panel(0);r4Title(p,'02 · Define the endpoints','Local task: identify and interpret case issues');r4Text(p,'Problem identification here includes finding, interpreting and selecting issues.',100,207,29,R4.muted);
r4Card(p,95,273,650,262,'P · hypothetical minimum',['Identifies relevant issues','accurately from the case.'],m('threshold'));
r4Card(p,825,273,674,344,'HD · strongest endpoint',['Retains accuracy and context.','Explains evidenced relationships.','Ranks issues by justified impact.'],m('strong'),R4.green);
r4Text(p,'If the outcome requires causal explanation, identification alone is insufficient.',114,731,29,R4.amber,m('threshold'));
}],
['q1','Keep the spine stable',()=>panel(0),{ask:r4Ask('q1')}],
['middle','Build the middle cells',m=>{const p=panel(0);r4Title(p,'03 · Give each cell a job','Fill the gaps with evidence');
r4RowCell(p,0,['Accurately from','the case.']);r4RowCell(p,3,['Retains context','and relationships.','Justifies priorities.']);
r4RowCell(p,1,['Adds organisational','context.'],m('context'));r4RowCell(p,2,['Retains context.','Adds evidenced','symptom–cause links.'],m('relationships'));
r4Text(p,'Each step retains the required evidence and adds a visible distinction.',215,719,31,R4.green,m('relationships'));
}],
['lab','Try building the row',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd4-lab-card');c.append(h('p','kicker','Try it · unscored row builder'),h('p','prompt','Choose the spine. Compare the evidence.'));RD4RowLab(c,done);P.keys=null;}}],
['compare','Read across the completed row',m=>{const p=panel(0);r4Title(p,'04 · Check coherence','Same capability. Distinct evidence.');
const notes=[['Accurate issue','identification.'],['Adds organisational','context.'],['Retains context.','Adds evidenced','relationships.'],['Retains context','and relationships.','Justifies priorities.']];notes.forEach((a,i)=>r4RowCell(p,i,a,0,m('different')));
r4Text(p,'ACCURATE IDENTIFICATION REMAINS THROUGHOUT',365,215,25,R4.blue,m('common'),650);r4Arrow(p,'M89 420H1514',m('common'),R4.blue);
r4Lines(p,['Abbreviated comparison · full standalone cells are in readable mode.','A single impressive feature does not settle the whole judgement.'],200,692,30,R4.muted,m('different'),44);
}],
['q2','Build the missing middle',()=>panel(0),{ask:r4Ask('q2')}],
['drift','Catch a change of capability',m=>{const p=panel(0);r4Title(p,'05 · Check the action and object','A parallel-looking row can still drift');
['Identify issues','Locate in context','Explain links'].forEach((s,i)=>r4Card(p,65+i*374,257,349,230,['P','C','D'][i],[s],0,R4.blue));
const wrong=r4Card(p,1187,257,348,230,'HD?',['Perfect citation','formatting'],0,R4.amber);r4Tw(wrong,{y:276,o:.65},m('restore'));
r4Card(p,1187,257,348,230,'HD',['Justified issue','priorities'],m('restore')+.5,R4.green);
r4Lines(p,['Keep problem identification in this row.','Review formatting in the appropriate criterion.'],107,624,32,R4.muted,m('restore'),47);
}],
['repair','Replace praise with inspectable evidence',m=>{const p=panel(0);r4Title(p,'06 · Remove adverb creep','What changes when the praise disappears?');
r4Card(p,94,246,660,171,'Identifies issues',[]);r4Card(p,823,246,677,171,'Identifies issues',[]);
const a=r4Text(p,'well',120,359,36,R4.amber),b=r4Text(p,'very well',850,359,36,R4.amber);r4Tw(a,{o:0},m('remove'));r4Tw(b,{o:0},m('remove'));
r4Card(p,94,475,660,219,'C · visible evidence',['Locates accurate case issues','in organisational context.'],m('evidence'),R4.green);
r4Card(p,823,475,677,219,'D · visible evidence',['Retains accuracy and context.','Explains symptom–cause links','using case evidence.'],m('evidence')+.7,R4.green);
}],
['q3','Repair an adjacent pair',()=>panel(0),{ask:r4Ask('q3')}],
['process','A six-step drafting loop',m=>{const p=panel(0);r4Title(p,'07 · Draft, then test','Build a row you can inspect together');
const steps=[['1 · Name the capability',['Task + intended outcome'],'name'],['2 · Anchor both ends',['Strongest + local minimum'],'ends'],['3 · Fill the middle',['Meaningful evidence shifts'],'middle'],['4 · Check the spine',['Same capability in all cells'],'parallel'],['5 · Remove praise scaling',['Replace vague differences'],'creep'],['6 · Test with samples',['Compare and revise together'],'test']];
steps.forEach(([title,lines,mark],i)=>r4Card(p,80+(i%3)*507,242+Math.floor(i/3)*225,471,174,title,lines,m(mark),i===5?R4.green:R4.blue));
r4Arrow(p,'M1332 661V708H310V665M298 678L310 665L322 678',m('test'));r4Text(p,'Evidence from testing can change the draft.',470,757,29,R4.green,m('test'));
}],
['wrap','Two tests for every boundary',m=>{const p=panel(0);r4Title(p,'Keep beside your draft','Make the boundary usable');
r4Card(p,95,242,647,174,'1 · Stable capability',['Same action and object'],m('spine'),R4.blue);r4Card(p,827,242,647,174,'2 · Visible distinction',['Different evidence in the work'],m('evidence'),R4.green);
r4Arrow(p,'M787 443V482M775 470L787 482L799 470',m('users'));
r4Card(p,95,509,647,191,'Student test',['What action would improve','my work?'],m('users'),R4.blue);r4Card(p,827,509,647,191,'Marker test',['What evidence puts this response','on one side of the boundary?'],m('users'),R4.green);
}],
['final1','Chapter practice',()=>panel(0),{ask:r4Ask('final1')}],
['apply','Draft your own row',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd4-workshop-card');c.append(h('p','kicker','Apply it · unscored draft'),h('p','prompt','One capability. Four complete cells.'));RD4Worksheet(c,done);P.keys=null;}}],
['finish','Chapter complete',()=>panel(0),{ask:finishCard}]
].map(([id,title,run,extra])=>({id,title,run,...extra}));
boot();setCaptions(true);
const rd4Live=new MutationObserver(()=>document.querySelectorAll('.fb:not([role])').forEach(e=>{e.setAttribute('role','status');e.setAttribute('aria-live','polite');}));
rd4Live.observe(document.getElementById('ui'),{childList:true,subtree:true});
