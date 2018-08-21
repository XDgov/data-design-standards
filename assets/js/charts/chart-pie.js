(function() {
  var chartPieCanvas = document.getElementById("chart-pie");

  if(chartPieCanvas != null) {
    ctx = chartPieCanvas.getContext('2d');

    var chartPie = new Chart(ctx, {
      plugins:["datalabels"],
      type: 'pie',
      data: {
        datasets: [{
          data: [1.1, 2.1, 7.6, 8.1],
          backgroundColor: [
            "#0095A8",
            "#112E51",
            "#FF7043",
            "#78909C"
          ],
        }],
        labels: [
          "Northeast",
          "Midwest",
          "South",
          "West"
        ]
      },
      options: {
        legend: {
          position: "right"
        },
        responsive: true,
        plugins: {
          datalabels: {
            align: "start",
            anchor: "end",
            color: "#ffffff",
            font: {
              size: 14,
              weight: "bold"
            },
            formatter: function(value, context) {
              return value + "%" + "\n";
            }
          }
        }
      }
    });
  }
})();