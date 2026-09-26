const DEFAULT_PRODUCTS = [
  {id:"30c-etb",set:"30th Celebration",type:"Elite Trainer Box",name:"30th Celebration Elite Trainer Box",image:"https://www.miniaturemarket.com/media/79/8e/3a/1784220892/PKU10447.webp?ts=1784221261",color:"#f2c84b",enabled:true},
  {id:"30c-greninja",set:"30th Celebration",type:"Collection Box",name:"Greninja ex Box",image:"https://eternacards.co.uk/cdn/shop/files/pokemon-30th-celebration-ex-box-greninja-7524933_998x998.png?v=1783332072",color:"#3f7fdb",enabled:true},
  {id:"30c-sylveon",set:"30th Celebration",type:"Collection Box",name:"Sylveon ex Box",image:"https://cdn.shopify.com/s/files/1/0865/2816/4189/files/Pokemon_TCG_30th_Celebration_Sylveon_ex_Box_EN_480x480.webp?v=1782908866",color:"#ef7db4",enabled:true},
  {id:"30c-poster",set:"30th Celebration",type:"Collection Box",name:"Poster Collection",image:"https://collectorcenter.cl/cdn/shop/files/Pokemon_TCG_30th_Celebration_Poster_Collection_EN-copy-scaled.webp?v=1783089837&width=1445",color:"#f0ba35",enabled:true},
  {id:"30c-pack",set:"30th Celebration",type:"Booster",name:"30th Celebration Booster Pack",image:"https://feenturm.de/cdn/shop/files/fRfdH_udnQ_2zqY-ij_Gwh4XetgqmJsJDs_MC75RvUtcnfDxeVhhBLq4BSeSA8mSSpDfXZLcyGY3nMtZnBR70YwJDKoqR8FkhFWtILwNsNMOzhltDvUtyxE_Osq52ogDWSO_azj7MaT49Rr7F1evz-saBprZ-VOM0SCC1loA_PxxcoQC_FAj9ZK.jpg?v=1781090887&width=1100",color:"#f7cd4c",enabled:true},
  {id:"30c-bundle",set:"30th Celebration",type:"Booster Bundle",name:"30th Celebration Booster Bundle",image:"https://media.karousell.com/media/photos/products/2026/8/16/pokmon_tcg_30th_celebration_bo_1786894478_22d71906.jpg",color:"#d9b13b",enabled:true},
  {id:"30c-mini-tin",set:"30th Celebration",type:"Tin",name:"30th Celebration Mini Tin",image:"https://card-binder.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Mini_Tin_Day_Pikachu.webp?v=1782911419&width=1500",color:"#eec65b",enabled:true},
  {id:"30c-binder",set:"30th Celebration",type:"Collection Box",name:"30th Celebration Binder Collection",image:"https://bills-archive.nyc3.cdn.digitaloceanspaces.com/30th/Pokemon_TCG_30th_Celebration_Binder_Collection_EN.webp",color:"#efcf70",enabled:true},
  {id:"pbl-etb",set:"Pitch Black",type:"Elite Trainer Box",name:"Pitch Black Elite Trainer Box",image:"https://lootcardshop.com/cdn/shop/files/692947.jpg?v=1777925825&width=1445",color:"#5d6678",enabled:true},
  {id:"pbl-bundle",set:"Pitch Black",type:"Booster Bundle",name:"Pitch Black Booster Bundle",image:"https://www.cardcollector2.com/cdn/shop/files/958314_004_071326.png?v=1784303647",color:"#3b3f58",enabled:true},
  {id:"pbl-pack",set:"Pitch Black",type:"Booster",name:"Pitch Black Booster Pack",image:"https://geekhaven.pt/cdn/shop/files/pitch-black-booster-pack-4128454.webp?v=1780867008&width=3840",color:"#4b5363",enabled:true},
  {id:"pbl-3pk",set:"Pitch Black",type:"Blister",name:"Pitch Black 3-Pack Blister",image:"https://assets.celadoninfo.com/product-images/pitch-black-3-pack-blister-binacle.webp",color:"#61687b",enabled:true},
  {id:"cri-etb",set:"Chaos Rising",type:"Elite Trainer Box",name:"Chaos Rising Elite Trainer Box",image:"https://tradingcardmarket.com/cdn/shop/files/PokemonMegaEvolutionChaosRisingEliteTrainerBox.jpg?v=1773761854&width=1920",color:"#d64557",enabled:true},
  {id:"cri-bundle",set:"Chaos Rising",type:"Booster Bundle",name:"Chaos Rising Booster Bundle",image:"https://card-binder.com/cdn/shop/files/Pokemon-Chaos-Rising-Booster-Bundle.webp?v=1773346490&width=1500",color:"#49a6e9",enabled:true},
  {id:"cri-pack",set:"Chaos Rising",type:"Booster",name:"Chaos Rising Booster Pack",image:"https://static.wixstatic.com/media/995a35_da043dbc3c704633b34dd34338d5bc1c~mv2.jpg/v1/fill/w_1000%2Ch_1000%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/995a35_da043dbc3c704633b34dd34338d5bc1c~mv2.jpg",color:"#ef6474",enabled:true},
  {id:"cri-3pk",set:"Chaos Rising",type:"Blister",name:"Chaos Rising 3-Pack Blister",image:"https://jd-collectibles.nl/cdn/shop/files/Pokemon-TCG-Mega-Evolution-Chaos-Rising-3BB-Charmeleon.webp?v=1780396536&width=533",color:"#de5766",enabled:true},
  {id:"por-etb",set:"Perfect Order",type:"Elite Trainer Box",name:"Perfect Order Elite Trainer Box",image:"https://i5.walmartimages.com/seo/Pokemon-TCG-Mega-Evolution-Perfect-Order-Elite-Trainer-Box_16847947-8ec4-42c4-a5e3-e2a3b7dfadc0.32f7f8c19c3a35415de631a43c9a47d1.jpeg",color:"#7cc467",enabled:true},
  {id:"por-bundle",set:"Perfect Order",type:"Booster Bundle",name:"Perfect Order Booster Bundle",image:"https://images.pristineauction.com/418/4189887/share_1775770895-Pokmon-TCG-Mega-Evolution-Perfect-Order-Booster-Bundle-Box-with-6-Packs-PristineAuction.com.jpg",color:"#53b36d",enabled:true},
  {id:"por-pack",set:"Perfect Order",type:"Booster",name:"Perfect Order Booster Pack",image:"https://assets.target.com.au/transform/9769dbf2-31b1-4dcf-a6e4-9038f12d7efe/72554975-IMG-006?io=transform%3Afit%2Cwidth%3A1400%2Cheight%3A1600&output=webp&quality=90",color:"#87ce69",enabled:true},
  {id:"por-3pk",set:"Perfect Order",type:"Blister",name:"Perfect Order 3-Pack Blister",image:"https://geekhaven.pt/cdn/shop/files/perfect-order-3-pack-blister-chikorita-7773859.webp?v=1777025879&width=3840",color:"#68bb4e",enabled:true},
  {id:"por-checklane",set:"Perfect Order",type:"Blister",name:"Perfect Order Checklane Blister",image:"https://tradingcardmarket.com/cdn/shop/files/NewProductImage_53_ca5e9d50-cb46-44fc-9ff8-3a67f918ea88.jpg?v=1772203489&width=1445",color:"#5cae54",enabled:true},
  {id:"por-premium",set:"Perfect Order",type:"Collection Box",name:"Mega Zygarde ex Premium Collection",image:"https://www.asmodee.co.uk/cdn/shop/files/POK1010359108_1_4c634641-5038-416c-9978-e0dd2bdb1126.jpg?v=1776006858&width=1500",color:"#6fca72",enabled:true},
  {id:"asc-etb",set:"Ascended Heroes",type:"Elite Trainer Box",name:"Ascended Heroes Elite Trainer Box",image:"https://www.binderly.co.uk/cdn/shop/files/PokemonTCG-MegaEvolution-AscendedHeroes-EliteTrainerBox.png?v=1763716803",color:"#ea9958",enabled:true},
  {id:"asc-bundle",set:"Ascended Heroes",type:"Booster Bundle",name:"Ascended Heroes Booster Bundle",image:"https://groovycollectables.com.au/cdn/shop/files/shopify_asset_9_grande.png?v=1764991737",color:"#4f82d4",enabled:true},
  {id:"asc-poster",set:"Ascended Heroes",type:"Collection Box",name:"Premium Poster Collection",image:"https://144753178.cdn6.editmysite.com/uploads/1/4/4/7/144753178/UQS6TSPXWFVIQWNYBJUFABHP.jpeg?optimize=medium&width=2400",color:"#9f64cf",enabled:true},
  {id:"asc-pack",set:"Ascended Heroes",type:"Booster",name:"Ascended Heroes Booster Pack",image:"https://groovycollectables.com.au/cdn/shop/files/shopify_asset_8.png?v=1764991600&width=533",color:"#f2a15a",enabled:true},
  {id:"asc-mini-tin",set:"Ascended Heroes",type:"Tin",name:"Ascended Heroes Mini Tin",image:"https://static.wixstatic.com/media/a8dd77_6dfa7d7555bb4619b204f714ce240b05~mv2.webp/v1/fill/w_1000%2Ch_1000%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/a8dd77_6dfa7d7555bb4619b204f714ce240b05~mv2.webp",color:"#e57a46",enabled:true},
  {id:"asc-3pk",set:"Ascended Heroes",type:"Blister",name:"Ascended Heroes Blister Collection",image:"https://ultrarareemporium.com/cdn/shop/files/POK1010312101_1.jpg?v=1768869934&width=1445",color:"#ef8b4f",enabled:true},
];

const STORAGE='agrkemon.settings.v4';
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
function shortName(name){
  return name
    .replace(/Elite Trainer Box/i,'ETB')
    .replace(/Booster Bundle/i,'Bundle')
    .replace(/Collection Box/i,'Box')
    .replace(/30th Celebration /i,'')
    .replace(/Ascended Heroes /i,'')
    .replace(/Perfect Order /i,'')
    .replace(/Pitch Black /i,'')
    .replace(/Chaos Rising /i,'')
    .slice(0,16);
}
function imgHtml(p, cls=''){
  const fallback=productFallbackImage(p);
  return `<img class="${cls}" src="${esc(p.image)}" alt="${esc(p.name)}" loading="eager" decoding="async" onerror="this.onerror=null;this.src='${esc(fallback)}';">`;
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
  const half=diameter/2;
  activeProducts.forEach((p,i)=>{
    const center=i*slice+slice/2;
    const theta=(center-90)*Math.PI/180;
    const x=half+Math.cos(theta)*layout.radius;
    const y=half+Math.sin(theta)*layout.radius;
    const node=document.createElement('div'); node.className='wheel-item';
    node.style.left=`${x}px`;
    node.style.top=`${y}px`;
    node.style.transform='translate(-50%,-50%)';
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
