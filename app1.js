const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const soundButton = document.getElementById("toggle-sound-btn");
const sound = document.getElementById("sound");
const muteLine = document.getElementById("mute-line");
const envelops = document.getElementsByClassName("envelop");
const page0 = document.getElementById("page-0");
const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");

const pages = [page0, page1, page2, page3];
let currentIndexPage = 0;

let isPlaying = false;

const setPage = () => {
  pages.forEach((page, index) => {
    if (currentIndexPage === index) {
      page.classList.remove("hidden");
    } else {
      page.classList.add("hidden");
    }
  });

  // hide backBtn on first page
  if (currentIndexPage === 0) {
    backBtn.classList.add("hidden");
  } else {
    backBtn.classList.remove("hidden");
  }

  // hide nextBtn on last page and first page
  if (currentIndexPage === 0 || currentIndexPage === pages.length - 1) {
    nextBtn.classList.add("hidden");
  } else {
    nextBtn.classList.remove("hidden");
  }
};

const nextPage = () => {
  currentIndexPage++;
  setPage();
};

const backPage = () => {
  currentIndexPage--;
  setPage();
};

// add event listener
backBtn.addEventListener("click", backPage);
nextBtn.addEventListener("click", nextPage);
for (let i = 0; i < envelops.length; i++) {
  envelops[0].addEventListener("click", nextPage);
}

soundButton.addEventListener("click", function () {
  isPlaying = !isPlaying;

  if (isPlaying) {
    sound.play();
    muteLine.style.visibility = "hidden";
  } else {
    sound.pause();
    muteLine.style.visibility = "visible";
  }
});

setPage();
