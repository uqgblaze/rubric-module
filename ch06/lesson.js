'use strict';
const CHAPTER={number:6,title:'Make every cell accessible',minutes:8,language:'en',next:'../ch07/'};
const R6={amber:'#f0b45a',blue:'#86c9e8',green:'#8fd6b0',ink:'#ece8dc',muted:'#a9bdb3'};
const rd6Reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const r6Tw=(el,to,t,d=.65)=>tw(el,to,t,rd6Reduced ? .001 : d,out);
const r6Show=(el,t=0)=>r6Tw(el,{o:1},t,.4);
function r6Text(p,text,x,y,size=32,fill=R6.ink,t=0,weight=500){const e=T(p,text,{x,y,size,fill,weight,o:0});r6Show(e,t);return e;}
function r6Lines(p,lines,x,y,size=29,fill=R6.ink,t=0,gap=40){return lines.map((s,i)=>r6Text(p,s,x,y+i*gap,size,fill,t));}
function r6Box(p,x,y,w,h,stroke=COL.faint){return mk('rect',{x,y,width:w,height:h,rx:16,fill:'#22362e',stroke,'stroke-width':2},p);}
function r6Title(p,kicker,title){r6Text(p,kicker.toUpperCase(),85,80,23,R6.blue,0,650);r6Text(p,title,85,146,46,R6.ink,.02,600);}
function r6Card(p,x,y,w,h,title,lines,t=0,color=R6.blue){const g=G(p,{o:0});r6Box(g,x,y,w,h);r6Text(g,title,x+22,y+43,30,color,0,650);r6Lines(g,lines,x+22,y+93,27,R6.ink,0,38);r6Show(g,t);return g;}
function r6Arrow(p,d,t=0,color=R6.green){const e=path(p,d,{stroke:color,'stroke-width':4,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},{d:0});r6Tw(e,{d:1},t,.8);return e;}
function r6Token(p,x,y,label,color=R6.blue,w=420){const g=G(p,{x,y});g.r6Border=r6Box(g,0,0,w,80,color);g.r6Label=r6Text(g,label,22,51,30,color);return g;}
function r6Question(q){return{id:q.id,prompt:[q.prompt],build:choice(q.options.map(s=>[s]),q.right,q.why,q.wrong)};}
const r6Ask=beat=>done=>quiz(SCREEN,RD6_DATA.questions.filter(q=>q.beat===beat).map(r6Question),done,beat==='final1'?'Chapter practice':'Quick check');
const BEATS=[
['intro','Make every cell accessible',m=>{const p=panel(0);r6Text(p,'UNIT 3  /  DESIGN AND REVIEW  /  CHAPTER 06',90,105,26,R6.blue);r6Lines(p,['Make every cell','accessible'],90,219,76,R6.ink,0,89);r6Text(p,'Reveal the standard. Keep the learning demand.',94,425,34,R6.muted);
 const assumption=r6Card(p,92,510,555,179,'HIDDEN ASSUMPTION',['What does this phrase expect?'],0,R6.amber);r6Card(p,870,510,640,179,'INSPECTABLE EVIDENCE',['An action and its intended quality'],m('explicit'),R6.blue);r6Arrow(p,'M679 599H839M821 586L839 599L821 612',m('explicit'));r6Tw(assumption,{x:-12},m('explicit'),.9);
}],
['assumptions','Open the hidden assumptions',m=>{const p=panel(0);r6Title(p,'01 · Inspect the language','Open the assumptions inside the phrase');
 const phrases=['Cogently','Innovative solutions','Hit the mark'];const groups=phrases.map((s,i)=>r6Token(p,100+i*494,247,s,R6.amber,410));groups.forEach((g,i)=>r6Tw(g,{x:90+i*494,y:218},m('open'),.9));
 const heads=['What logical link?','What kind of change?','What response?'];const lines=[['Connect the recommendation','to the analysis.'],['Explain a justified change','to current practice.'],['Show how it addresses','the diagnosed issue.']];heads.forEach((h,i)=>{r6Card(p,90+i*494,425,410,174,h,lines[i],m('questions')+i*.12,R6.blue);r6Arrow(p,`M${295+i*494} 316V400M${283+i*494} 384L${295+i*494} 400L${307+i*494} 384`,m('questions')+i*.12);});
 r6Lines(p,['Clarify the wording for everyone.','Language background does not establish disciplinary capability.'],92,677,30,R6.ink,m('questions'),45);
}],
['preserve','Keep the intended standard',m=>{const p=panel(0);r6Title(p,'02 · A rewrite must preserve the demand','Check what the revision carries forward');
 r6Text(p,'INTENDED REQUIREMENTS IN THIS ADAPTED TASK',90,206,23,R6.muted);
 const logic=r6Token(p,90,244,'Logical fit',R6.blue),evidence=r6Token(p,581,244,'Case evidence',R6.blue),innovation=r6Token(p,1072,244,'Defined innovation',R6.amber);
 r6Tw(logic,{y:373},m('shorter'),.9);r6Tw(evidence,{y:373},m('shorter'),.9);const incomplete=r6Text(p,'CLEARER, BUT INCOMPLETE',90,352,24,R6.amber,m('shorter'));r6Tw(incomplete,{o:0},m('retain'),.2);r6Text(p,'COMPLETE REVISION · STANDARD PRESERVED',90,352,24,R6.green,m('retain',.3));
 r6Text(p,'Recommendations follow logically from the analysis.',108,515,33,R6.ink,m('shorter'));r6Text(p,'Each is justified with case evidence.',108,569,33,R6.ink,m('shorter'));
 r6Tw(innovation,{y:373},m('retain'),.9);r6Tw(innovation.r6Border,{c_stroke:R6.green},m('retain'),.7);r6Tw(innovation.r6Label,{c_fill:R6.green},m('retain'),.7);r6Lines(p,['Explains how the solution changes current practice','and why that change addresses the issue.'],108,637,33,R6.green,m('retain'),44);r6Text(p,'Innovation here = a justified change to current practice',108,751,26,R6.muted,m('retain'));
}],
['q1','Preserve the requirement',()=>panel(0),{ask:r6Ask('q1')}],
['terms','Define useful technical terms',m=>{const p=panel(0);r6Title(p,'03 · Keep the disciplinary method','Define the term, then specify the evidence');
 const term=r6Card(p,90,225,1410,138,'SENSITIVITY TESTING',['Vary a stated assumption and inspect how the result changes.'],0,R6.blue);r6Tw(term,{y:-12},m('define'),.7);
 r6Card(p,90,424,430,153,'Baseline assumption',['Original result'],m('define'),R6.blue);r6Card(p,90,609,430,132,'Varied assumption',['Result to compare'],m('define'),R6.blue);
 r6Card(p,674,484,380,151,'COMPARE',['How did the result','change?'],m('use'),R6.green);r6Arrow(p,'M540 496L650 541M540 673L650 583',m('use'));
 r6Card(p,1156,484,344,193,'EXPLAIN',['What does this mean','for the','recommendation?'],m('use'),R6.green);r6Arrow(p,'M1074 562H1134M1120 550L1134 562L1120 574',m('use'));
}],
['q2','Keep the term, explain the action',()=>panel(0),{ask:r6Ask('q2')}],
['lab','Revision workbench',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd6-lab-card');c.append(h('p','kicker','Unscored rehearsal · keyboard friendly'),h('p','prompt','What became explicit? What standard remains?'));RD6RevisionLab(c,done);P.keys=null;}}],
['quantity','Separate quantity from quality',m=>{const p=panel(0);r6Title(p,'04 · A local requirement needs a reason','Count the sources. Inspect how they are used.');
 r6Text(p,'SOURCE COUNT',100,219,25,R6.blue);for(let i=0;i<12;i++){const g=G(p,{x:105+(i%4)*120,y:254+Math.floor(i/4)*95});r6Box(g,0,0,63,63,R6.blue);r6Text(g,String(i+1),20,42,27,R6.blue);r6Tw(g,{x:105+(i%6)*81,y:280+Math.floor(i/6)*106},m('count'),1);}
 r6Text(p,'12 peer-reviewed sources',100,550,32,R6.ink,m('count'));r6Lines(p,['A task-specific illustration.','Justify the count for your task.'],100,606,29,R6.muted,m('count'),44);
 r6Card(p,882,241,610,128,'RELEVANT EVIDENCE',['What supports this recommendation?'],m('quality'),R6.blue);r6Card(p,882,427,610,128,'EVALUATION / SYNTHESIS',['What does that evidence establish?'],m('quality'),R6.green);r6Card(p,882,613,610,128,'JUSTIFIED RECOMMENDATION',['How does the evidence inform the action?'],m('quality'),R6.green);
 r6Arrow(p,'M627 369C725 369 727 304 858 304',m('quality'),R6.blue);r6Arrow(p,'M1187 386V408M1174 397L1187 408L1200 397M1187 572V594M1174 583L1187 594L1200 583',m('quality'));r6Text(p,'Count ≠ quality or an automatic grade',100,736,28,R6.amber,m('quality'));
}],
['q3','Use counts with a reason',()=>panel(0),{ask:r6Ask('q3')}],
['standalone','Read one cell on its own',m=>{const p=panel(0);r6Title(p,'05 · Test independence','Can this complete cell stand alone?');
 const neighbour=r6Card(p,90,252,430,162,'NEIGHBOURING CELL',['Credit-level descriptor'],0,R6.muted),link=r6Arrow(p,'M544 333H722M708 321L722 333L708 345',0,R6.amber);
 const dependent=G(p,{x:748,y:252});const border=r6Box(dependent,0,0,744,162,R6.amber),words=G(dependent);r6Text(words,'As Credit, but more insightful.',24,95,34,R6.amber);
 r6Tw(neighbour,{o:0},m('isolate'),.6);r6Tw(link,{o:0},m('isolate'),.6);r6Tw(dependent,{x:428,y:300},m('isolate'),1);
 r6Tw(words,{o:0},m('complete'),.3);r6Tw(dependent,{x:90,y:300},m('complete'),.8);r6Tw(border,{a_width:1410,a_height:349,c_stroke:R6.green},m('complete'),.8);
 const complete=G(p,{x:150,y:0,o:0});r6Lines(complete,['Explains how workload and staffing interact to cause the queue;','supports the explanation with case evidence;','considers a plausible alternative explanation.'],114,389,32,R6.ink,0,89);r6Tw(complete,{x:0,o:1},m('complete',.5),.8);
 r6Text(p,'Illustrative complete cell · grade meaning depends on the task',110,728,29,R6.muted,m('complete',.5));
}],
['wrap','Three clarity checks',m=>{const p=panel(0);r6Title(p,'Keep beside your rubric','Clarity and the standard travel together');r6Card(p,91,254,1420,122,'1 · Explain',['Describe the action. Define the necessary terms.'],m('explain'),R6.blue);r6Card(p,91,419,1420,122,'2 · Preserve',['Keep every intended requirement when revising.'],m('preserve'),R6.green);r6Card(p,91,584,1420,122,'3 · Isolate',['Read each complete cell without its neighbours.'],m('isolate'),R6.blue);r6Arrow(p,'M60 314V645',m('isolate'));}],
['final1','Chapter practice',()=>panel(0),{ask:r6Ask('final1')}],
['apply','Revise your own descriptor',()=>panel(0),{ask:done=>{const c=card(SCREEN,'rd6-workshop-card');c.append(h('p','kicker','Apply it · unscored draft'),h('p','prompt','One complete cell. Clearer wording. The same intended standard.'));RD6Worksheet(c,done);P.keys=null;}}],
['finish','Chapter complete',()=>panel(0),{ask:finishCard}]
].map(([id,title,run,extra])=>({id,title,run,...extra}));
boot();setCaptions(true);
const rd6Live=new MutationObserver(()=>document.querySelectorAll('.fb:not([role])').forEach(e=>{e.setAttribute('role','status');e.setAttribute('aria-live','polite');}));rd6Live.observe(document.getElementById('ui'),{childList:true,subtree:true});
