(function() {

  var tickMarksCluttered = document.getElementById("tick-marks-cluttered"),
      tickMarksGood = document.getElementById("tick-marks-good"),
      canvasHeight = 20;

  renderBadTickMarks = function() {
    makeHiDPICanvas(tickMarksCluttered, canvasHeight);
    ctx = tickMarksCluttered.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#000000';
    ctx.font = "normal 8pt sans-serif";

    var count = 0,
        offset = 0;

    var tickOffset = tickMarksCluttered.width / 52;
    
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

    ctx.moveTo(3, 0.5);
    ctx.lineTo(tickMarksCluttered.width - 449, 0.5);
    ctx.stroke();
  }

  renderGoodTickMarks = function() {
    makeHiDPICanvas(tickMarksGood, canvasHeight);
    ctx = tickMarksGood.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#000000';
    ctx.font = "normal 8pt sans-serif";

    var count = 0,
        offset = 0;

    var tickOffset = tickMarksCluttered.width / 52;
    
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
    ctx.lineWidth = 1;

    ctx.moveTo(3, 0.5);
    ctx.lineTo(tickMarksCluttered.width - 449, 0.5);
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

