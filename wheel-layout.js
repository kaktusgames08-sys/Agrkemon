(function (root) {
  function getWheelLayout(count, diameter) {
    const safeDiameter = Math.max(280, Number(diameter) || 560);
    let thumbSize = 62;
    let labelSize = 8;
    let showLabels = count <= 8;

    if (count > 8) thumbSize = 54;
    if (count > 12) thumbSize = 48;
    if (count > 18) thumbSize = 40;
    if (count > 26) thumbSize = 34;
    if (count > 34) thumbSize = 30;

    const itemWidth = showLabels ? Math.max(thumbSize + 18, 76) : thumbSize;
    const itemHeight = showLabels ? thumbSize + 18 : thumbSize;
    if (!showLabels) labelSize = 0;

    const half = safeDiameter / 2;
    const safetyInset = Math.max(14, Math.round(safeDiameter * 0.03));
    const outerHalf = Math.sqrt(itemWidth * itemWidth + itemHeight * itemHeight) / 2;
    const radius = Math.max(72, Math.floor(half - outerHalf - safetyInset));

    return { radius, thumbSize, itemWidth, itemHeight, labelSize, showLabels };
  }

  function mergeSavedProducts(defaults, saved) {
    if (!Array.isArray(saved) || !saved.length) return JSON.parse(JSON.stringify(defaults));

    const savedById = new Map(saved.filter(Boolean).map(item => [item.id, item]));
    const merged = defaults.map(item => {
      const previous = savedById.get(item.id);
      if (!previous) return JSON.parse(JSON.stringify(item));
      return {
        ...item,
        enabled: typeof previous.enabled === 'boolean' ? previous.enabled : item.enabled
      };
    });

    saved
      .filter(item => item && item.custom && !defaults.some(def => def.id === item.id))
      .forEach(item => merged.push(JSON.parse(JSON.stringify(item))));

    return merged;
  }

  const api = { getWheelLayout, mergeSavedProducts };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.AgrkemonWheel = api;
})(typeof window !== 'undefined' ? window : globalThis);
