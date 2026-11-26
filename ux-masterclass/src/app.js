(function(){
'use strict';
const SLIDES=/*__SLIDES__*/[];
const FILES=/*__FILES__*/[];
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const pad=n=>String(n).padStart(2,'0');
const root=document.documentElement;
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE=matchMedia('(hover: hover) and (pointer: fine)').matches;
const HAS=typeof gsap!=='undefined'&&typeof ScrollTrigger!=='undefined';
const ANIM=HAS&&!RM;
let lenis=null;
let revealNew=()=>{},animateNumber=(el,to,d,fmt)=>{el.dataset.v=to;el.textContent=fmt?fmt(to):Math.round(to)};

/* ================= DATA (from the SVCB3003 deck) ================= */
const OUTCOMES=[
 ['Explain UX and UI','Understand the difference and why both matter.','Unit 1'],
 ['Apply UX laws','Use psychology and accessibility in practical decisions.','Units 1 and 2'],
 ['Plan the work','Use design thinking and design sprints.','Unit 2'],
 ['Research users','Gather evidence and create personas.','Unit 3'],
 ['Design the interface','Apply hierarchy, Gestalt, type and colour.','Unit 4'],
 ['Make prototypes','Build and test mobile and web wireframes.','Units 4 and 5'],
];
const GROUPS=[
 {id:'u0',tag:'Start here',name:'Welcome',desc:'Before the units',line:'Why design matters, what you will learn, and how the five units fit together.',from:1,to:4},
 {id:'u1',unit:1,name:'Understand',desc:'Introduction to UX/UI design',line:'What UX and UI are, why they matter, and the planes and laws that explain good experiences.',from:5,to:12,a:13,
  steps:[['Choose an app','Pick one you can use freely and screenshot.'],['List its features','What can someone do on each screen?'],['Describe the users','Who is it for? What are their goals and contexts?'],['Infer the intent','Which problem does each design choice solve?'],['Evaluate','Support strengths and weaknesses with evidence.']]},
 {id:'u2',unit:2,name:'Plan',desc:'A strategy plan',line:'Design for everyone with accessibility, design thinking, sprints and competitive analysis.',from:14,to:21,a:22,
  steps:[['Identify problems','Document usability problems and unmet needs.'],['Select competitors','Include direct competitors and indirect alternatives.'],['Compare tasks','Test the same tasks across all products.'],['Identify opportunities','Show where every product fails or one excels.'],['Propose solutions','Explain what user problem each idea solves.']]},
 {id:'u3',unit:3,name:'Research',desc:'Applied design fundamentals and personas',line:'Understand people with storyboards, journeys, flows, research methods, empathy and personas.',from:23,to:30,a:31,
  steps:[['Make a plan','Decide what you need to learn.'],['Recruit respondents','Find people relevant to the experience.'],['Write the protocol','Prepare questions and task scenarios.'],['Record answers','Document what people actually say and do.'],['Segment users','Define high, moderate and low engagement.'],['Build a persona','Base it on the findings.']]},
 {id:'u4',unit:4,name:'Design',desc:'Emphasis in UX design, flows and wireframes',line:'Make it clear with hierarchy, unity, type, colour, Gestalt, evaluation, stories and structure.',from:32,to:39,a:40,
  steps:[['Choose a method','Card sort, user flow, journey or route map.'],['Draw the path','Show the main task and key decisions.'],['Design low-fi','Explore layout and priority in greys.'],['Design high-fi','Add type, colour, imagery and real content.'],['Walk the flow','Check that every screen supports the path.']]},
 {id:'u5',unit:5,name:'Test',desc:'Prototype, test and revise',line:'Prove it works with hypotheses, wireframes, prototypes, usability tests and iteration.',from:41,to:48,a:49,
  steps:[['Wireframe','Create low- and high-fidelity mobile and web wireframes.'],['Prototype','Link screens, transitions and key interaction states.'],['Test with users','Recruit, assign tasks, observe and measure.'],['Document findings','Record tasks, measures, observations and issues.'],['Revise','Show which finding led to each change.']]},
 {id:'u6',tag:'Wrap up',name:'Conclusion',desc:'From idea to experience',line:'The whole process in one loop, from research to a working prototype.',from:50,to:50},
];
const byN=n=>SLIDES[n-1];
const twoTone=s=>`${esc(s.t1)}${s.t2?` <em>${esc(s.t2)}</em>`:''}`;

/* ================= RENDER ================= */
$('#outcomeCards').innerHTML=OUTCOMES.slice(0,5).map((o,i)=>`<article class="card spot out" data-rv><div style="display:flex;justify-content:space-between;align-items:center;gap:12px"><span class="pill">${esc(o[0])}</span><span class="n">${pad(i+1)}</span></div><div><p class="ct" style="margin:0;color:inherit">${esc(o[1])}</p><p>${esc(o[2])}</p></div></article>`).join('')+
 `<article class="card spot capstone" data-rv><div style="display:grid;gap:16px"><div style="display:flex;gap:14px;align-items:center"><span class="pill">${esc(OUTCOMES[5][0])}</span><span class="n">06 · capstone</span></div><p class="ct" style="margin:0;font:400 clamp(28px,3vw,44px)/1.02 var(--display);color:#fff">${esc(OUTCOMES[5][1])}</p><p style="margin:0">${esc(OUTCOMES[5][2])}. Practised in the final assignment.</p></div><button class="btn" type="button" data-open="49" data-mag><span>See the capstone</span></button></article>`;

$('#hsTrack').innerHTML=GROUPS.filter(g=>g.unit).map(g=>`<button class="pan" type="button" data-jump="${g.id}" data-cursor="Open" data-rv><div class="pan-t"><span class="pan-big" aria-hidden="true">0${g.unit}</span><div><h3>${esc(g.name)}<br><em>${esc(g.desc)}</em></h3><p>${esc(g.line)}</p><span class="more">${g.to-g.from+1} topics and an assignment <span aria-hidden="true">→</span></span></div></div><div class="pan-i" data-clip><img loading="lazy" decoding="async" width="1280" height="720" alt="" src="slides/${pad(g.from)}.jpg"></div></button>`).join('');

$('#units').innerHTML=GROUPS.map((g,gi)=>{
  const rows=[];for(let n=g.from;n<=g.to;n++){const s=byN(n);rows.push(`<button class="row" type="button" data-open="${n}" data-prev="${n}" data-cursor="View" data-rv><span class="rn">${pad(n)}</span><span><b>${esc(s.tag)}</b><span class="ri">${esc(s.idea)}</span></span><span class="ra" aria-hidden="true">↗</span></button>`)}
  let a='';
  if(g.a){const s=byN(g.a);a=`<div class="assign" data-rv><div><p class="eyebrow">Unit ${g.unit} / Assignment</p><h3>${twoTone(s)}</h3><p>${esc(s.idea)}</p><button class="btn btn-sm" type="button" data-open="${g.a}" data-mag><span>View the slide and notes</span></button></div><ol class="steps" data-stagger>${g.steps.map(x=>`<li><span><b>${esc(x[0])}</b><small>${esc(x[1])}</small></span></li>`).join('')}</ol></div>`}
  const count=g.to-g.from+1,light=gi%2===0;
  return `<section class="sec unit${light?' light':''}" id="${g.id}"><div class="wrap"><div class="u-side"><p class="eyebrow" data-rv>${g.unit?`Unit ${g.unit} of 5`:g.tag}</p><h2 class="h2" data-split>${esc(g.name)}</h2><p class="u-desc" data-rv>${esc(g.desc)}</p><p class="lede" data-rv>${esc(g.line)}</p><p class="meta" data-rv><span>${count} ${count===1?'topic':'topics'}</span><span>${g.to>g.from?'Slides':'Slide'} ${g.from}${g.to>g.from?'–'+g.to:''}</span>${g.a?'<span>1 assignment</span>':''}</p></div><div><div class="rows">${rows.join('')}</div>${a}</div></div></section>`}).join('');

/* gallery */
const FILTERS=[['all','All 50',1,50],['u0','Welcome',1,4],['u1','Understand',5,13],['u2','Plan',14,22],['u3','Research',23,31],['u4','Design',32,40],['u5','Test',41,49],['u6','Conclusion',50,50]];
let filter='all';
$('#galBar').innerHTML=FILTERS.map(x=>`<button class="chip" type="button" data-f="${x[0]}" aria-pressed="${x[0]===filter}">${x[1]}</button>`).join('');
function renderGallery(){
  const f=FILTERS.find(x=>x[0]===filter);
  $$('#galBar .chip').forEach(c=>c.setAttribute('aria-pressed',String(c.dataset.f===filter)));
  $('#grid').innerHTML=SLIDES.filter(s=>s.n>=f[2]&&s.n<=f[3]).map(s=>`<button class="thumb" type="button" data-open="${s.n}" data-cursor="View" data-rv><span class="im" data-clip><img loading="lazy" decoding="async" width="480" height="270" src="slides/${pad(s.n)}-t.jpg" alt="Slide ${s.n}: ${esc(s.title)}"></span><span class="tt2"><i>${pad(s.n)}</i><span>${esc(s.title)}</span></span></button>`).join('');
  revealNew($('#grid'));
}
renderGallery();
$('#galBar').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(!b)return;filter=b.dataset.f;renderGallery();if(window.ScrollTrigger)ScrollTrigger.refresh()});

