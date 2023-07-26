// ====================== Firebase Authentication ===========================
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("index.html");
  } else {
    document.getElementById("user").innerHTML = "Hello, " + user.email;
  }
});

// ========================= Log out =============================
function logout() {
  firebase.auth().signOut();
}

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("nav-toggle");
});

// Charts
const config = { responsive: true };

//Bar Chart
const barChartTrace1 = {
  x: [],
  y: [],
  name: "",
  type: "",
  marker: { color: "#ea335d" },
};
const barChartTrace2 = {
  x: [],
  y: [],
  name: "",
  type: "",
  marker: { color: "#ea335d", opacity: 0.6 },
};

const barChartData = [barChartTrace1, barChartTrace2];
const layout = {
  barmode: "stack",
  paper_bgcolor: "#172042",
  plot_bgcolor: "#172042",
  showlegend: false,
  margin: {
    l: 30,
    r: 30,
    b: 30,
    t: 30,
    pad: 1,
  },
  font: {
    color: "#6b6f8a",
  },
};

plotly.newplot("barChart", barChartData, layout, config);

// Scientific Chart

d3.csv(
  "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv",
  function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "AAPL High",
      x: unpack(rows, "Date"),
      y: unpack(rows, "AAPL.High"),
      line: { color: "#ea335d" },
    };
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "AAPL Low",
      x: unpack(rows, "Date"),
      y: unpack(rows, "AAPL.High"),
      line: { color: "#03dcee" },
    };

    var data = [trace1, trace2];
    const layout = {
      paper_bgcolor: "#172042",
      plot_bgcolor: "#172042",
      showlegend: false,
      margin: {
        l: 30,
        r: 30,
        b: 30,
        t: 30,
        pad: 1,
      },
      font: {
        color: "#6b6f8a",
      },
      xaxis: {
        range: ["2016-07-01", "2017-02-01"],
        type: "date",
      },
      yaxis: {
        autorange: true,
        type: "linear",
      },
    };

    Plotly.newPlot("scientificChart", data, layout, config);
  }
);

const pieChartData = [
  {
    values: [19, 26, 55],
    labels: ["March", "April", "June"],
    type: "pie",
  },
];

const pieChartLayout = {
  paper_bgcolor: "#172042",
  plot_bgcolor: "172042",
  piecolorway: ["#ea335d", "#03dcee", "#178add"],
  showlegend: false,
  margin: {
    l: 30,
    r: 30,
    b: 30,
    t: 30,
    pad: 1,
  },
  height: 300,
  width: 300,
};

Plotly.newPlot("pieChart", pieChartData, pieChartLayout);

const donutChartData = [
  {
    values: [10, 40, 50],
    labels: ["sep", "oct", "nov"],
    hole: 0.4,
    type: "pie",
  },
];

Plotly.newPlot("donutChart", donutChartData, pieChartLayout);
