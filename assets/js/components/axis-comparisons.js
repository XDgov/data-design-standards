(function() {
  var axesBadChartFirst = document.getElementById("axes-comparison-bad-first"),
      axesBadChartSecond = document.getElementById("axes-comparison-bad-second"),
      axesGoodChartFirst = document.getElementById("axes-comparison-good-first"),
      axesGoodChartSecond = document.getElementById("axes-comparison-good-second");

  if(axesBadChartFirst != null) {
    ctx = axesBadChartFirst.getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Col 1", "Col 2", "Col 3", "Col 4"],
            datasets: [{
                label: 'Percentage',
                data: [69, 15.2, 8.8, 7],
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
                      max: 80,
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

  if(axesBadChartSecond != null) {
    ctx = axesBadChartSecond.getContext('2d');

    var mySecondChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Col 1", "Col 2", "Col 3", "Col 4"],
            datasets: [{
                label: 'Percentage',
                data: [39, 15.2, 18.8, 26],
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
                      max: 40,
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

  if(axesGoodChartFirst != null) {
    ctx = axesGoodChartFirst.getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Col 1", "Col 2", "Col 3", "Col 4"],
            datasets: [{
                label: 'Percentage',
                data: [69, 15.2, 8.8, 7],
                backgroundColor: [
                    '#0095A8',
                    '#0095A8',
                    '#0095A8',
                    '#0095A8',
                    '#0095A8'
                ]
            }]
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

  if(axesGoodChartSecond != null) {
    ctx = axesGoodChartSecond.getContext('2d');

    var mySecondChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Col 1", "Col 2", "Col 3", "Col 4"],
            datasets: [{
                label: 'Percentage',
                data: [39, 15.2, 18.8, 26],
                backgroundColor: [
                    '#0095A8',
                    '#0095A8',
                    '#0095A8',
                    '#0095A8',
                    '#0095A8'
                ]
            }]
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