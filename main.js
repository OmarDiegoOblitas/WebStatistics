const chart = document.querySelector("#chart").getContext("2d");

// Create a new Chart instance

new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          29324, 53232, 24234, 32523, 52532, 42423, 93424, 32131, 91412, 23123,
          11212, 42214,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "BTC",
        data: [
          29324, 53232, 23224, 22523, 25765, 43323, 23424, 32131, 53225, 23123,
          32423, 34535,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "ETC",
        data: [
          12332, 62342, 41242, 53433, 32523, 74322, 12242, 32131, 24244, 94124,
          23121, 53422,
        ],
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// show or hide sidebar

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sideBar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sideBar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
});

// change Theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  themeBtn.querySelector("span:first-child").classList.toggle("active");

  themeBtn.querySelector("span:last-child").classList.toggle("active");
});
