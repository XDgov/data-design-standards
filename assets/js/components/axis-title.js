(function() {

  var axisBadTitle = document.getElementById("axis-title-bad-example"),
      axisGoodTitle = document.getElementById("axis-title-good-example");
  canvasHeight = 200;

  renderBadAxisTitle = function() {
    makeHiDPICanvas(axisBadTitle, canvasHeight);
    ctx = axisBadTitle.getContext('2d');
    var pixRatio = pixelRatio(axisBadTitle);

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#666666';
    ctx.fillStyle = "#666666";
    ctx.font = "normal 8pt Roboto";

    var count = 63,
        offset = 0,
        xOffset = 75;

    var tickOffset = axisBadTitle.height / (26 * pixRatio);
    
    for( var i = 0; i < 26; i += 1) {

      if(count < 10) {
        offset = -12;
      } else {
        offset = -16  ;
      }

      ctx.moveTo(xOffset, i * tickOffset + 6);

      if(count % 5 === 0   ) {
        ctx.lineTo(xOffset -10, i * tickOffset + 6);
        ctx.fillText(count + "%", xOffset - 15 + offset, i * tickOffset + 9);
      } else {
        ctx.lineTo(xOffset - 5, i * tickOffset + 6);
      }
      count--;
    }

    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.save();

    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.font = "bold 10pt Roboto";
    ctx.fillText("Voters", canvasHeight / 2 * -1, 30);
    ctx.restore();

    ctx.moveTo(xOffset, 0);
    ctx.lineTo(xOffset, canvasHeight);
    ctx.stroke();
  }

  renderGoodAxisTitle = function() {
    makeHiDPICanvas(axisGoodTitle, canvasHeight);
    ctx = axisGoodTitle.getContext('2d');
    var pixRatio = pixelRatio(axisBadTitle);

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#666666';
    ctx.fillStyle = "#666666";
    ctx.font = "normal 8pt Roboto";

    var count = 63,
        offset = 0,
        xOffset = 75;

    var tickOffset = axisGoodTitle.height / (26 * pixRatio);
    
    for( var i = 0; i < 26; i += 1) {

      if(count < 10) {
        offset = -12;
      } else {
        offset = -16  ;
      }

      ctx.moveTo(xOffset, i * tickOffset + 6);

      if(count % 5 === 0   ) {
        ctx.lineTo(xOffset -10, i * tickOffset + 6);
        ctx.fillText(count, xOffset - 10 + offset, i * tickOffset + 9);
      } else {
        ctx.lineTo(xOffset - 5, i * tickOffset + 6);
      }
      count--;
    }

    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.save();

    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.font = "bold 10pt Roboto";
    ctx.fillText("Percentage of Voters", canvasHeight / 2 * -1, 35);
    ctx.restore();

    ctx.moveTo(xOffset, 0);
    ctx.lineTo(xOffset, canvasHeight);
    ctx.stroke();
  }

  if(axisBadTitle != null) {

    var axisTitleTimeout;

    window.addEventListener('load', function(){
      if(axisBadTitle != null) {
        renderBadAxisTitle();
        renderGoodAxisTitle();
      }
    });

    window.addEventListener('resize', function() {
      if( !!axisTitleTimeout ){ clearTimeout( axisTitleTimeout ); }
      
      axisTitleTimeout = setTimeout( function() {
        if(axisBadTitle != null) {
          renderBadAxisTitle();
          renderGoodAxisTitle();
        }
      }, 100);
    }, true);
  }
})();

