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
