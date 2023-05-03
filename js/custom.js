var ctx = document.getElementById("myChart").getContext("2d");
// Creating Chart Class Object
var myChart = new Chart(ctx, {
  // Type of Chart - bar, line, pie, doughnut, radar, polarArea
  type: "line",

  // The data for our dataset
  data: {
    // Data Labels
    labels: [],

    datasets: [
      // Data Set 1
      {
        //  Chart Label

        // Actual Data
        data: [0],

        // Background Color
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],

        // Border Color
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        // Border Width
        borderWidth: 1,
      },
    ],
  },

  // Configuration options go here
  options: {
    // Set Responsiveness By Default Its True
    // When Its True Canvas Width Height won't work
    responsive: true,

    // Set Padding
    layout: {
      padding: {
        // left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            autoSkip: false,
            maxRotation: 90,
            minRotation: 90,
          },
        },
      ],
    },
    // Configure ToolTips

    // Custom Chart Title
    title: {
      display: false,
      position: "bottom",
      fontSize: 25,
      fontFamily: "Comic Sans MS",
      fontColor: "red",
      fontStyle: "bold italic",
      padding: 20,

      lineHeight: 3,
    },

    // Legends Configuration
    legend: {
      display: false,
      position: "bottom", // top left bottom right
      align: "end", // start end center
      labels: {
        fontColor: "red",
        fontSize: 16,
        boxWidth: 20,
      },
    },

    animation: {
      duration: 5000,
      easing: "easeInOutBounce",
    },

    // We have Three Events - events which take string array, onHover and Onclick which take function
    // Example of events
    // This chart will not respond to mousemove, etc
    // mousemove, mouseout, click, touchstart, touchmove
    // events: ["click"],

    // onClick Example
    // onClick: function () {
    //   console.log("On Click");
    // },

    // onHover Example - It will work
    // onHover: function () {
    //   console.log("On Hover");
    // },
  },
});
