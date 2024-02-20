const soundButton = document.getElementById("toggle-sound-btn");
const sound = document.getElementById("sound");
const muteLine = document.getElementById("mute-line");
const envelops = document.getElementsByClassName("envelop");
const envelopText = document.getElementById("envelop-content");

let isPlaying = false;
let timer = null;

for (let i = 0; i < envelops.length; i++) {
  envelops[0].addEventListener("click", function () {
    let seconds = 5;

    if (timer) {
      clearInterval(timer);
    }

    envelopText.textContent = seconds;
    seconds--;

    timer = setInterval(() => {
      envelopText.textContent = seconds;
      seconds--;

      if (seconds < 0) {
        clearInterval(timer);
        envelopText.textContent = Boolean(Math.round(Math.random()))
          ? "Có"
          : "Không";
      }
    }, 1000);
  });
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

soundButton.click();
