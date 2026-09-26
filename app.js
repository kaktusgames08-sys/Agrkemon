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
  {id:'por-bundle',set:'Perfect Order',type:'Booster Bundle',name:'Perfect Order Booster Bundle',image:'https://www.card-corner.de/media/image/product/3994/lg/pokemon-perfect-order-booster-bundle.webp',color:'#53b36d',enabled:true},
  {id:'asc-etb',set:'Ascended Heroes',type:'Elite Trainer Box',name:'Ascended Heroes Elite Trainer Box',image:'https://www.binderly.co.uk/cdn/shop/files/PokemonTCG-MegaEvolution-AscendedHeroes-EliteTrainerBox.png?v=1763716803',color:'#ea9958',enabled:true},
  {id:'asc-bundle',set:'Ascended Heroes',type:'Booster Bundle',name:'Ascended Heroes Booster Bundle',image:'https://vyruztoystore.com.mx/cdn/shop/files/PokemonTCGMegaEvolution_AscendedHeroesBoosterBundle.webp?v=1778483017',color:'#4f82d4',enabled:true},
  {id:'asc-poster',set:'Ascended Heroes',type:'Collection Box',name:'Premium Poster Collection',image:'https://144753178.cdn6.editmysite.com/uploads/1/4/4/7/144753178/UQS6TSPXWFVIQWNYBJUFABHP.jpeg?optimize=medium&width=2400',color:'#9f64cf',enabled:true},
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
    if(Array.isArray(saved)&&saved.length) return saved;
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
function imgHtml(p, cls=''){
  if(!p.image) return `<div class="${cls} tile-fallback">TCG</div>`;
  return `<img class="${cls}" src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="tile-fallback" style="display:none">TCG</div>`;
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
  const radius = Math.min(230, 205 + Math.max(0,(n-10))*2);
  activeProducts.forEach((p,i)=>{
    const center=i*slice+slice/2;
    const node=document.createElement('div'); node.className='wheel-item';
    node.style.transform=`rotate(${center}deg) translate(0,-${radius}px) translate(-50%,-50%) rotate(${-center}deg)`;
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
  if(p.image){els.featuredImage.src=p.image; els.featuredImage.onload=()=>els.featuredFallback.style.display='none'; els.featuredImage.onerror=()=>{els.featuredImage.style.display='none';els.featuredFallback.style.display='grid'}} else {els.featuredImage.removeAttribute('src');els.featuredImage.style.display='none'}
}
function renderHistory(){
  if(!history.length){els.history.innerHTML='<div class="history-empty">Zatím nic</div>';return}
  els.history.innerHTML=history.slice(0,6).map(p=>`<div class="history-item">${p.image?`<img src="${esc(p.image)}" alt="" onerror="this.outerHTML='<div class=&quot;history-fallback&quot;>TCG</div>'">`:'<div class="history-fallback">TCG</div>'}<div><strong>${esc(p.name)}</strong><span>${esc(p.set)}</span></div></div>`).join('');
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
  if(p.image){els.resultImage.src=p.image;els.resultImage.onload=()=>els.resultFallback.style.display='none';els.resultImage.onerror=()=>{els.resultImage.style.display='none';els.resultFallback.style.display='grid'}}else{els.resultImage.style.display='none'}
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

renderWheel();renderHistory();
