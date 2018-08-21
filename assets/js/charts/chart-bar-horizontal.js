(function() {
  var horizontalBar = document.getElementById("chart-bar-horizontal");

  if(horizontalBar != null) {
    ctx = horizontalBar.getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Under 5 Years", "18 years and under", "65 years and older"],
            datasets: [{
                label: 'Percentage',
                data: [5.9, 78.8, 15.3],
                backgroundColor: [
                    'rgba(0, 149, 168, 1)',
                    'rgba(0, 149, 168, 1)',
                    'rgba(0, 149, 168, 1)',
                    'rgba(0, 149, 168, 1)',
                    'rgba(0, 149, 168, 1)'
                ]
            }]
        },
        options: {
            legend: {
              display: false
            },
            plugins: {
              datalabels: {
                anchor: "end",
                align: "end",
                color: "rgba(0, 149, 168, 1)",
                font: {
                  size: 14,
                  weight: "bold"
                },
                formatter: function(value, context) {
                  return value + "%";
                }
              }
            },
            scales: {
                yAxes: [{
                    barThickness : 50,
                    gridLines: {
                      display: false
                    },
                    ticks: {
                      fontColor: "#364850"
                    },
                }],
                xAxes: [{
                    gridLines: {
                      display: false
                    },
                    ticks: {
                      autoSkip: false,
                      maxRotation: 0,
                      minRotation: 0,
                      max: 100,
                      callback: function(value) {
                        return value + "%";
                      }
                    }
                }]
            }
        }
    });
  }
})();