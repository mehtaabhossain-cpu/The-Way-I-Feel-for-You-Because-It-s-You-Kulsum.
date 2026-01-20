let currentSlide = 0;
const slider = document.getElementById("slider");
const totalSlides = document.querySelectorAll(".slide").length;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Disable prev button on first slide
  prevBtn.style.opacity = currentSlide === 0 ? "0.3" : "1";
  prevBtn.style.pointerEvents = currentSlide === 0 ? "none" : "auto";

  // Disable next button on last slide
  nextBtn.style.opacity = currentSlide === totalSlides - 1 ? "0.3" : "1";
  nextBtn.style.pointerEvents = currentSlide === totalSlides - 1 ? "none" : "auto";
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}

/* MUSIC */
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicButton");

  if (music.paused) {
    music.play();
    btn.innerText = "Pause 🎵";
  } else {
    music.pause();
    btn.innerText = "Play 🎵";
  }
}

/* FINAL CONFESSION */
function revealSecret() {
  const sec = document.getElementById("secretText");
  sec.classList.remove("hidden");
  setTimeout(() => sec.classList.add("visible"), 50);
}

/* Initialize Button State */
updateSlider();
