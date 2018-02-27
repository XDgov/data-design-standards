(function() {
  var barChart = document.getElementById("typography-chart");

  if(barChart != null) {
    ctx = barChart.getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["English Only", "Spanish", ["Other", "Indo-European"], ["Asian and Pacific", "Islander"], "Other"],
            datasets: [{
                label: 'Percentage',
                data: [69, 15.2, 8.8, 5.2, 1.8],
                backgroundColor: [
                    'rgba(38, 198, 218, 0.25)',
                    'rgba(38, 198, 218, 0.25)',
                    'rgba(38, 198, 218, 0.25)',
                    'rgba(38, 198, 218, 0.25)',
                    'rgba(38, 198, 218, 0.25)',
                ]
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
                      min: 0,
                      max: 100,
                      callback: function(value) {
                          return value;
                      }
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Percentage"
                    }
                }],
                xAxes: [{
                    gridLines: {
                      display: false
                    },
                    ticks: {
                        autoSkip: false,
                        fontColor: "#364850",
                        maxRotation: 0,
                        minRotation: 0
                    }
                }]
            }
        }
    });
  }
})();