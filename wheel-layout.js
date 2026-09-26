(function (root) {
  function getWheelLayout(count, diameter) {
    const safeDiameter=Math.max(280,Number(diameter)||560);
    let thumbSize=68,itemWidth=94,labelSize=8,showLabels=true;
    if(count>12){thumbSize=56;itemWidth=78;labelSize=7}
    if(count>20){thumbSize=44;itemWidth=62;labelSize=6}
    if(count>30){thumbSize=34;itemWidth=44;labelSize=0;showLabels=false}
    const half=safeDiameter/2;
    const safetyInset=Math.max(20,Math.round(safeDiameter*.04));
    const radius=Math.max(82,half-thumbSize/2-safetyInset);
    return {radius,thumbSize,itemWidth,labelSize,showLabels};
  }
  function mergeSavedProducts(defaults,saved){
    if(!Array.isArray(saved)||!saved.length) return JSON.parse(JSON.stringify(defaults));
    const savedById=new Map(saved.filter(Boolean).map(item=>[item.id,item]));
    const merged=defaults.map(item=>{
      const previous=savedById.get(item.id);
      if(!previous) return JSON.parse(JSON.stringify(item));
      return {...item,enabled:typeof previous.enabled==='boolean'?previous.enabled:item.enabled};
    });
    saved.filter(item=>item&&item.custom&&!defaults.some(def=>def.id===item.id))
      .forEach(item=>merged.push(JSON.parse(JSON.stringify(item))));
    return merged;
  }
  const api={getWheelLayout,mergeSavedProducts};
  if(typeof module!=='undefined'&&module.exports) module.exports=api;
  root.AgrkemonWheel=api;
})(typeof window!=='undefined'?window:globalThis);
