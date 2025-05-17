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

// !=============================
const defaultTime = 15 * 60 * 60; // 15 soat
let remainingTime =
  parseInt(localStorage.getItem("remainingTime")) || defaultTime;

// Taymerni yangilash funktsiyasi
function updateTimer() {
  const hours = String(Math.floor(remainingTime / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((remainingTime % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(remainingTime % 60).padStart(2, "0");
  console.log(seconds, remainingTime);
  document.getElementById(
    "countdown"
  ).textContent = `${hours}:${minutes}:${seconds}`;

  // Agar vaqt qolsa, 1 sekundga kamaytirish
  if (remainingTime > 0) {
    localStorage.setItem("remainingTime", remainingTime); // Har bir sekundda saqlash
    remainingTime--;
  } else {
    clearInterval(timerInterval); // Taymer tugadi
    document.getElementById("countdown").textContent = "Taymer tugadi!";
    localStorage.removeItem("remainingTime"); // Taymer tugaganidan keyin o‘chirish
  }
}

updateTimer(); // Dastlabki holatni ko‘rsatish
const timerInterval = setInterval(updateTimer, 1000); // Har bir sekundda taymerni yangilash
