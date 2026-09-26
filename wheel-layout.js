(function(root){
  function getWheelLayout(count,diameter){
    const safeDiameter=Math.max(280,Number(diameter)||560);
    let thumbSize=64;
    if(count>6) thumbSize=56;
    if(count>10) thumbSize=50;
    if(count>14) thumbSize=44;
    if(count>20) thumbSize=38;
    if(count>26) thumbSize=34;
    const showLabels=count<=6;
    const labelSize=showLabels?8:0;
    const itemWidth=showLabels?Math.max(thumbSize+18,82):thumbSize;
    const itemHeight=showLabels?thumbSize+18:thumbSize;
    const half=safeDiameter/2;
    const safetyInset=Math.max(34,Math.round(safeDiameter*.075));
    const outerHalf=Math.sqrt(itemWidth*itemWidth+itemHeight*itemHeight)/2;
    const radius=Math.max(64,Math.floor(half-outerHalf-safetyInset));
    return {radius,thumbSize,itemWidth,itemHeight,labelSize,showLabels};
  }
  function mergeSavedProducts(defaults,saved){
    if(!Array.isArray(saved)||!saved.length) return JSON.parse(JSON.stringify(defaults));
    const savedById=new Map(saved.filter(Boolean).map(item=>[item.id,item]));
    return defaults.map(item=>{
      const previous=savedById.get(item.id);
      return previous?{...item,enabled:typeof previous.enabled==='boolean'?previous.enabled:item.enabled}:{...item};
    });
  }
  const api={getWheelLayout,mergeSavedProducts};
  if(typeof module!=='undefined'&&module.exports) module.exports=api;
  root.AgrkemonWheel=api;
})(typeof window!=='undefined'?window:globalThis);