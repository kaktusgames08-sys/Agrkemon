const DEFAULT_PRODUCTS = [
  {id:'30c-etb',set:'30th Celebration',type:'Elite Trainer Box',name:'30th Celebration Elite Trainer Box',image:'https://collectiblemadness.com.au/cdn/shop/files/Pokemon-TCG-30th-Celebration-Elite-Trainer-Box_EN_1.jpg?v=1783072905&width=1800',color:'#f2c84b',enabled:true},
  {id:'30c-greninja',set:'30th Celebration',type:'Collection Box',name:'Greninja ex Box',image:'https://gatheringgames.co.uk/cdn/shop/files/pokemon-tcg-30th-celebration-greninja-ex-box-5729065.png?v=1783142172&width=600',color:'#3f7fdb',enabled:true},
  {id:'30c-sylveon',set:'30th Celebration',type:'Collection Box',name:'Sylveon ex Box',image:'https://primary.jwwb.nl/public/h/t/i/temp-zjpebgcobmaxydcmrfwb/pokemon_tcg_30th_celebration_sylveon_ex_box_en-high.jpg',color:'#ef7db4',enabled:true},
  {id:'30c-poster',set:'30th Celebration',type:'Collection Box',name:'Poster Collection',image:'https://collectorcenter.cl/cdn/shop/files/Pokemon_TCG_30th_Celebration_Poster_Collection_EN-copy-scaled.webp?v=1783089837&width=1445',color:'#f0ba35',enabled:true},
  {id:'pbl-etb',set:'Pitch Black',type:'Elite Trainer Box',name:'Pitch Black Elite Trainer Box',image:'https://lootcardshop.com/cdn/shop/files/692947.jpg?v=1777925825&width=1445',color:'#5d6678',enabled:true},
  {id:'pbl-bundle',set:'Pitch Black',type:'Booster Bundle',name:'Pitch Black Booster Bundle',image:'https://www.cardcollector2.com/cdn/shop/files/958314_004_071326.png?v=1784303647',color:'#3b3f58',enabled:true},
  {id:'cri-etb',set:'Chaos Rising',type:'Elite Trainer Box',name:'Chaos Rising Elite Trainer Box',image:'https://tradingcardmarket.com/cdn/shop/files/PokemonMegaEvolutionChaosRisingEliteTrainerBox.jpg?v=1773761854&width=1920',color:'#d64557',enabled:true},
  {id:'cri-bundle',set:'Chaos Rising',type:'Booster Bundle',name:'Chaos Rising Booster Bundle',image:'https://card-binder.com/cdn/shop/files/Pokemon-Chaos-Rising-Booster-Bundle.webp?v=1773346490&width=1500',color:'#49a6e9',enabled:true},
  {id:'por-etb',set:'Perfect Order',type:'Elite Trainer Box',name:'Perfect Order Elite Trainer Box',image:'https://i5.walmartimages.com/seo/Pokemon-TCG-Mega-Evolution-Perfect-Order-Elite-Trainer-Box_16847947-8ec4-42c4-a5e3-e2a3b7dfadc0.32f7f8c19c3a35415de631a43c9a47d1.jpeg',color:'#7cc467',enabled:true},
  {id:'por-bundle',set:'Perfect Order',type:'Booster Bundle',name:'Perfect Order Booster Bundle',image:'https://animalkingdoms.co.nz/cdn/shop/files/Pokemon_TCG_Mega_Evolutions_3_Perfect_Order_Booster_Bundle.jpg?v=1776157217',color:'#53b36d',enabled:true},
  {id:'asc-etb',set:'Ascended Heroes',type:'Elite Trainer Box',name:'Ascended Heroes Elite Trainer Box',image:'https://www.binderly.co.uk/cdn/shop/files/PokemonTCG-MegaEvolution-AscendedHeroes-EliteTrainerBox.png?v=1763716803',color:'#ea9958',enabled:true},
  {id:'asc-bundle',set:'Ascended Heroes',type:'Booster Bundle',name:'Ascended Heroes Booster Bundle',image:'https://vyruztoystore.com.mx/cdn/shop/files/PokemonTCGMegaEvolution_AscendedHeroesBoosterBundle.webp?v=1778483017',color:'#4f82d4',enabled:true},
  {id:'asc-poster',set:'Ascended Heroes',type:'Collection Box',name:'Premium Poster Collection',image:'https://144753178.cdn6.editmysite.com/uploads/1/4/4/7/144753178/UQS6TSPXWFVIQWNYBJUFABHP.jpeg?optimize=medium&width=2400',color:'#9f64cf',enabled:true},

  {id:'30c-booster-pack',set:'30th Celebration',type:'Booster',name:'30th Celebration Booster Pack',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/30th-celebration-booster-pack/30th-celebration-booster-pack-en.png',color:'#f7cd4c',enabled:true},
  {id:'30c-booster-bundle',set:'30th Celebration',type:'Booster Bundle',name:'30th Celebration Booster Bundle',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/30th-celebration-booster-bundle/30th-celebration-booster-bundle-en.png',color:'#d9b13b',enabled:true},
  {id:'30c-mini-tin',set:'30th Celebration',type:'Tin',name:'30th Celebration Mini Tin',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/30th-celebration-mini-tin/30th-celebration-mini-tin-en.png',color:'#eec65b',enabled:true},
  {id:'30c-binder',set:'30th Celebration',type:'Collection Box',name:'Binder Collection',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/30th-celebration-binder-collection/30th-celebration-binder-collection-en.png',color:'#efcf70',enabled:true},
  {id:'30c-tin',set:'30th Celebration',type:'Tin',name:'Anniversary Collector Tin',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/30th-celebration-collector-tin/30th-celebration-collector-tin-en.png',color:'#d7a82d',enabled:true},
  {id:'pbl-pack',set:'Pitch Black',type:'Booster',name:'Pitch Black Booster Pack',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-pitch-black-booster-pack/mega-evolution-pitch-black-booster-pack-en.png',color:'#4b5363',enabled:true},
  {id:'pbl-3pk',set:'Pitch Black',type:'Blister',name:'Pitch Black 3-Pack Blister',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-pitch-black-3pk-blister/mega-evolution-pitch-black-3pk-blister-en.png',color:'#61687b',enabled:true},
  {id:'pbl-checklane',set:'Pitch Black',type:'Blister',name:'Pitch Black Checklane Blister',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-pitch-black-checklane-blister/mega-evolution-pitch-black-checklane-blister-en.png',color:'#777e8f',enabled:true},
  {id:'pbl-tin',set:'Pitch Black',type:'Tin',name:'Pitch Black Collector Tin',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-pitch-black-collector-tin/mega-evolution-pitch-black-collector-tin-en.png',color:'#535862',enabled:true},
  {id:'pbl-premium',set:'Pitch Black',type:'Collection Box',name:'Pitch Black Premium Collection',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-pitch-black-premium-collection/mega-evolution-pitch-black-premium-collection-en.png',color:'#8b91a3',enabled:true},
  {id:'cri-pack',set:'Chaos Rising',type:'Booster',name:'Chaos Rising Booster Pack',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-chaos-rising-booster-pack/mega-evolution-chaos-rising-booster-pack-en.png',color:'#ef6474',enabled:true},
  {id:'cri-3pk',set:'Chaos Rising',type:'Blister',name:'Chaos Rising 3-Pack Blister',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-chaos-rising-3pk-blister/mega-evolution-chaos-rising-3pk-blister-en.png',color:'#de5766',enabled:true},
  {id:'cri-checklane',set:'Chaos Rising',type:'Blister',name:'Chaos Rising Checklane Blister',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-chaos-rising-checklane-blister/mega-evolution-chaos-rising-checklane-blister-en.png',color:'#cf4b5a',enabled:true},
  {id:'cri-mini-tin',set:'Chaos Rising',type:'Tin',name:'Chaos Rising Mini Tin',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-chaos-rising-mini-tin/mega-evolution-chaos-rising-mini-tin-en.png',color:'#c84d78',enabled:true},
  {id:'cri-premium',set:'Chaos Rising',type:'Collection Box',name:'Chaos Rising Premium Collection',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-chaos-rising-premium-collection/mega-evolution-chaos-rising-premium-collection-en.png',color:'#b94478',enabled:true},
  {id:'por-pack',set:'Perfect Order',type:'Booster',name:'Perfect Order Booster Pack',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-perfect-order-booster-pack/mega-evolution-perfect-order-booster-pack-en.png',color:'#87ce69',enabled:true},
  {id:'por-3pk',set:'Perfect Order',type:'Blister',name:'Perfect Order 3-Pack Blister',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-perfect-order-3pk-blister/mega-evolution-perfect-order-3pk-blister-en.png',color:'#68bb4e',enabled:true},
  {id:'por-checklane',set:'Perfect Order',type:'Blister',name:'Perfect Order Checklane Blister',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-perfect-order-checklane-blister/mega-evolution-perfect-order-checklane-blister-en.png',color:'#5cae54',enabled:true},
  {id:'por-tin',set:'Perfect Order',type:'Tin',name:'Perfect Order Collector Tin',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-perfect-order-collector-tin/mega-evolution-perfect-order-collector-tin-en.png',color:'#7ac54c',enabled:true},
  {id:'por-premium',set:'Perfect Order',type:'Collection Box',name:'Perfect Order Premium Collection',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-evolution-perfect-order-premium-collection/mega-evolution-perfect-order-premium-collection-en.png',color:'#6fca72',enabled:true},
  {id:'asc-pack',set:'Ascended Heroes',type:'Booster',name:'Ascended Heroes Booster Pack',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/me2pt5-booster-pack/me2pt5-booster-pack-169-en.png',color:'#f2a15a',enabled:true},
  {id:'asc-3pk',set:'Ascended Heroes',type:'Blister',name:'Ascended Heroes 3-Pack Blister',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/me2pt5-3pk-blister/me2pt5-3pk-blister-169-en.png',color:'#ef8b4f',enabled:true},
  {id:'asc-mini-tin',set:'Ascended Heroes',type:'Tin',name:'Ascended Heroes Mini Tin',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/me2pt5-mini-tin/me2pt5-mini-tin-169-en.png',color:'#e57a46',enabled:true},
  {id:'asc-sticker',set:'Ascended Heroes',type:'Collection Box',name:'Tech Sticker Collection',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/me2pt5-tech-sticker-collection/me2pt5-tech-sticker-collection-169-en.png',color:'#df9154',enabled:true},
  {id:'asc-figure',set:'Ascended Heroes',type:'Collection Box',name:'Figure Collection',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/me2pt5-figure-collection/me2pt5-figure-collection-169-en.png',color:'#d77360',enabled:true},
  {id:'asc-super-premium',set:'Ascended Heroes',type:'Collection Box',name:'Super Premium Collection',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/me2pt5-super-premium-collection/me2pt5-super-premium-collection-169-en.png',color:'#bd6acc',enabled:true},
];

const STORAGE='agrkemon.settings.v2';
const HISTORY='agrkemon.history.v1';
const SETTINGS_UI='agrkemon.settings.ui.v1';
let products = loadProducts();
let draftProducts = clone(products);
let history = JSON.parse(localStorage.getItem(HISTORY) || '[]');
let currentRotation = 0;
let spinning = false;
let activeProducts=[];
let settingsUi = loadSettingsUi();

const $ = s => document.querySelector(s);
const els = {
  wheelRotor:$('#wheelRotor'), wheelFace:$('#wheelFace'), wheelItems:$('#wheelItems'), spinBtn:$('#spinBtn'), status:$('#statusLine'),
  poolCount:$('#poolCount'), activeSetStack:$('#activeSetStack'), history:$('#historyList'),
  featuredImage:$('#featuredImage'), featuredFallback:$('#featuredFallback'), featuredSet:$('#featuredSet'), featuredName:$('#featuredName'), featuredType:$('#featuredType'),
  settings:$('#settingsModal'), setFilters:$('#setFilters'), typeFilters:$('#typeFilters'), productGrid:$('#productGrid'), enabledCount:$('#enabledCount'),
  result:$('#resultOverlay'), resultImage:$('#resultImage'), resultFallback:$('#resultFallback'), resultSet:$('#resultSet'), resultName:$('#resultName'), resultType:$('#resultType'),
  productSearch:$('#productSearch'), focusSetSelect:$('#focusSetSelect'), focusTypeSelect:$('#focusTypeSelect'), productStateSelect:$('#productStateSelect'), productSort:$('#productSort'), quickSelect:$('#quickSelect')
};

function clone(v){return JSON.parse(JSON.stringify(v));}
function loadProducts(){
  try{
    const saved=JSON.parse(localStorage.getItem(STORAGE)||'null');
    if(Array.isArray(saved)&&saved.length) return AgrkemonWheel.mergeSavedProducts(DEFAULT_PRODUCTS,saved);
  }catch{}
  return clone(DEFAULT_PRODUCTS);
}
function saveProducts(){localStorage.setItem(STORAGE,JSON.stringify(products));}
function loadSettingsUi(){
  try{
    const saved=JSON.parse(localStorage.getItem(SETTINGS_UI)||'null');
    if(saved&&typeof saved==='object') return Object.assign({search:'',set:'all',type:'all',state:'all',sort:'set'},saved);
  }catch{}
  return {search:'',set:'all',type:'all',state:'all',sort:'set'};
}
function saveSettingsUi(){localStorage.setItem(SETTINGS_UI,JSON.stringify(settingsUi));}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':'&quot;',"'":"&#039;"}[m]));}
function shortName(name){return name.replace(/Elite Trainer Box/i,'ETB').replace(/Booster Bundle/i,'Bundle').replace(/30th Celebration /i,'').slice(0,20);}
function productFallbackImage(p){
  const bg=(p.color||'#4aa7ff').replace('#','');
  const name=String(p.name||'Pokemon').replace(/[&<>"]/g,'');
  const set=String(p.set||'Pokemon TCG').replace(/[&<>"]/g,'');
  const type=String(p.type||'Product').replace(/[&<>"]/g,'');
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#${bg}"/><stop offset="1" stop-color="#111827"/></linearGradient></defs>
    <rect width="512" height="512" rx="48" fill="url(#g)"/>
    <rect x="54" y="72" width="404" height="300" rx="30" fill="#fff"/>
    <circle cx="256" cy="220" r="82" fill="#111827"/>
    <path d="M174 220a82 82 0 0 1 164 0H174z" fill="#ef4056"/>
    <path d="M174 220a82 82 0 0 0 164 0H174z" fill="#f8fbff"/>
    <rect x="174" y="208" width="164" height="24" rx="12" fill="#111827"/>
    <circle cx="256" cy="220" r="34" fill="#fff" stroke="#111827" stroke-width="14"/>
    <text x="256" y="412" text-anchor="middle" font-family="Arial,sans-serif" font-size="27" font-weight="900" fill="#fff">${name.slice(0,27)}</text>
    <text x="256" y="446" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" font-weight="700" fill="#d7e4ff">${set.slice(0,32)}</text>
    <text x="256" y="474" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#9fb6dd">${type.slice(0,30)}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
}
function imgHtml(p, cls=''){
  const src=p.image||productFallbackImage(p);
  const fallback=productFallbackImage(p);
  return `<img class="${cls}" src="${esc(src)}" alt="${esc(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='${esc(fallback)}';">`;
}
function currentPool(){return products.filter(p=>p.enabled);}

function renderWheel(){
  activeProducts=currentPool();
  els.poolCount.textContent=activeProducts.length;
  if(!activeProducts.length){
    els.wheelFace.style.background='conic-gradient(#263651 0 100%)';
    els.wheelItems.innerHTML=''; els.spinBtn.disabled=true; renderActiveSets(); return;
  }
  els.spinBtn.disabled=false;
  const n=activeProducts.length, slice=360/n;
  const stops=[];
  activeProducts.forEach((p,i)=>{const a=i*slice,b=(i+1)*slice;stops.push(`${p.color} ${a}deg ${b}deg`)});
  els.wheelFace.style.background=`conic-gradient(from -90deg,${stops.join(',')})`;
  els.wheelItems.innerHTML='';
  const diameter=els.wheelRotor.getBoundingClientRect().width||560;
  const layout=AgrkemonWheel.getWheelLayout(n,diameter);
  els.wheelItems.style.setProperty('--wheel-thumb-size',`${layout.thumbSize}px`);
  els.wheelItems.style.setProperty('--wheel-item-width',`${layout.itemWidth}px`);
  els.wheelItems.style.setProperty('--wheel-item-height',`${layout.itemHeight}px`);
  els.wheelItems.style.setProperty('--wheel-label-size',`${layout.labelSize}px`);
  els.wheelItems.classList.toggle('hide-wheel-labels',!layout.showLabels);
  activeProducts.forEach((p,i)=>{
    const center=i*slice+slice/2;
    const node=document.createElement('div'); node.className='wheel-item';
    node.style.transform=`rotate(${center}deg) translate(0,-${layout.radius}px) translate(-50%,-50%) rotate(${-center}deg)`;
    node.innerHTML=`<div class="wheel-thumb">${imgHtml(p)}</div><div class="wheel-item-label" title="${esc(p.name)}">${esc(shortName(p.name))}</div>`;
    els.wheelItems.appendChild(node);
  });
  renderActiveSets();
  setFeatured(activeProducts[0]);
}
function renderActiveSets(){
  const counts={}; activeProducts.forEach(p=>counts[p.set]=(counts[p.set]||0)+1);
  els.activeSetStack.innerHTML=Object.entries(counts).map(([s,c])=>`<div class="set-pill"><span>${esc(s)}</span><b>${c}</b></div>`).join('') || '<div class="history-empty">Nic není aktivní</div>';
}
function setFeatured(p){
  if(!p){els.featuredName.textContent='Vyber produkt v nastavení'; return;}
  els.featuredSet.textContent=p.set; els.featuredName.textContent=p.name; els.featuredType.textContent=p.type;
  els.featuredImage.style.display='block'; els.featuredFallback.style.display='grid';
  els.featuredImage.src=p.image||productFallbackImage(p); els.featuredImage.onload=()=>els.featuredFallback.style.display='none'; els.featuredImage.onerror=()=>{els.featuredImage.onerror=null;els.featuredImage.src=productFallbackImage(p);els.featuredFallback.style.display='none'}
}
function renderHistory(){
  if(!history.length){els.history.innerHTML='<div class="history-empty">Zatím nic</div>';return}
  els.history.innerHTML=history.slice(0,6).map(p=>{const src=p.image||productFallbackImage(p),fallback=productFallbackImage(p);return `<div class="history-item"><img src="${esc(src)}" alt="${esc(p.name)}" onerror="this.onerror=null;this.src='${esc(fallback)}';"><div><strong>${esc(p.name)}</strong><span>${esc(p.set)}</span></div></div>`}).join('');
}
function beep(freq=520,dur=.035,vol=.03){
  try{const C=window.AudioContext||window.webkitAudioContext;window._agrAudio??=new C();const c=window._agrAudio,o=c.createOscillator(),g=c.createGain();o.frequency.value=freq;o.type='square';g.gain.value=vol;o.connect(g);g.connect(c.destination);o.start();g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+dur);o.stop(c.currentTime+dur)}catch{}
}
function spin(){
  if(spinning||!activeProducts.length||els.settings.classList.contains('open'))return;
  spinning=true;els.spinBtn.disabled=true;els.status.classList.add('spinning');els.status.lastChild.textContent=' TOČÍM…';
  const n=activeProducts.length,slice=360/n;
  const idx=Math.floor(Math.random()*n), center=idx*slice+slice/2;
  const normalized=((currentRotation%360)+360)%360;
  const align=((360-center-normalized)%360+360)%360;
  const turns=6+Math.floor(Math.random()*3);
  const offset=(Math.random()-.5)*slice*.45;
  const target=currentRotation+turns*360+align+offset;
  els.wheelRotor.style.transition='transform 5.35s cubic-bezier(.08,.68,.10,1)';
  requestAnimationFrame(()=>els.wheelRotor.style.transform=`rotate(${target}deg)`);
  let t=0;const timer=setInterval(()=>{t++;beep(660-Math.min(330,t*5),.025,.018);if(t>45)clearInterval(timer)},80+t*2);
  setTimeout(()=>{
    currentRotation=target; spinning=false; els.spinBtn.disabled=false;els.status.classList.remove('spinning');els.status.lastChild.textContent=' PŘIPRAVENO';
    const p=activeProducts[idx]; setFeatured(p); showResult(p);
    history.unshift({...p});history=history.slice(0,12);localStorage.setItem(HISTORY,JSON.stringify(history));renderHistory();beep(880,.14,.05);
  },5480);
}
function showResult(p){
  els.resultSet.textContent=p.set;els.resultName.textContent=p.name;els.resultType.textContent=p.type;
  els.resultImage.style.display='block';els.resultFallback.style.display='grid';
  els.resultImage.src=p.image||productFallbackImage(p);els.resultImage.onload=()=>els.resultFallback.style.display='none';els.resultImage.onerror=()=>{els.resultImage.onerror=null;els.resultImage.src=productFallbackImage(p);els.resultFallback.style.display='none'}
  els.result.classList.add('open');els.result.setAttribute('aria-hidden','false');
}
function closeResult(){els.result.classList.remove('open');els.result.setAttribute('aria-hidden','true')}

function openSettings(){if(spinning)return;draftProducts=clone(products);renderSettings();els.settings.classList.add('open');els.settings.setAttribute('aria-hidden','false')}
function closeSettings(){els.settings.classList.remove('open');els.settings.setAttribute('aria-hidden','true')}
function getFilteredDraftProducts(){
  const search=settingsUi.search.trim().toLowerCase();
  let list=draftProducts.map((p,index)=>({...p,_index:index}));
  if(settingsUi.set!=='all') list=list.filter(p=>p.set===settingsUi.set);
  if(settingsUi.type!=='all') list=list.filter(p=>p.type===settingsUi.type);
  if(settingsUi.state==='enabled') list=list.filter(p=>p.enabled);
  if(settingsUi.state==='disabled') list=list.filter(p=>!p.enabled);
  if(search) list=list.filter(p=>(`${p.name} ${p.set} ${p.type}`).toLowerCase().includes(search));
  if(settingsUi.sort==='name') list.sort((a,b)=>a.name.localeCompare(b.name,'cs'));
  else if(settingsUi.sort==='type') list.sort((a,b)=>(`${a.type} ${a.name}`).localeCompare(`${b.type} ${b.name}`,'cs'));
  else list.sort((a,b)=>(`${a.set} ${a.name}`).localeCompare(`${b.set} ${b.name}`,'cs'));
  return list;
}
function renderSettings(){
  const sets=[...new Set(draftProducts.map(p=>p.set))].sort((a,b)=>a.localeCompare(b,'cs'));
  const types=[...new Set(draftProducts.map(p=>p.type))].sort((a,b)=>a.localeCompare(b,'cs'));
  els.setFilters.innerHTML=sets.map(set=>{const list=draftProducts.filter(p=>p.set===set),active=list.every(p=>p.enabled);return `<label class="filter-chip ${active?'active':''}" data-set="${esc(set)}"><input type="checkbox" ${active?'checked':''}>${esc(set)}</label>`}).join('');
  els.typeFilters.innerHTML=types.map(type=>{const list=draftProducts.filter(p=>p.type===type),active=list.every(p=>p.enabled);return `<label class="filter-chip ${active?'active':''}" data-type="${esc(type)}"><input type="checkbox" ${active?'checked':''}>${esc(type)}</label>`}).join('');

  els.focusSetSelect.innerHTML='<option value="all">Všechny edice</option>'+sets.map(set=>`<option value="${esc(set)}">${esc(set)}</option>`).join('');
  els.focusTypeSelect.innerHTML='<option value="all">Všechny typy</option>'+types.map(type=>`<option value="${esc(type)}">${esc(type)}</option>`).join('');
  els.focusSetSelect.value=sets.includes(settingsUi.set)?settingsUi.set:'all';
  els.focusTypeSelect.value=types.includes(settingsUi.type)?settingsUi.type:'all';
  els.productSearch.value=settingsUi.search;
  els.productStateSelect.value=settingsUi.state;
  els.productSort.value=settingsUi.sort;
  els.quickSelect.value='all';

  const filtered=getFilteredDraftProducts();
  els.productGrid.innerHTML=filtered.map(p=>`<div class="product-tile ${p.enabled?'':'off'}" data-index="${p._index}">${imgHtml(p)}<div><strong>${esc(p.name)}</strong><small>${esc(p.set)} · ${esc(p.type)}</small></div><button class="tile-toggle" type="button" aria-label="Zapnout/vypnout"></button></div>`).join('') || '<div class="history-empty">Nic neodpovídá filtru nebo hledání.</div>';
  els.enabledCount.textContent=`${draftProducts.filter(p=>p.enabled).length}/${draftProducts.length} aktivních`;
  bindSettings();
}
function bindSettings(){
  els.setFilters.querySelectorAll('[data-set]').forEach(ch=>ch.onclick=(e)=>{e.preventDefault();const set=ch.dataset.set;const list=draftProducts.filter(p=>p.set===set);const next=!list.every(p=>p.enabled);draftProducts.forEach(p=>{if(p.set===set)p.enabled=next});renderSettings()});
  els.typeFilters.querySelectorAll('[data-type]').forEach(ch=>ch.onclick=(e)=>{e.preventDefault();const type=ch.dataset.type;const list=draftProducts.filter(p=>p.type===type);const next=!list.every(p=>p.enabled);draftProducts.forEach(p=>{if(p.type===type)p.enabled=next});renderSettings()});
  els.productGrid.querySelectorAll('.product-tile').forEach(tile=>tile.querySelector('.tile-toggle').onclick=()=>{const p=draftProducts[Number(tile.dataset.index)];p.enabled=!p.enabled;renderSettings()});
  els.productSearch.oninput=()=>{settingsUi.search=els.productSearch.value;saveSettingsUi();renderSettings()};
  els.focusSetSelect.onchange=()=>{settingsUi.set=els.focusSetSelect.value;saveSettingsUi();renderSettings()};
  els.focusTypeSelect.onchange=()=>{settingsUi.type=els.focusTypeSelect.value;saveSettingsUi();renderSettings()};
  els.productStateSelect.onchange=()=>{settingsUi.state=els.productStateSelect.value;saveSettingsUi();renderSettings()};
  els.productSort.onchange=()=>{settingsUi.sort=els.productSort.value;saveSettingsUi();renderSettings()};
  els.quickSelect.onchange=()=>{
    const mode=els.quickSelect.value;
    if(mode==='enable-visible') getFilteredDraftProducts().forEach(p=>{draftProducts[p._index].enabled=true});
    else if(mode==='disable-visible') getFilteredDraftProducts().forEach(p=>{draftProducts[p._index].enabled=false});
    else if(mode==='only-visible'){const visible=new Set(getFilteredDraftProducts().map(p=>p._index));draftProducts.forEach((p,idx)=>p.enabled=visible.has(idx))}
    els.quickSelect.value='all';
    renderSettings();
  };
}
function addCustom(){
  const name=$('#customName').value.trim();if(!name)return;
  draftProducts.push({id:'custom-'+Date.now(),name,set:$('#customSet').value.trim()||'Vlastní',type:$('#customType').value,image:$('#customImage').value.trim(),color:['#4ea5ff','#f05c77','#53d6bd','#a879ff','#f4c745'][draftProducts.length%5],enabled:true,custom:true});
  $('#customName').value='';$('#customSet').value='';$('#customImage').value='';renderSettings();
}

$('#settingsBtn').onclick=openSettings;$('#quickSettingsBtn').onclick=openSettings;$('#settingsClose').onclick=closeSettings;$('#settingsBackdrop').onclick=closeSettings;
$('#applyBtn').onclick=()=>{if(!draftProducts.some(p=>p.enabled)){alert('Zapni aspoň jeden produkt.');return}products=clone(draftProducts);saveProducts();renderWheel();closeSettings()};
$('#resetBtn').onclick=()=>{draftProducts=clone(DEFAULT_PRODUCTS);settingsUi={search:'',set:'all',type:'all',state:'all',sort:'set'};saveSettingsUi();renderSettings()};
$('#enableAllSets').onclick=()=>{draftProducts.forEach(p=>p.enabled=true);renderSettings()};$('#enableAllTypes').onclick=()=>{draftProducts.forEach(p=>p.enabled=true);renderSettings()};
$('#addCustomBtn').onclick=addCustom;els.spinBtn.onclick=spin;$('#resultClose').onclick=closeResult;$('#resultAgain').onclick=()=>{closeResult();setTimeout(spin,120)};
$('#fullscreenBtn').onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{}};
document.addEventListener('keydown',e=>{if(e.repeat)return;if(e.code==='Space'&&!els.settings.classList.contains('open')&&!els.result.classList.contains('open')){e.preventDefault();spin()}if(e.key==='Escape'){closeSettings();closeResult()}});

let resizeRaf=0;
window.addEventListener('resize',()=>{cancelAnimationFrame(resizeRaf);resizeRaf=requestAnimationFrame(()=>renderWheel())});
renderWheel();renderHistory();
