// start coundown
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "Happy New Year!";
  }
}, 1000);

// start chart
document.addEventListener("DOMContentLoaded", function () {
  var progressElement1 = document.querySelector(".progress1");
  var progressElement2 = document.querySelector(".progress2");
  var progressElement3 = document.querySelector(".progress3");
  var progressElement4 = document.querySelector(".progress4");
  var progressElement5 = document.querySelector(".progress5");
  var progressElement6 = document.querySelector(".progress6");
  var progressElement7 = document.querySelector(".progress7");
  var progressElement8 = document.querySelector(".progress8");

  const ctx = document.getElementById("doughnut-chart").getContext("2d");

  // Chart data
  const data = {
    labels: [
      "Team",
      "Marketing",
      "Per sale",
      "Developers",
      "Remaining",
      "Used",
      "Average Daily",
      "Average Weekly",
    ],
    datasets: [
      {
        data: [10, 70, 50, 30, 70, 50, 50, 20],
        backgroundColor: [
          "#02E4D1",
          "#DEF3FE",
          "#F3DFD1",
          "#D7D4F4",
          "rgba(248, 175, 208, 0.82)",
          "#ADF8CF",
          "#F6A1A1",
          "#E8E48D",
        ],
      },
    ],
  };

  const options = {
    borderWidth: 5,
    borderRaduis: 2,
    cutoutPercentage: 70,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const doughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: options,
  });
  var prog1 = doughnutChart.data.datasets[0].data[0];
  document.querySelector(".prog1").innerHTML = prog1 + "%";
  var prog2 = doughnutChart.data.datasets[0].data[1];
  document.querySelector(".prog2").innerHTML = prog2 + "%";
  var prog3 = doughnutChart.data.datasets[0].data[2];
  document.querySelector(".prog3").innerHTML = prog3 + "%";
  var prog4 = doughnutChart.data.datasets[0].data[3];
  document.querySelector(".prog4").innerHTML = prog4 + "%";
  var prog5 = doughnutChart.data.datasets[0].data[4];
  document.querySelector(".prog5").innerHTML = prog5 + "%";
  var prog6 = doughnutChart.data.datasets[0].data[5];
  document.querySelector(".prog6").innerHTML = prog6 + "%";
  var prog7 = doughnutChart.data.datasets[0].data[6];
  document.querySelector(".prog7").innerHTML = prog7 + "%";
  var prog8 = doughnutChart.data.datasets[0].data[7];
  document.querySelector(".prog8").innerHTML = prog8 + "%";

  function updateProgress1() {
    let newValue = doughnutChart.data.datasets[0].data[0];
    progressElement1.value = newValue;
  }
  function updateProgress2() {
    let newValue = doughnutChart.data.datasets[0].data[1]; // Assuming "Remaining" is at index 4
    progressElement2.value = newValue;
  }
  function updateProgress3() {
    let newValue = doughnutChart.data.datasets[0].data[2]; // Assuming "Remaining" is at index 4
    progressElement3.value = newValue;
  }
  function updateProgress4() {
    let newValue = doughnutChart.data.datasets[0].data[3]; // Assuming "Remaining" is at index 4
    progressElement4.value = newValue;
  }
  function updateProgress5() {
    let newValue = doughnutChart.data.datasets[0].data[4]; // Assuming "Remaining" is at index 4
    progressElement5.value = newValue;
  }
  function updateProgress6() {
    let newValue = doughnutChart.data.datasets[0].data[5]; // Assuming "Remaining" is at index 4
    progressElement6.value = newValue;
  }
  function updateProgress7() {
    let newValue = doughnutChart.data.datasets[0].data[6]; // Assuming "Remaining" is at index 4
    progressElement7.value = newValue;
  }
  function updateProgress8() {
    let newValue = doughnutChart.data.datasets[0].data[7]; // Assuming "Remaining" is at index 4
    progressElement8.value = newValue;
  }
  setTimeout(() => {
    updateProgress1();
    updateProgress2();
    updateProgress3();
    updateProgress4();
    updateProgress5();
    updateProgress6();
    updateProgress7();
    updateProgress8();
  }, 3000);
});

var skillPers = document.querySelectorAll(".skill-per");

skillPers.forEach(function (skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";

  var animatedValue = 0;
  var startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000;

    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
    }
  }

  requestAnimationFrame(animate);
});