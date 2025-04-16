
function start() {
  window.location.href = "home.html";
}

const ctx = document.getElementById('liveChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: Array.from({length: 30}, (_, i) => i),
    datasets: [{
      label: 'מחיר',
      data: Array.from({length: 30}, () => Math.random() * 100),
      borderColor: '#2575fc',
      backgroundColor: 'rgba(37, 117, 252, 0.1)',
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 0
    },
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: { display: false },
      y: { display: false }
    }
  }
});

setInterval(() => {
  chart.data.datasets[0].data.shift();
  chart.data.datasets[0].data.push(Math.random() * 100);
  chart.update();
}, 1000);
