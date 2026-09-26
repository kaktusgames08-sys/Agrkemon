const IMG = {
  celebrationEtb: 'https://target.scene7.com/is/image/Target/GUEST_40ed4d44-2adc-4cfe-a27b-0ce8b6e73cba?fmt=pjpeg&hei=600&wid=600',
  celebrationGreninja: 'https://target.scene7.com/is/image/Target/GUEST_5f91a99f-2a33-4c89-8dbf-db1243d413a2?fmt=pjpeg&hei=600&wid=600',
  celebrationSylveon: 'https://target.scene7.com/is/image/Target/GUEST_65085291-1d03-4b66-8c88-729c7ac7b66b?fmt=pjpeg&hei=600&wid=600',
  pitchEtb: 'https://target.scene7.com/is/image/Target/GUEST_a21f87e0-c6a8-48f4-bb66-2e4c626562d6?fmt=pjpeg&hei=600&wid=600',
  pitchBundle: 'https://target.scene7.com/is/image/Target/GUEST_ad499d78-6ba6-4abc-a993-30cc3f5776d3?fmt=pjpeg&hei=600&wid=600',
  chaosEtb: 'https://target.scene7.com/is/image/Target/GUEST_9a0e801e-fad5-4f22-905d-5c167f03ac41?fmt=pjpeg&hei=600&wid=600',
  chaosBundle: 'https://target.scene7.com/is/image/Target/GUEST_de896676-8332-46bd-b36f-d863b43df7ad?fmt=pjpeg&hei=600&wid=600',
  perfectEtb: 'https://skyfoxgames.com/cdn/shop/files/Perfect-Order-Elite-Trainer-Box_6c68a5a1-e802-41f6-998d-d679d8495ba6_800x.jpg?v=1767817675',
  perfectBundle: 'https://target.scene7.com/is/image/Target/GUEST_add75f83-a4e4-44ed-b284-77b0dfb93cee?fmt=pjpeg&hei=600&wid=600',
  ascEtb: 'https://www.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/trading-card-game/series/incrementals/2026/me2pt5-elite-trainer-box/me2pt5-elite-trainer-box-169-fr.png',
  ascBundle: 'https://www.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/trading-card-game/series/incrementals/2026/me2pt5-booster-bundle/me2pt5-booster-bundle-169-fr.png',
  ascPoster: 'https://www.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/trading-card-game/series/incrementals/2026/me2pt5-premium-poster-collection/me2pt5-premium-poster-collection-169-fr.png'
};

const DEFAULT_PRODUCTS = [
  {id:'30c-etb',set:'30th Celebration',type:'Elite Trainer Box',name:'30th Celebration Elite Trainer Box',image:IMG.celebrationEtb,color:'#f2c84b',enabled:true},
  {id:'30c-greninja',set:'30th Celebration',type:'Collection Box',name:'Greninja ex Box',image:IMG.celebrationGreninja,color:'#3f7fdb',enabled:true},
  {id:'30c-sylveon',set:'30th Celebration',type:'Collection Box',name:'Sylveon ex Box',image:IMG.celebrationSylveon,color:'#ef7db4',enabled:true},
  {id:'30c-poster',set:'30th Celebration',type:'Collection Box',name:'Poster Collection',image:IMG.celebrationEtb,color:'#f0ba35',enabled:true},
  {id:'pbl-etb',set:'Pitch Black',type:'Elite Trainer Box',name:'Pitch Black Elite Trainer Box',image:IMG.pitchEtb,color:'#3d315f',enabled:true},
  {id:'pbl-bundle',set:'Pitch Black',type:'Booster Bundle',name:'Pitch Black Booster Bundle',image:IMG.pitchBundle,color:'#6b49a7',enabled:true},
  {id:'cri-etb',set:'Chaos Rising',type:'Elite Trainer Box',name:'Chaos Rising Elite Trainer Box',image:IMG.chaosEtb,color:'#d64557',enabled:true},
  {id:'cri-bundle',set:'Chaos Rising',type:'Booster Bundle',name:'Chaos Rising Booster Bundle',image:IMG.chaosBundle,color:'#49a6e9',enabled:true},
  {id:'por-etb',set:'Perfect Order',type:'Elite Trainer Box',name:'Perfect Order Elite Trainer Box',image:IMG.perfectEtb,color:'#47aeba',enabled:true},
  {id:'por-bundle',set:'Perfect Order',type:'Booster Bundle',name:'Perfect Order Booster Bundle',image:IMG.perfectBundle,color:'#e34d72',enabled:true},
  {id:'asc-etb',set:'Ascended Heroes',type:'Elite Trainer Box',name:'Ascended Heroes Elite Trainer Box',image:IMG.ascEtb,color:'#ea9958',enabled:true},
  {id:'asc-bundle',set:'Ascended Heroes',type:'Booster Bundle',name:'Ascended Heroes Booster Bundle',image:IMG.ascBundle,color:'#4f82d4',enabled:true},
  {id:'asc-poster',set:'Ascended Heroes',type:'Collection Box',name:'Premium Poster Collection',image:IMG.ascPoster,color:'#e25760',enabled:true},
];

const STORAGE='agrkemon.settings.v1';
const HISTORY='agrkemon.history.v1';
let products = loadProducts();
let draftProducts = clone(products);
let history = JSON.parse(localStorage.getItem(HISTORY) || '[]');
let currentRotation = 0;
let spinning = false;
let activeProducts=[];

