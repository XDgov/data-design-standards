(function() {
  makeHiDPICanvas = function(elem, fixedHeight) {
      fixedHeight = fixedHeight || null;
      ratio = pixelRatio(elem);
      var can = elem,
          container = can.parentElement,
          containerWidth = container.offsetWidth,
          containerHeight = container.offsetHeight;

      if(fixedHeight != null) {
        can.height = fixedHeight * ratio;
        can.style.height = fixedHeight + "px";
      } else {
        can.height = containerHeight * ratio;
        can.style.height = containerHeight + "px";
      }

      can.width = containerWidth * ratio;
      can.style.width = containerWidth + "px";
      can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
      return can;
  },

  pixelRatio = function(elem) {
    var ctx = elem.getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
  }

})();