/* ================= SCROLL HELPERS ================= */
function jump(id){
  const el=document.getElementById(id);if(!el)return;
  if(id==='top'){lenis?lenis.scrollTo(0,{duration:1.6}):scrollTo({top:0,behavior:RM?'auto':'smooth'});return}
  if(lenis)lenis.scrollTo(el,{offset:-8,duration:1.6,easing:t=>1-Math.pow(1-t,4)});
  else scrollTo({top:el.getBoundingClientRect().top+scrollY-8,behavior:RM?'auto':'smooth'});
}
document.addEventListener('click',e=>{const j=e.target.closest('[data-jump]');if(j){e.preventDefault();closeMenu();jump(j.dataset.jump)}});

/* ================= MENU ================= */
const menu=$('#menu'),menuBtn=$('#menuBtn');
function openMenu(){menu.classList.add('on');menuBtn.setAttribute('aria-expanded','true');menuBtn.textContent='Close';$$('a',menu).forEach(a=>a.tabIndex=0);lenis&&lenis.stop()}
function closeMenu(){if(!menu.classList.contains('on'))return;menu.classList.remove('on');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='Menu';$$('a',menu).forEach(a=>a.tabIndex=-1);lenis&&lenis.start()}
menuBtn.addEventListener('click',()=>menu.classList.contains('on')?closeMenu():openMenu());
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

