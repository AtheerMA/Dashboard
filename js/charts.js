// Line Chart for Orders
const ctx = document.getElementById("chart").getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Aug 1", "Aug 3", "Aug 5", "Aug 7", "Aug 9", "Aug 11", "Aug 13"],
    datasets: [{
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderColor: 'rgba(138, 55, 223, 1)',
      data: [0, 10000,30000,25000,33000.,19000,33000,30000,20000,40000],
   
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  },
});
// Bar Chart for Visitor
var pie = document.getElementById('pie');
var pieConfig = new Chart(pie, {
    type: 'pie',
    data: {
        labels: ['Riyadh','Jaddah', 'Sharqia','Mecca'],
        datasets: [{
            label: '# of data',
            data: [60, 30,20,40],
            backgroundColor: [ 'rgba(220, 82, 144, 1)','rgba(100, 20, 123, 1)','rgba(220, 82, 144, 1)', 'rgba(100, 20, 123, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, 
        maintainAspectRatio: true, 
    }
});
// Liner Chart for Cities
var Cities = document.getElementById('meuGrafico').getContext('2d');
var chart = new Chart(Cities, {
    type: 'bar',
    data: {
        labels: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
  label: 'Man',
                data: [5200,4500,10000,14100,8000,13000,8900],
       
                borderWidth: 2,
                borderColor: 'rgba(138, 55, 223, 1)',
                backgroundColor: 'rgba(138, 55, 223, 1)',},
            { label: 'Women',
                data: [5100,4900,12000,9000,5000,8000,5800],
                borderWidth: 2,
                borderColor: 'rgba(220, 82, 144, 1)',
                backgroundColor: 'rgba(220, 82, 144, 1)',
            },
        ]
    },

});

// Liner Chart for Rat
var ratChart =document.getElementById("myLinearChart").getContext('2d');
var myLineChart = new Chart(ratChart, {
type: 'line',
data: {
labels: ["January", "February", "March", "April", "May", "June"],
datasets: [{
label: "",
data: [1, 1.4, 2.5, 4, 5, 3.2],
backgroundColor: [
'rgba(189, 182, 182, 0.404)',
],
borderColor: [
'rgba(138, 55, 223, 1)',
],
borderWidth: 3
}
]
},
options: {
responsive: true,
legend: {
    display: false
},
tooltips: {
    callbacks: {
       label: function(tooltipItem) {
              return tooltipItem.yLabel; }
   }}
}
});