const $ = s => document.querySelector(s);
const els = {
  wheelRotor:$('#wheelRotor'), wheelFace:$('#wheelFace'), wheelItems:$('#wheelItems'), spinBtn:$('#spinBtn'), status:$('#statusLine'),
  poolCount:$('#poolCount'), activeSetStack:$('#activeSetStack'), history:$('#historyList'),
  featuredImage:$('#featuredImage'), featuredFallback:$('#featuredFallback'), featuredSet:$('#featuredSet'), featuredName:$('#featuredName'), featuredType:$('#featuredType'),
  settings:$('#settingsModal'), setFilters:$('#setFilters'), typeFilters:$('#typeFilters'), productGrid:$('#productGrid'), enabledCount:$('#enabledCount'),
  result:$('#resultOverlay'), resultImage:$('#resultImage'), resultFallback:$('#resultFallback'), resultSet:$('#resultSet'), resultName:$('#resultName'), resultType:$('#resultType')
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
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':'&quot;',"'":"&#039;"}[m]));}
function shortName(name){return name.replace(/Elite Trainer Box/i,'ETB').replace(/Booster Bundle/i,'Bundle').replace(/30th Celebration /i,'').slice(0,20);}
function imgHtml(p, cls=''){
  if(!p.image) return `<div class="${cls} tile-fallback">TCG</div>`;
  return `<img class="${cls}" src="${esc(p.image)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="tile-fallback" style="display:none">TCG</div>`;
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
function renderSettings(){
  const sets=[...new Set(draftProducts.map(p=>p.set))];const types=[...new Set(draftProducts.map(p=>p.type))];
  els.setFilters.innerHTML=sets.map(set=>{const list=draftProducts.filter(p=>p.set===set),active=list.every(p=>p.enabled);return `<label class="filter-chip ${active?'active':''}" data-set="${esc(set)}"><input type="checkbox" ${active?'checked':''}>${esc(set)}</label>`}).join('');
  els.typeFilters.innerHTML=types.map(type=>{const list=draftProducts.filter(p=>p.type===type),active=list.every(p=>p.enabled);return `<label class="filter-chip ${active?'active':''}" data-type="${esc(type)}"><input type="checkbox" ${active?'checked':''}>${esc(type)}</label>`}).join('');
  els.productGrid.innerHTML=draftProducts.map((p,i)=>`<div class="product-tile ${p.enabled?'':'off'}" data-index="${i}">${imgHtml(p)}<div><strong>${esc(p.name)}</strong><small>${esc(p.set)} · ${esc(p.type)}</small></div><button class="tile-toggle" type="button" aria-label="Zapnout/vypnout"></button></div>`).join('');
  els.enabledCount.textContent=`${draftProducts.filter(p=>p.enabled).length} aktivních`;
  bindSettings();
}
function bindSettings(){
  els.setFilters.querySelectorAll('[data-set]').forEach(ch=>ch.onclick=()=>{const set=ch.dataset.set;const list=draftProducts.filter(p=>p.set===set);const next=!list.every(p=>p.enabled);draftProducts.forEach(p=>{if(p.set===set)p.enabled=next});renderSettings()});
  els.typeFilters.querySelectorAll('[data-type]').forEach(ch=>ch.onclick=()=>{const type=ch.dataset.type;const list=draftProducts.filter(p=>p.type===type);const next=!list.every(p=>p.enabled);draftProducts.forEach(p=>{if(p.type===type)p.enabled=next});renderSettings()});
  els.productGrid.querySelectorAll('.product-tile').forEach(tile=>tile.querySelector('.tile-toggle').onclick=()=>{const p=draftProducts[Number(tile.dataset.index)];p.enabled=!p.enabled;renderSettings()});
}
function addCustom(){
  const name=$('#customName').value.trim();if(!name)return;
  draftProducts.push({id:'custom-'+Date.now(),name,set:$('#customSet').value.trim()||'Vlastní',type:$('#customType').value,image:$('#customImage').value.trim(),color:['#4ea5ff','#f05c77','#53d6bd','#a879ff','#f4c745'][draftProducts.length%5],enabled:true,custom:true});
  $('#customName').value='';$('#customSet').value='';$('#customImage').value='';renderSettings();
}

$('#settingsBtn').onclick=openSettings;$('#quickSettingsBtn').onclick=openSettings;$('#settingsClose').onclick=closeSettings;$('#settingsBackdrop').onclick=closeSettings;
$('#applyBtn').onclick=()=>{if(!draftProducts.some(p=>p.enabled)){alert('Zapni aspoň jeden produkt.');return}products=clone(draftProducts);saveProducts();renderWheel();closeSettings()};
$('#resetBtn').onclick=()=>{draftProducts=clone(DEFAULT_PRODUCTS);renderSettings()};
$('#enableAllSets').onclick=()=>{draftProducts.forEach(p=>p.enabled=true);renderSettings()};$('#enableAllTypes').onclick=()=>{draftProducts.forEach(p=>p.enabled=true);renderSettings()};
$('#addCustomBtn').onclick=addCustom;els.spinBtn.onclick=spin;$('#resultClose').onclick=closeResult;$('#resultAgain').onclick=()=>{closeResult();setTimeout(spin,120)};
$('#fullscreenBtn').onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{}};
document.addEventListener('keydown',e=>{if(e.repeat)return;if(e.code==='Space'&&!els.settings.classList.contains('open')&&!els.result.classList.contains('open')){e.preventDefault();spin()}if(e.key==='Escape'){closeSettings();closeResult()}});

renderWheel();renderHistory();
