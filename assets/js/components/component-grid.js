(function() {
  var componentGrid = document.getElementById("component-grid-chart");

  if(componentGrid != null) {
    ctx = componentGrid.getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Drove Alone", "Carpool", "Public transportation", "Walked", "Other means", "Worked at home"],
            datasets: [{
                data: [52.6, 6.5, 28.4, 6.2, 2.0, 4.3],
                backgroundColor: [
                    'rgba(0, 149, 168, 1)',
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
            scales: {
                yAxes: [{
                    gridLines: {
                      display: false
                    },
                    ticks: {
                      fontColor: "#364850"
                    },
                }],
                xAxes: [{
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