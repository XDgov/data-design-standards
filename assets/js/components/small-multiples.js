(function() {
  var smBarStacked = document.getElementById("sm-chart-bar-stacked"),
      smBarQ1 = document.getElementById("sm-chart-bar-q1"),
      smBarQ2 = document.getElementById("sm-chart-bar-q2"),
      smBarQ3 = document.getElementById("sm-chart-bar-q3"),
      smBarQ4 = document.getElementById("sm-chart-bar-q4");


  if(smBarStacked != null) {
    ctx = smBarStacked.getContext('2d');

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
            }
          ]
        },
        options: {
          legend: {
            labels: {
              boxWidth: 15
            },
            position: 'bottom'
          },
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
                    minRotation: 0,
                }
            }]
          }
        }
    });
  }

  if(smBarQ1 != null) {
    ctx = smBarQ1.getContext('2d');

    var mySmBarChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [{
              label: 'Atlanta',
              data: [2, 4, 3, 3],
              backgroundColor: "#00BED6"
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          plugins: {
            datalabels: {
              display: false
            }
          },
          scales: {
            yAxes: [{
              barThickness : 10,
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
                scaleLabel: {
                  display: true,
                  labelString: "Percent"
                },
                stacked: true,
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    min: 0,
                    max: 5,
                }
            }]
          }
        }
    });
  }
  if(smBarQ2 != null) {
    ctx = smBarQ2.getContext('2d');

    var mySmBarChart2 = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [{
              label: 'Chicago',
              data: [3, 2, 3, 2],
              backgroundColor: "#00BED6"
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          plugins: {
            datalabels: {
              display: false
            }
          },
          scales: {
            yAxes: [{
              barThickness : 10,
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#364850",
              },
            }],
            xAxes: [{
                gridLines: {
                  display: false
                },
                scaleLabel: {
                  display: true,
                  labelString: "Percent"
                },
                stacked: true,
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    min: 0,
                    max: 5,
                }
            }]
          }
        }
    });
  }
  if(smBarQ3 != null) {
    ctx = smBarQ3.getContext('2d');

    var mySmBarChart3 = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [{
              label: 'Denver',
              data: [3, 2, 4, 5],
              backgroundColor: "#00BED6"
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          plugins: {
            datalabels: {
              display: false
            }
          },
          scales: {
            yAxes: [{
              barThickness : 10,
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#364850",
              },
            }],
            xAxes: [{
                gridLines: {
                  display: false
                },
                scaleLabel: {
                  display: true,
                  labelString: "Percent"
                },
                stacked: true,
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    min: 0,
                    max: 5,
                }
            }]
          }
        }
    });
  }
  if(smBarQ4 != null) {
    ctx = smBarQ4.getContext('2d');

    var mySmBarChart4 = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [{
              label: 'NY',
              data: [3, 3, 2, 4],
              backgroundColor: "#00BED6"
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          plugins: {
            datalabels: {
              display: false
            }
          },
          scales: {
            yAxes: [{
              barThickness : 10,
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#364850",
              }
            }],
            xAxes: [{
                gridLines: {
                  display: false
                },
                scaleLabel: {
                  display: true,
                  labelString: "Percent"
                },
                stacked: true,
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    min: 0,
                    max: 5,
                }
            }]
          }
        }
    });
  }
})();