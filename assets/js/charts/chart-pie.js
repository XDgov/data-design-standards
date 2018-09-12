(function() {
  var chartPieCanvas = document.getElementById("chart-pie");

  if(chartPieCanvas != null) {
    ctx = chartPieCanvas.getContext('2d');

    var chartPie = new Chart(ctx, {
      plugins:["datalabels"],
      type: 'pie',
      data: {
        datasets: [{
          data: [58.6, 22.9, 10, 8.6],
          backgroundColor: [
            "#0095A8",
            "#112E51",
            "#FF7043",
            "#78909C"
          ],
        }],
        labels: [
          "1st Qtr",
          "2nd Qtr",
          "3rd Qtr",
          "4th Qtr"
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