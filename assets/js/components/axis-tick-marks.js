(function() {

  var tickMarksCluttered = document.getElementById("tick-marks-cluttered"),
      tickMarksGood = document.getElementById("tick-marks-good"),
      canvasHeight = 20;

  renderBadTickMarks = function() {
    makeHiDPICanvas(tickMarksCluttered, canvasHeight);
    ctx = tickMarksCluttered.getContext('2d');
    var pixRatio = pixelRatio(tickMarksCluttered);

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#666666';
    ctx.fillStyle = "#666666";
    ctx.font = "normal 8pt Roboto";

    var count = 0,
        offset = 0;

    var tickOffset = tickMarksCluttered.width / (26 * pixRatio);
    
    for( var i = 0; i < 26; i += 1) {

      if(count < 10) {
        offset = 0;
      } else {
        offset = -3;
      }

      ctx.moveTo(i * tickOffset + 3, 0);
      ctx.lineTo(i * tickOffset + 3, 10);
      ctx.fillText(count, (i * tickOffset) + offset, 20);
      count++;
    }

    ctx.stroke();
    ctx.lineWidth = 1;

    var lineEnd = tickMarksCluttered.parentElement.offsetWidth - (tickMarksCluttered.parentElement.offsetWidth / 26) + 3;

    ctx.moveTo(3, 0.5);
    ctx.lineTo(lineEnd, 0.5);
    ctx.stroke();
  }

  renderGoodTickMarks = function() {
    makeHiDPICanvas(tickMarksGood, canvasHeight);
    ctx = tickMarksGood.getContext('2d');
    var pixRatio = pixelRatio(tickMarksGood);

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#666666';
    ctx.fillStyle = "#666666";
    ctx.font = "normal 8pt Roboto";

    var count = 0,
        offset = 0;

    var tickOffset = tickMarksCluttered.width / (26 * pixRatio);
    
    for( var i = 0; i < 26; i += 1) {

      if(count < 10) {
        offset = 0;
      } else {
        offset = -3;
      }

      ctx.moveTo(i * tickOffset + 3, 0);

      if(count % 5 === 0   ) {
        ctx.lineTo(i * tickOffset + 3, 10);
        ctx.fillText(count, (i * tickOffset) + offset, 20);
      } else {
        ctx.lineTo(i * tickOffset + 3, 5);
      }
      count++;
    }

    ctx.stroke();

    var lineEnd = tickMarksGood.parentElement.offsetWidth - (tickMarksGood.parentElement.offsetWidth / 26) + 3;


    console.log(lineEnd);

    ctx.moveTo(3, 0.5);
    ctx.lineTo(lineEnd, 0.5);
    ctx.stroke();
  }

  if(tickMarksCluttered != null || tickMarksGood != null) {

    var tickMarksTimeout;


    window.addEventListener('load', function(){
      if(tickMarksCluttered != null) {
        renderBadTickMarks();
      }
      if (tickMarksGood != null) {
        renderGoodTickMarks();
      }
    });

    window.addEventListener('resize', function() {
      if( !!tickMarksTimeout ){ clearTimeout( tickMarksTimeout ); }
      
      tickMarksTimeout = setTimeout( function() {
        if(tickMarksCluttered != null) {
          renderBadTickMarks();
        }
        if (tickMarksGood != null) {
          renderGoodTickMarks();
        }
      }, 100);
    }, true);
  }
})();

