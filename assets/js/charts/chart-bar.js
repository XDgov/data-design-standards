(function() {
  var barChart = document.getElementById("barChart");

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
                    'rgba(255, 112, 67, 1)',
                    'rgba(255, 112, 67, 1)',
                    'rgba(255, 112, 67, 1)',
                    'rgba(255, 112, 67, 1)',
                    'rgba(255, 112, 67, 1)'
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
                      labelString: "Percent"
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