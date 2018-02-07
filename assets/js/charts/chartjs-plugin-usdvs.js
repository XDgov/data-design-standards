/*
function usdvsDrawVerticalErrorBars(chart, view, border, value) {

  leftX = view.x - 4,
  rightX = view.x + 4,
  bottomY = view.y + value + border,
  topY = view.y - value;

  chart.ctx.beginPath();
  chart.ctx.strokeStyle = '#000000';
  chart.ctx.moveTo(view.x, bottomY);
  chart.ctx.lineTo(view.x, view.y);
  chart.ctx.stroke();

  chart.ctx.beginPath();
  chart.ctx.strokeStyle = '#000000';
  chart.ctx.moveTo(view.x, topY);
  chart.ctx.lineTo(view.x, view.y);
  chart.ctx.closePath();
  chart.ctx.stroke();

  chart.ctx.beginPath();
  chart.ctx.strokeStyle = '#000000';
  chart.ctx.moveTo(leftX, topY);
  chart.ctx.lineTo(rightX, topY);
  chart.ctx.closePath();
  chart.ctx.stroke();

  chart.ctx.beginPath();
  chart.ctx.strokeStyle = '#000000';
  chart.ctx.moveTo(leftX, bottomY);
  chart.ctx.lineTo(rightX, bottomY);
  chart.ctx.closePath();
  chart.ctx.shadowColor = "rgba(255,255,255, 1)";
  chart.ctx.shadowOffsetY = 1;
  chart.ctx.shadowBlur = 2;
  chart.ctx.stroke();
}

Chart.plugins.register({
  id: 'usdvs',

  afterDatasetDraw: function(chart, args) {
    var type = chart.config.type,
        moe = chart.config.config.moe,
        moeIsArray = Array.isArray(moe);

    if( type !== "bar" ){
      return false;
    }

    var elements = args.meta.data || [];
    var ilen = elements.length;
    var i, el, label;

    if (moeIsArray && ilen !== moe.length) {
      console.error("The length of the MOE array must match the length of the data array");
      return false;
    }

    for (i = 0; i < ilen; ++i) {
      var el = elements[i],
          view = el._view,
          border = view.borderWidth;

      console.log(view);

      if( moeIsArray ) {
        elMoe = moe[i];  
      } else {
        elMoe = moe;
      }

      usdvsDrawVerticalErrorBars(chart, view, border, elMoe);
    }
  }
});
*/