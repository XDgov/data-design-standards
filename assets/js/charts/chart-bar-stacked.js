(function() {
  var barChartStacked = document.getElementById("chart-bar-stacked");

  if(barChartStacked != null) {
    ctx = barChartStacked.getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [{
              label: 'Atlanta',
              data: [2, 4, 3, 3],
              backgroundColor: "#00BED6"
            }, {
              label: 'Chicago',
              data: [3, 2, 3, 2],
              backgroundColor: "#FF7043"
            }, {
              label: 'Denver',
              data: [3, 2, 4, 5],
              backgroundColor: "#78909C"
            }, {
              label: 'NY',
              data: [3, 3, 2, 4],
              backgroundColor: "#6DA1E0"
            }, {
              label: 'PHI',
              data: [2, 4, 3, 4],
              backgroundColor: "#112E51"
            }
          ]
        },
        options: {
            plugins: {
              datalabels: {
                display: false
              }
            },
            scales: {
                yAxes: [{
                    gridLines: {
                      display: false
                    },
                    ticks: {
                      fontColor: "#364850",
                      min: 0,
                      callback: function(value) {
                          return value;
                      }
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Percent"
                    },
                    stacked: true
                }],
                xAxes: [{
                    gridLines: {
                      display: false
                    },
                    stacked: true,
                    ticks: {
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    }
                }]
            }
        }
    });
  }
})();