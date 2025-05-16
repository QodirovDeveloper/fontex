const $ = (e) => document.querySelector(e);
const $$ = (es) => document.querySelectorAll(es);

const max = 3;
const next = $(".next");
const prev = $(".prev");
const carousel = $(".carousel-inner");
let activeIndex = 0;

next.addEventListener("click", () => {
  if (activeIndex >= 2) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  animate();
});
const animate = () => {
  carousel.style.transform = `translateX(-${(100 / max) * activeIndex}%)`;
};
prev.addEventListener("click", () => {
  if (activeIndex <= 0) {
    activeIndex = max - 1;
  } else {
    activeIndex--;
  }
  animate1();
});

const animate1 = () => {
  carousel.style.transform = `translateX(-${(100 / max) * activeIndex}%)`;
};

// !=================
let remainingTime = 1 * 1 * 20;

function updateTimer() {
  const hours = String(Math.floor(remainingTime / 3600)).padStart(2, '0');

  const minutes = String(Math.floor((remainingTime % 3600) / 60)).padStart(2, '0');

  const seconds = String(remainingTime % 60).padStart(2, '0');

  document.getElementById('countdown').textContent = `${hours}:${minutes}:${seconds}`;

  if (remainingTime > 0) {
    remainingTime--;
  } else {
    clearInterval(timerInterval);
    document.getElementById('countdown').textContent = "Taymer tugadi!";
  }
}

updateTimer(); // Boshlanish holatini ko‘rsatish
const timerInterval = setInterval(updateTimer, 1000);