/* ================= VIEWER ================= */
const vw=$('#vw'),vp=$('#vp'),vImg=$('#vImg');let cur=1,lastFocus=null,vTok=0;
function show(n,first){
  cur=Math.max(1,Math.min(50,n));const s=byN(cur);
  const src=`slides/${pad(cur)}.jpg`,tok=++vTok;
  if(first){vImg.src=src}else{vImg.classList.add('sw-out');const t=new Image();const done=()=>{if(tok!==vTok)return;vImg.src=src;vImg.classList.remove('sw-out')};t.onload=done;t.onerror=done;t.src=src}
  vImg.alt=`Slide ${cur}: ${s.title}`;
  $('#vCount').textContent=`Slide ${pad(cur)} / 50`;$('#vEye').textContent=s.tag;
  $('#vTitle').innerHTML=twoTone(s);$('#vIdea').textContent=s.idea;
  $('#vNotesBody').innerHTML=s.notes.split(/\n\n+/).map(p=>`<p>${esc(p)}</p>`).join('');
  $('#vPrev').disabled=cur===1;$('#vNext').disabled=cur===50;
  [cur-1,cur+1].forEach(k=>{if(k>=1&&k<=50){const i=new Image();i.src=`slides/${pad(k)}.jpg`}});
}
function openV(n,trigger){lastFocus=trigger||document.activeElement;show(n,true);vw.classList.add('on');vw.setAttribute('aria-hidden','false');lenis?lenis.stop():document.body.style.overflow='hidden';vp.scrollTop=0;hidePrev();setTimeout(()=>$('#vClose').focus({preventScroll:true}),40)}
function closeV(){vw.classList.remove('on');vw.setAttribute('aria-hidden','true');lenis?lenis.start():document.body.style.overflow='';if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true})}
document.addEventListener('click',e=>{const o=e.target.closest('[data-open]');if(o)openV(+o.dataset.open,o)});
$('#vClose').addEventListener('click',closeV);
vw.addEventListener('click',e=>{if(e.target===vw)closeV()});
$('#vPrev').addEventListener('click',()=>show(cur-1));$('#vNext').addEventListener('click',()=>show(cur+1));
document.addEventListener('keydown',e=>{
  if(!vw.classList.contains('on'))return;
  if(e.key==='Escape'){closeV();return}
  if(e.key==='ArrowLeft'){show(cur-1);e.preventDefault()}
  if(e.key==='ArrowRight'){show(cur+1);e.preventDefault()}
  if(e.key==='Tab'){const f=$$('button:not([disabled]),summary,a[href]',vp);if(!f.length)return;const a=f[0],z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){z.focus();e.preventDefault()}else if(!e.shiftKey&&document.activeElement===z){a.focus();e.preventDefault()}else if(!vp.contains(document.activeElement)){a.focus();e.preventDefault()}}
});
(()=>{let x0=null;const el=$('.vimg');el.addEventListener('pointerdown',e=>{x0=e.clientX});el.addEventListener('pointerup',e=>{if(x0===null)return;const d=e.clientX-x0;x0=null;if(Math.abs(d)>50)show(cur+(d<0?1:-1))});el.addEventListener('pointercancel',()=>{x0=null})})();

