(function() {
  var chartLine = document.getElementById("chart-line");

  if(chartLine != null) {
    ctx = chartLine.getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2012", "2013", "2014", "2015", "2016"],
            datasets: [{
                label: 'Percentage',
                data: [10.9, 10.7, 8.7, 7.1, 6.1],
                backgroundColor: "rgba(0, 149, 168, 1)",
                borderColor: "rgba(0, 149, 168, 1)",
                fill: false 
            }]
        },
        options: {
            legend: {
              display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                      display: false
                    },
                    ticks: {
                      fontColor: "#364850",
                      min: null,
                      max: 100,
                      callback: function(value) {
                          return value + "%";
                      }
                    }
                }],
                xAxes: [{
                    gridLines: {
                      display: false
                    },
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