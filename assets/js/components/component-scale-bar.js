(function() {

  var scaleBarSingle = document.getElementById("scale-bar-single"),
      scaleBarAlt = document.getElementById("scale-bar-alt"),
      scaleCanvasHeight = 40;

  renderAlternatingScaleBar = function() {
    makeHiDPICanvas(scaleBarAlt, scaleCanvasHeight);
    ctx = scaleBarAlt.getContext('2d');
    var pixRatio = pixelRatio(scaleBarAlt);

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#666666';
    ctx.fillStyle = "#666666";
    ctx.font = "normal 11pt Roboto";

    var barHeight = 20,
        lineEnd = scaleBarAlt.parentElement.offsetWidth - 1,
        lineStart = 3;

    console.log(lineEnd);
    ctx.rect(lineStart, 0.5, lineEnd / 8, barHeight);
    ctx.stroke();
    ctx.fillRect(lineStart, 0.5, lineEnd / 8, barHeight);
    ctx.rect(lineStart + (lineEnd / 8), 0.5, lineEnd / 8, barHeight);
    ctx.stroke();
    ctx.rect(lineStart + ((lineEnd / 8) * 2), 0.5, lineEnd / 8, barHeight);
    ctx.stroke();
    ctx.fillRect(lineStart + ((lineEnd / 8) * 2), 0.5, lineEnd / 8, barHeight);
    ctx.rect(lineStart + ((lineEnd / 8) * 3), 0.5, lineEnd / 8, barHeight);
    ctx.stroke();
    ctx.rect(lineStart + ((lineEnd / 8) * 4), 0.5, ((lineEnd / 8) * 4) - 30, barHeight);
    ctx.stroke();
    ctx.fillRect(lineStart + ((lineEnd / 8) * 4), 0.5, ((lineEnd / 8) * 4) - 30, barHeight);
    ctx.fillText("0", lineStart - 3, barHeight + 20);
    ctx.fillText("50", lineStart + ((lineEnd / 8) * 2) - 8, barHeight + 20);
    ctx.fillText("100", lineStart + ((lineEnd / 8) * 4) - 8, barHeight + 20);
    ctx.fillText("200 Feet", ((lineEnd / 8) * 4) + ((lineEnd / 8) * 4) - 60, barHeight + 20);
  }

  renderSingleDivisionScaleBar = function() {
    makeHiDPICanvas(scaleBarSingle, scaleCanvasHeight);
    ctx = scaleBarSingle.getContext('2d');
    var pixRatio = pixelRatio(scaleBarSingle);

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#666666';
    ctx.fillStyle = "#666666";
    ctx.font = "normal 11pt Roboto";

    ctx.stroke();
    ctx.lineWidth = 1;

    var barHeight = 20,
        lineEnd = scaleBarSingle.parentElement.offsetWidth - 26,
        lineStart = 3;

    ctx.fillRect(lineStart, 0.5, lineEnd, barHeight);
    ctx.fillText("10 miles", lineEnd - 35, barHeight + 20);
    ctx.fillText("0", lineStart - 3, barHeight + 20);
  }

  if(scaleBarSingle != null || scaleBarAlt != null) {

    var scaleTimeout;


    window.addEventListener('load', function(){
      if(scaleBarSingle != null) {
        renderSingleDivisionScaleBar();
      }

      if(scaleBarSingle != null) {
        renderAlternatingScaleBar();
      }
    });

    window.addEventListener('resize', function() {
      if( !!scaleTimeout ){ clearTimeout( scaleTimeout ); }
      
      scaleTimeout = setTimeout( function() {
        if(scaleBarSingle != null) {
          renderSingleDivisionScaleBar();
        }

        if(scaleBarSingle != null) {
          renderAlternatingScaleBar();
        }
      }, 100);
    }, true);
  }
})();