/* ================= HOVER PREVIEW + CURSOR ================= */
const prevBox=$('#prevBox'),prevImg=$('#prevImg');let prevOn=false,prevS=.8;
function showPrev(n){if(!FINE||RM)return;prevImg.src=`slides/${pad(n)}-t.jpg`;prevOn=true;prevBox.style.opacity=1}
function hidePrev(){prevOn=false;prevBox.style.opacity=0}
if(FINE&&!RM){
  const dot=$('#curDot'),ring=$('#curRing'),label=$('#curLabel');
  let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
  addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;mx=e.clientX;my=e.clientY;root.classList.add('has-cursor')},{passive:true});
  (function loop(){
    rx+=(mx-rx)*.17;ry+=(my-ry)*.17;prevS+=((prevOn?1:.8)-prevS)*.18;
    dot.style.transform=`translate3d(${mx}px,${my}px,0)`;
    ring.style.transform=`translate3d(${rx}px,${ry}px,0)`;
    const px=Math.min(rx+28,innerWidth-320),py=Math.max(12,Math.min(ry-100,innerHeight-190));
    prevBox.style.transform=`translate3d(${px}px,${py}px,0) scale(${prevS})`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener('pointerover',e=>{
    const t=e.target.closest('[data-cursor],a,button,summary,[data-open],label');
    const lab=t&&t.dataset.cursor;
    ring.classList.toggle('hov',!!t&&!lab);ring.classList.toggle('big',!!lab);label.textContent=lab||'';
    const p=e.target.closest('[data-prev]');if(p)showPrev(+p.dataset.prev);else hidePrev();
  });
  document.addEventListener('pointerleave',()=>{root.classList.remove('has-cursor')});
  document.addEventListener('pointerenter',()=>{});
}
/* spotlight cards */
if(FINE){document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.spot');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true})}

/* ================= GATHER PHONE ================= */
const ICON_IMG='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/></svg>';
const CHEV='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
function qrSvg(){let r=[];const N=13;let s=7;const rnd=()=>(s=(s*9301+49297)%233280)/233280;
  const fin=(x,y)=>{for(let i=0;i<7;i++)for(let j=0;j<7;j++){const edge=i===0||j===0||i===6||j===6,core=i>=2&&i<=4&&j>=2&&j<=4;if(edge||core)r.push([x+i,y+j])}};
  fin(0,0);fin(N-7,0);fin(0,N-7);
  for(let i=0;i<N;i++)for(let j=0;j<N;j++){const inF=(i<8&&j<8)||(i>=N-8&&j<8)||(i<8&&j>=N-8);if(!inF&&rnd()>.5)r.push([i,j])}
  return `<svg viewBox="0 0 ${N} ${N}" width="100%" height="100%" role="img" aria-label="Ticket QR code, illustration" shape-rendering="crispEdges">${r.map(c=>`<rect x="${c[0]}" y="${c[1]}" width="1" height="1" fill="#101114"/>`).join('')}</svg>`}
const EVENTS=[['Design Week Keynote','Thu 14 Nov · 10:00 · Hall B','Free'],['Open Studio Night','Fri 15 Nov · 18:00 · Studio 2','Free'],['Film Society Screening','Sat 16 Nov · 19:30 · Cinema','Free']];
const SCR=['home','detail','register','success'];
const CAPS={home:['Usefulness','Students can find relevant events.'],detail:['Clarity','One clear action per screen.'],register:['Usability','Register in two steps.'],success:['Satisfaction','An instant QR ticket.']};
const NAMES={home:'Events',detail:'Event details',register:'Register',success:'Ticket'};
$('#screens').innerHTML=`
<section class="ps" data-s="home"><div class="ps-top"><b>Gather</b><span class="ps-av" aria-hidden="true">AR</span></div><div class="ps-search" aria-hidden="true">Search events</div><h4>This week</h4>
 ${EVENTS.map(e=>`<button class="pc" type="button" data-go="detail"><span class="pc-img">${ICON_IMG}</span><span><b>${e[0]}</b><small>${e[1]}</small></span><em>${e[2]}</em></button>`).join('')}</section>
<section class="ps" data-s="detail"><button class="back" type="button" data-go="home">${CHEV}Events</button><div class="ph-hero" aria-hidden="true">${ICON_IMG}</div><h3>Design Week Keynote</h3><p class="ph-meta">Thu 14 Nov · 10:00 to 11:30<br>Hall B, Arts Building. Open to all students.</p><div class="ph-rows"><div>Spots left<b>Plenty</b></div><div>Cost<b>Free</b></div></div><button class="pbtn" type="button" data-go="register">Register for this event</button></section>
<section class="ps" data-s="register"><button class="back" type="button" data-go="detail">${CHEV}Details</button><h3>Your details</h3>
 <form id="regForm" novalidate style="display:flex;flex-direction:column;gap:12px;flex:1"><div class="pf"><label for="rName">Full name</label><input id="rName" value="Aisha Rahman" autocomplete="off"></div>
 <div class="pf"><label for="rMail">University email</label><input id="rMail" value="aisha@student.edu" autocomplete="off" inputmode="email" aria-describedby="rErr"><p class="perr" id="rErr" role="alert"></p></div>
 <button class="pbtn" type="submit">Confirm registration</button></form></section>
<section class="ps ps-center" data-s="success"><div class="ok-badge"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg></div><h3>You are registered</h3><p class="ph-meta">Design Week Keynote<br>Thu 14 Nov · Hall B</p><div class="qr">${qrSvg()}</div><button class="pbtn" type="button" data-go="home">Done</button></section>`;
$('#dots').innerHTML=SCR.map((s,i)=>`<button type="button" data-dot="${i}" aria-label="Screen ${i+1} of 4: ${NAMES[s]}"><span></span></button>`).join('');
function setPhone(i){
  $$('.ps').forEach(el=>{const k=SCR.indexOf(el.dataset.s);const pos=k<i?'before':k>i?'after':'on';el.dataset.pos=pos;if(pos==='on'){el.removeAttribute('inert');el.removeAttribute('aria-hidden')}else{el.setAttribute('inert','');el.setAttribute('aria-hidden','true')}});
  $$('#dots button').forEach((b,k)=>b.setAttribute('aria-current',k===i?'true':'false'));
  const c=CAPS[SCR[i]];$('#cap').innerHTML=`<b class="pop">${c[0]}</b><span class="pop" style="animation-delay:.08s">${c[1]}</span>`;
}
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g&&g.closest('.ps'))setPhone(SCR.indexOf(g.dataset.go));
  const d=e.target.closest('[data-dot]');if(d)setPhone(+d.dataset.dot);
});
$('#regForm').addEventListener('submit',e=>{e.preventDefault();const m=$('#rMail'),er=$('#rErr');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.value.trim())){m.setAttribute('aria-invalid','true');er.textContent='! Enter a valid email address.';m.focus();return}
  m.removeAttribute('aria-invalid');er.textContent='';setPhone(3)});
