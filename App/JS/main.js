// Line Graph
const ctxLine = document.getElementById("myLineChart");
const myLineChart = new Chart(ctxLine, {
  type: "line",
  data: {
    labels: [
      "Jan 27, 2020",
      "Aug 8, 2020",
      "Nov 16, 2020",
      "Feb 24, 2021",
      "Jun 4, 2021",
      "Sep 12, 2021",
      "Jan 6, 2022",
      "Apr 25, 2022",
    ],
    datasets: [
      {
        label: "Global cases per million people",
        data: [
          717.57, 258892.29, 585057.86, 384492.0, 444451.86, 558120.43, 2000000,
          733200.14,
        ],
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function changeLineChart(color, label, data) {
  myLineChart.data.datasets[0].backgroundColor = color;
  myLineChart.data.datasets[0].borderColor = color;
  myLineChart.data.datasets[0].label = label;
  myLineChart.data.datasets[0].data = data;
  myLineChart.update();
}

// Bar Chart
const ctxBar = document.getElementById("myBarChart");
const myBarChart = new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: [
      "Jan 27, 2020",
      "Aug 8, 2020",
      "Nov 16, 2020",
      "Feb 24, 2021",
      "Jun 4, 2021",
      "Sep 12, 2021",
      "Jan 6, 2022",
      "Apr 25, 2022",
    ],
    datasets: [
      {
        label: "Global cases per million people",
        data: [
          717.57, 258892.29, 585057.86, 384492.0, 444451.86, 558120.43, 2000000,
          733200.14,
        ],
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function changeBarChart(color, label, data) {
  myBarChart.data.datasets[0].backgroundColor = color;
  myBarChart.data.datasets[0].borderColor = color;
  myBarChart.data.datasets[0].label = label;
  myBarChart.data.datasets[0].data = data;
  myBarChart.update();
}

// Pie Chart
const ctxPie = document.getElementById("myPieChart");
const myPieChart = new Chart(ctxPie, {
  type: "pie",
  data: {
    labels: [
      "Jan 27, 2020",
      "Aug 8, 2020",
      "Nov 16, 2020",
      "Feb 24, 2021",
      "Jun 4, 2021",
      "Sep 12, 2021",
      "Jan 6, 2022",
      "Apr 25, 2022",
    ],
    datasets: [
      {
        label: "Global cases per million people",
        data: [
          717.57, 258892.29, 585057.86, 384492.0, 444451.86, 558120.43, 2000000,
          733200.14,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 0, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 0, 64, 1)",
        ],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function changePieChart(label, data) {
  myPieChart.data.datasets[0].label = label;
  myPieChart.data.datasets[0].data = data;
  myPieChart.update();
}
