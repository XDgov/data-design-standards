(function() {
  var chartPieCanvas = document.getElementById("chart-pie");

  if(chartPieCanvas != null) {
    ctx = chartPieCanvas.getContext('2d');

    var chartPie = new Chart(ctx, {
      plugins:["datalabels"],
      type: 'pie',
      data: {
        datasets: [{
          data: [7.95, 47.97, 34.65, 9.43],
          backgroundColor: [
            "#0095A8",
            "#112E51",
            "#FF7043",
            "#78909C"
          ],
        }],
        labels: [
          "1-2 key performance indicators",
          "3-9 key performance indicators",
          "10 or more key performance indicators",
          "No key performance indicators"
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