$('#rMail').addEventListener('input',()=>{$('#rMail').removeAttribute('aria-invalid');$('#rErr').textContent=''});
setPhone(0);

/* ================= LABS ================= */
const lum=h=>{const c=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4));return .2126*c[0]+.7152*c[1]+.0722*c[2]};
const ratio=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const validHex=h=>/^#[0-9a-fA-F]{6}$/.test(h);
const PRE=[['Deck grey on white','#CDCDCD','#FFFFFF'],['Site grey on white','#6E6E6E','#FFFFFF'],['Ink on tile grey','#080808','#D7D7D7'],['White on ink','#FFFFFF','#080808'],['White on Gather blue','#FFFFFF','#2B4BDB']];
let fg='#CDCDCD',bg='#FFFFFF';
$('#presets').innerHTML=PRE.map((p,i)=>`<button class="chip" type="button" data-pre="${i}" aria-pressed="false">${p[0]}</button>`).join('');
function updC(skipHex){
  const r=ratio(fg,bg);$('#sample').style.background=bg;$('#sample').style.color=fg;
  if(!skipHex){$('#fgHex').value=fg.toUpperCase();$('#bgHex').value=bg.toUpperCase()}
  $('#fgPick').value=fg.toLowerCase();$('#bgPick').value=bg.toLowerCase();
  if(!$('#ratioN'))$('#ratio').innerHTML='<span id="ratioN">0.00</span><small> : 1</small>';
  animateNumber($('#ratioN'),r,600,v=>v.toFixed(2));
  const rows=[['Body text, AA (4.5:1)',r>=4.5],['Large text, AA (3:1)',r>=3],['Interface parts, AA (3:1)',r>=3],['Body text, AAA (7:1)',r>=7]];
  const old=$$('#checks li');
  $('#checks').innerHTML=rows.map((x,k)=>{const was=old[k]&&old[k].dataset.ok;const now=String(x[1]);return `<li data-ok="${now}"><span>${x[0]}</span><span class="${x[1]?'pass':'fail'}${was!==undefined&&was!==now?' bump':''}">${x[1]?'✓ Pass':'✗ Fail'}</span></li>`}).join('');
  $$('#presets .chip').forEach((b,i)=>b.setAttribute('aria-pressed',String(PRE[i][1].toUpperCase()===fg.toUpperCase()&&PRE[i][2].toUpperCase()===bg.toUpperCase())));
}
$('#presets').addEventListener('click',e=>{const b=e.target.closest('[data-pre]');if(!b)return;const p=PRE[+b.dataset.pre];fg=p[1];bg=p[2];updC()});
[['fg','fgPick','fgHex'],['bg','bgPick','bgHex']].forEach(([k,p,h])=>{
  $('#'+p).addEventListener('input',e=>{if(k==='fg')fg=e.target.value;else bg=e.target.value;updC()});
  $('#'+h).addEventListener('input',e=>{let v=e.target.value.trim();if(v&&v[0]!=='#')v='#'+v;if(validHex(v)){if(k==='fg')fg=v;else bg=v;updC(true)}});
});
updC();
let tCat='';
function updT(){const v=+$('#tsize').value;const cat=v>=48?'a':v>=44?'b':'c';const bump=tCat&&tCat!==cat;tCat=cat;$('#tsizeV').textContent=v;const b=$('#tBtn');b.style.height=v+'px';b.style.width=Math.max(96,v*2.2)+'px';
  $('#tVerdict').innerHTML=v>=48?'<span class="pass">✓ Meets Apple and Material</span>':v>=44?'<span class="pass">✓ Meets Apple (44 pt)</span>':'<span class="fail">✗ Too small for touch</span>';if(bump){const t=$('#tVerdict span');t.classList.add('bump')}}
$('#tsize').addEventListener('input',updT);updT();
const ITEMS=['Events','Search','Saved','Tickets','Calendar','Friends','Clubs','Map','Alerts','Help','Profile','Settings'];
function updH(){const n=+$('#hn').value;$('#hnV').textContent=n;const md=$('#menuDemo');while(md.children.length>n)md.lastElementChild.remove();while(md.children.length<n){const sp=document.createElement('span');sp.textContent=ITEMS[md.children.length];if(md.dataset.init)sp.className='pop';md.appendChild(sp)}md.dataset.init='1';const v=Math.log2(n+1);$('#hval').textContent=v.toFixed(2);$('#hmeter').style.width=(v/Math.log2(13)*100)+'%'}
$('#hn').addEventListener('input',updH);updH();
const SUS=['I think that I would like to use this system frequently.','I found the system unnecessarily complex.','I thought the system was easy to use.','I think that I would need the support of a technical person to be able to use this system.','I found the various functions in this system were well integrated.','I thought there was too much inconsistency in this system.','I would imagine that most people would learn to use this system very quickly.','I found the system very cumbersome to use.','I felt very confident using the system.','I needed to learn a lot of things before I could get going with this system.'];
$('#sus').innerHTML=SUS.map((q,i)=>`<fieldset><legend class="sr">${i+1}. ${esc(q)}</legend><p class="q" aria-hidden="true"><b>${i+1}.</b> ${esc(q)}</p><div class="opts">${[1,2,3,4,5].map(v=>`<label><input type="radio" name="q${i}" value="${v}" aria-label="${v}"><span>${v}</span></label>`).join('')}</div></fieldset>`).join('');
function updS(){let sum=0,n=0;SUS.forEach((_,i)=>{const c=$(`input[name="q${i}"]:checked`);if(c){n++;const v=+c.value;sum+=i%2===0?v-1:5-v}});
  if(n<10){$('#susScore').innerHTML='–<small> / 100</small>';$('#susNote').textContent=`${n} of 10 answered.`}
  else{const sc=sum*2.5;$('#susScore').innerHTML='<span id="susN">0</span><small> / 100</small>';animateNumber($('#susN'),sc,900,v=>Math.abs(v-sc)<.05?(sc%1?sc.toFixed(1):String(sc)):String(Math.round(v)));$('#susNote').textContent=sc>=68?'Above 68, a score often cited as average (Tullis and Albert).':'Below 68, a score often cited as average (Tullis and Albert).'}}
