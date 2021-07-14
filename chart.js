document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Beats', 'Pears', 'Kiwi']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [11, 12, 13]
    }]
  });
});


