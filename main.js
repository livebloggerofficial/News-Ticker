const newsSingleAll = document.querySelectorAll(".news-container .news-single");

let currentActive = 0;
let totalNews = newsSingleAll.length;
let duration = 3000;

const removeAllActive = () => {
  newsSingleAll.forEach((n) => {
    n.classList.remove("active");
  });
};

const changeNews = () => {
  if (currentActive >= totalNews - 1) {
    currentActive = 0;
  } else {
    currentActive += 1;
  }

  removeAllActive();
  newsSingleAll[currentActive].classList.add("active");
};

setInterval(changeNews, duration);