$('#sus').addEventListener('change',updS);
$('#susReset').addEventListener('click',()=>{$$('#sus input').forEach(i=>i.checked=false);updS()});

/* ================= DESIGN SECTION ================= */
const PAL=[['Ink','#080808','Text and dark sections'],['White','#ffffff','Slides and light sections'],['Tile grey','#d7d7d7','Tiles behind content'],['Deck grey','#cdcdcd','Second headline line in the deck'],['Site grey','#6e6e6e','Second headline line on this site'],['Gather blue','#2B4BDB','Only inside the product mockups']];
$('#pal').innerHTML=PAL.map(p=>`<div class="sw2"><i style="background:${p[1]}"></i><div><b>${p[0]}</b>${p[1].toUpperCase()}<br>${p[2]}</div></div>`).join('');
const PAIRS=[['Ink on white','#080808','#ffffff'],['Ink on tile grey','#080808','#d7d7d7'],['Deck grey on white','#cdcdcd','#ffffff'],['Site grey on white','#6e6e6e','#ffffff'],['Grey on ink (dark sections)','#8c8c8c','#080808'],['White on Gather blue','#ffffff','#2B4BDB']];
$('#pairs').innerHTML=PAIRS.map(p=>{const r=ratio(p[1],p[2]);const lab=r>=4.5?'✓ Small text':r>=3?'Large text only':'✗ Fails';return `<li><span class="pv" style="background:${p[2]};color:${p[1]}">Aa</span><span>${p[0]}</span><span class="r">${r.toFixed(2)} : 1 · ${lab}</span></li>`}).join('');

/* ================= DOWNLOADS ================= */
$('#dls').innerHTML=FILES.map((f,i)=>`<a class="dl" href="files/${esc(f.file)}" download="${esc(f.file)}" data-dl="${esc(f.file)}" data-i="${i}"${f.b64?` data-b64="${esc(f.b64)}"`:''} data-cursor="Save" data-rv><span class="ext">${esc(f.ext)}</span><b>${esc(f.label)}</b><span class="d">${esc(f.desc)}</span><span class="sz">${esc(f.size)}<span class="st" id="st${i}" aria-live="polite"></span></span><span class="go" aria-hidden="true">↓</span></a>`).join('');
let DL=null;
(async()=>{try{if(window.claude&&claude.use){DL=await claude.use('downloads');$('#dlNote').textContent=DL?'Each file asks you to confirm before it saves.':'Saving files is not available in this view. Open the page in a browser to download.'}}catch(e){DL=null}})();
document.addEventListener('click',async e=>{
  const a=e.target.closest('a[data-dl]');if(!a||!DL)return;e.preventDefault();
  const st=$('#st'+a.dataset.i);st.textContent='Preparing…';
  try{let b;if(a.dataset.b64){const r=await fetch(a.dataset.b64);if(!r.ok)throw {code:'fetch'};const bin=atob((await r.text()).trim());const u=new Uint8Array(bin.length);for(let k=0;k<bin.length;k++)u[k]=bin.charCodeAt(k);b=new Blob([u])}else{const r=await fetch(a.getAttribute('href'));if(!r.ok)throw {code:'fetch'};b=await r.blob()}
    await DL.save({filename:a.dataset.dl,data:b});st.textContent='Saved'}
  catch(err){const c=err&&err.code;st.textContent=c==='declined'?'Not saved':c==='rate_limited'?'Try again shortly':'Could not save here'}
  setTimeout(()=>{st.textContent=''},4000);
});

