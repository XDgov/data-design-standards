(function() {

  var dataLabelFail = document.getElementById("data-label-fail"),
      dataLabelSuccess = document.getElementById("data-label-success"),
      dataLabelCanvasHeight = 100,
      dataLabelHeight = 35,
      dataLabelLineStart = 3;
      dataLabelLineEnd = dataLabelFail.parentElement.offsetWidth - 100;

  renderDataLabelBars = function(fill, elem) {
    makeHiDPICanvas(elem, dataLabelCanvasHeight);
    ctx = elem.getContext('2d');
    var pixRatio = pixelRatio(elem);

    ctx.strokeStyle = '#0095A8';
    ctx.fillStyle = fill;
    ctx.font = "bold 11pt Roboto";

    ctx.fillRect(dataLabelLineStart, 0.5, dataLabelLineEnd, dataLabelHeight);
    ctx.fillRect(dataLabelLineStart, 0.5 + dataLabelHeight + 20, dataLabelLineEnd - 50 , dataLabelHeight);

    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("20%", dataLabelLineEnd - 40, dataLabelHeight / 2 + 6);
    ctx.fillText("15%", dataLabelLineEnd - 90, dataLabelHeight * 2 + 8);
  }

  if(dataLabelFail != null || dataLabelSuccess != null) {

    var dataLabelTimeout;

    window.addEventListener('load', function(){
      if(dataLabelSuccess != null) {
        renderDataLabelBars("#006C7A", dataLabelSuccess);
      }

      if(dataLabelFail != null) {
        renderDataLabelBars("#0095A8", dataLabelFail);
      }
    });

    window.addEventListener('resize', function() {
      if( !!dataLabelTimeout ){ clearTimeout( dataLabelTimeout ); }
      
      dataLabelTimeout = setTimeout( function() {
        if(dataLabelSuccess != null) {
          renderDataLabelBars("#006C7A", dataLabelSuccess);
        }

        if(dataLabelFail != null) {
          renderDataLabelBars("#0095A8", dataLabelFail);
        }
      }, 100);
    }, true);
  }
})();