try{
/* ================= MOTION =================
   Core reveals use IntersectionObserver + CSS keyframes, so they run with or without GSAP.
   GSAP (when present and motion is allowed) adds the pinned journey, scroll parallax, tilt and magnets.
   Reduced motion keeps every moment as a gentle fade. */
const GS=HAS&&!RM;
const pre=$('#pre'),nav=$('#nav'),prog=$('#progress');
root.classList.add('anim');if(RM)root.classList.add('rm');
const failTimer=setTimeout(()=>{if(!document.body.dataset.ready)fail('failsafe')},9000);
function fail(err){if(err&&err!=='failsafe')console.error(err);root.classList.add('anim-off');if(pre)pre.remove();if(lenis)lenis.start();document.body.style.overflow=''}

function splitWords(el,mask){
  el.setAttribute('aria-label',el.textContent.trim().replace(/\s+/g,' '));let k=0;
  const walk=node=>{[...node.childNodes].forEach(n=>{
    if(n.nodeType===3){const frag=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(p=>{if(!p)return;if(/^\s+$/.test(p)){frag.appendChild(document.createTextNode(' '));return}
      const w=document.createElement('span');w.className='sw'+(mask?' mask':'');w.setAttribute('aria-hidden','true');
      if(mask){const i=document.createElement('span');i.className='si';i.style.setProperty('--i',k++);i.textContent=p;w.appendChild(i)}else w.textContent=p;frag.appendChild(w)});n.replaceWith(frag)}
    else if(n.nodeType===1)walk(n)})};
  walk(el);
}

/* reveal observer */
const RV='[data-rv],[data-split],[data-clip],[data-stagger]';
const io='IntersectionObserver' in window?new IntersectionObserver(entries=>{
  const ins=entries.filter(e=>e.isIntersecting).map(e=>e.target);
  ins.sort((a,b)=>{const A=a.getBoundingClientRect(),B=b.getBoundingClientRect();return (A.top-B.top)||(A.left-B.left)});
  ins.forEach((el,i)=>{el.style.setProperty('--d',Math.min(i*.08,.56).toFixed(2)+'s');el.classList.add('is-in');io.unobserve(el)});
},{rootMargin:'0px 0px -7% 0px',threshold:0}):null;
function watch(scope){
  $$(RV,scope||document).forEach(el=>{
    if(el.classList.contains('is-in'))return;
    if(el.hasAttribute('data-stagger'))[...el.children].forEach((c,i)=>c.style.setProperty('--i',i));
    if(!io||el.getBoundingClientRect().bottom<0){el.style.setProperty('--d','0s');el.classList.add('is-in');return}
    io.observe(el);
  });
}
revealNew=scope=>{if(document.body.dataset.ready)watch(scope)};

/* headings */
if(!RM){$$('[data-split]').forEach(el=>splitWords(el,true));splitWords($('#mani'),false)}
else{$$('[data-split]').forEach(el=>{el.removeAttribute('data-split');el.setAttribute('data-rv','')});$('#mani').removeAttribute('data-scrub');$('#mani').setAttribute('data-rv','')}

/* smooth scroll */
if(window.Lenis&&!RM){
  try{
    lenis=new Lenis({lerp:.095,smoothWheel:true,wheelMultiplier:.95});
    if(GS){lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
    else{const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}
    lenis.stop();
  }catch(e){lenis=null}
}
document.body.style.overflow='hidden';

/* preloader (plain JS) */
function runPre(done){
  if(!pre){done();return}
  let seen=false;try{seen=!!sessionStorage.getItem('uxm');sessionStorage.setItem('uxm','1')}catch(e){}
  const words=['Research','Define','Design','Prototype','Test'],num=$('#preNum'),bar=$('#preBar'),word=$('#preWord');
  const dur=RM?900:(seen?1200:2600),t0=performance.now(),ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;let wi=-1;
  (function tick(now){
    const p=Math.min(1,(now-t0)/dur),v=ease(p)*100;
    num.textContent=Math.round(v);bar.style.transform=`scaleX(${v/100})`;
    const i=Math.min(4,Math.floor(v/20.01));
    if(i!==wi){wi=i;word.textContent=words[i];word.classList.remove('swap');void word.offsetWidth;word.classList.add('swap')}
    if(p<1)requestAnimationFrame(tick);
    else{pre.classList.add('out');setTimeout(done,RM?150:650);setTimeout(()=>pre.remove(),RM?800:1700)}
  })(t0);
}

/* counters */
function countTo(el,to,dur,fmt){const t0=performance.now(),from=parseFloat(el.dataset.v||0)||0;el.dataset.v=to;
  if(RM){el.textContent=fmt?fmt(to):Math.round(to);return}
  (function f(now){const p=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-p,3),v=from+(to-from)*e;el.textContent=fmt?fmt(v):Math.round(v);if(p<1)requestAnimationFrame(f)})(t0)}
animateNumber=countTo;

function intro(){
  document.body.dataset.ready='1';clearTimeout(failTimer);
  document.body.style.overflow='';if(lenis)lenis.start();
  $$('[data-stagger]').forEach(el=>[...el.children].forEach((c,i)=>c.style.setProperty('--i',i)));
  root.classList.add('hero-in');nav.classList.add('is-in');
  $$('[data-hero]').forEach((el,i)=>{el.style.setProperty('--d',(.3+i*.12).toFixed(2)+'s');el.classList.add('is-in')});
  $$('[data-count]').forEach((el,i)=>setTimeout(()=>{el.dataset.v=0;countTo(el,+el.dataset.count,2000)},700+i*120));
  watch();
  if(GS)setTimeout(()=>ScrollTrigger.refresh(),300);
}

/* scroll-driven bits (plain JS): progress bar, glass nav state, manifesto scrub, marquee boost */
const lights=$$('.light');
const mani=$('#mani'),mWords=mani&&mani.hasAttribute('data-scrub')?$$('.sw',mani):[];
let boost=0,lastY=scrollY,ticking=false;
function onScroll(){
  if(ticking)return;ticking=true;
  requestAnimationFrame(()=>{
    ticking=false;const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;
    prog.style.transform=`scaleX(${max>0?Math.min(1,y/max):0})`;
    nav.classList.toggle('solid',y>40);
    const band=(nav.offsetHeight||68)/2;
    nav.classList.toggle('on-light',lights.some(l=>{const r=l.getBoundingClientRect();return r.top<=band&&r.bottom>=band}));
    if(mWords.length){const r=mani.getBoundingClientRect(),a=innerHeight*.85,b=innerHeight*.45;
      const p=Math.max(0,Math.min(1,(a-r.top)/((a-b)+r.height*.6)));const n=mWords.length;
      mWords.forEach((w,k)=>{const o=Math.max(0,Math.min(1,p*n*1.15-k));w.style.opacity=(.16+.84*o).toFixed(3)})}
    boost=Math.max(boost,Math.min(Math.abs(y-lastY)*.12,10));lastY=y;
  });
}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();

/* marquees (plain JS, speed up with scroll) */
const mqs=$$('.marq-in').map((el,k)=>{el.innerHTML+=el.innerHTML;return {el,dir:k===0?-1:1,base:k===0?.7:.5,x:null}});
if(!RM){(function loop(){
  boost*=.94;
  mqs.forEach(m=>{const w=m.el.scrollWidth/2;if(!w)return;if(m.x===null)m.x=m.dir<0?0:-w;
    m.x+=m.dir*(m.base+boost);if(m.dir<0&&m.x<=-w)m.x+=w;if(m.dir>0&&m.x>=0)m.x-=w;
    m.el.style.transform=`translate3d(${m.x.toFixed(2)}px,0,0)`});
  requestAnimationFrame(loop);
})()}

/* journey: pinned sideways scroll with GSAP on wide screens, a grid otherwise */
const jNote=$('#jNote');
function noPin(on){root.classList.toggle('no-pin',on);if(jNote)jNote.textContent=on?'Select a unit to jump to its topics.':'Scroll sideways through the course. Select a unit to jump to its topics.'}
if(GS){
  gsap.registerPlugin(ScrollTrigger);
  const mm=gsap.matchMedia();
  mm.add('(min-width: 900px)',()=>{
    noPin(false);
    const track=$('#hsTrack'),sec=$('#journey'),bar=$('#hsBar');
    const dist=()=>Math.max(0,track.scrollWidth-innerWidth);
    const tw=gsap.to(track,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:sec,start:'top top',end:()=>'+='+dist(),pin:true,scrub:.7,anticipatePin:1,invalidateOnRefresh:true,onUpdate:s=>{bar.style.transform=`scaleX(${.04+.96*s.progress})`}}});
    $$('.pan-i img').forEach(img=>gsap.fromTo(img,{xPercent:-3},{xPercent:3,ease:'none',scrollTrigger:{trigger:img.closest('.pan'),containerAnimation:tw,start:'left 100%',end:'right 0%',scrub:true}}));
    return()=>noPin(true);
  });
  mm.add('(max-width: 899px)',()=>{noPin(false)});
  /* hero parallax only when the phone sits beside the title; never fade text people are still reading */
  mm.add('(min-width: 1061px)',()=>{
    gsap.to('.hero-stage',{yPercent:-8,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  });
  $$('.unit .u-side').forEach(el=>gsap.fromTo(el,{yPercent:0},{yPercent:-4,ease:'none',scrollTrigger:{trigger:el.closest('.unit'),start:'top bottom',end:'bottom top',scrub:true}}));
  if(FINE){
    const pw=$('#phoneWrap'),hero=$('.hero');
    const rY=gsap.quickTo(pw,'rotationY',{duration:.9,ease:'power3'}),rX=gsap.quickTo(pw,'rotationX',{duration:.9,ease:'power3'});
    hero.addEventListener('pointermove',e=>{const px=e.clientX/innerWidth-.5,py=e.clientY/innerHeight-.5;rY(px*20);rX(-py*14)});
    hero.addEventListener('pointerleave',()=>{rY(0);rX(0)});
    $$('[data-mag]').forEach(el=>{
      const xt=gsap.quickTo(el,'x',{duration:.7,ease:'elastic.out(1,.55)'}),yt=gsap.quickTo(el,'y',{duration:.7,ease:'elastic.out(1,.55)'});
      el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();xt((e.clientX-r.left-r.width/2)*.32);yt((e.clientY-r.top-r.height/2)*.4)});
      el.addEventListener('pointerleave',()=>{xt(0);yt(0)});
    });
  }
  addEventListener('load',()=>ScrollTrigger.refresh());
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>ScrollTrigger.refresh());
}else{
  const mq=matchMedia('(min-width: 900px)');noPin(mq.matches);
  if(mq.addEventListener)mq.addEventListener('change',e=>noPin(e.matches));
}

runPre(intro);
}catch(err){console.error(err);document.documentElement.classList.add('anim-off');const p=document.getElementById('pre');if(p)p.remove();document.body.style.overflow=''}
})();
