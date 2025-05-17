const $ = (e) => document.querySelector(e);
const $$ = (es) => document.querySelectorAll(es);
// ! karusel=====================================
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

// ! taymer=============================
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

// ! produks======================================
// const usersWrap = $(".users");

// fetch("https://dummyjson.com/users")
//   .then((res) => res.json())
//   .then((data) => Print(data.users));

// function Print(users) {
//   usersWrap.innerHTML = "";
//   users.forEach((user) => {
//     usersWrap.innerHTML += `
//       <div class="user-card w-full rounded-md  shadow-md bg-[#fff] p-2">
//         <div class="aspect-[4/3] w-full">
//           <img class="mx-auto" src="${user.image}" alt="${user.firstName}'s photo" width="100">
//           <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
//           <p><strong>Email:</strong> ${user.email}</p>
//         </div>
//       </div>
//     `;
//   });
// }

const users = [
  {
    firstName: "Krossovki",
    lastName: "lorem ipsum dolor sit amet at dit.",
    image: "/images/crok.png",
  },
  {
    firstName: "Krossovki",
    lastName: "lorem ipsum dolor sit amet at dit.",
    image: "/images/crok.png",
  },
  {
    firstName: "Krossovki",
    lastName: "lorem ipsum dolor sit amet at dit.",
    image: "/images/crok.png",
  },
  {
    firstName: "Krossovki",
    lastName: "lorem ipsum dolor sit amet at dit.",
    image: "/images/crok.png",
  },
];

const usersWrap = document.querySelector(".users");

function Print(users) {
  usersWrap.innerHTML = "";
  users.forEach((user) => {
    let randomm = Math.floor(Math.random() * 9) + 1;
    usersWrap.innerHTML += `
      <div class="user-card w-full  rounded-md shadow-md border border-black/30 bg-[#fff] p-4">
        <div class="aspect-[4/3] w-full">
          <img class="mx-auto lg:max-w-[300px] md:max-w-[200px]" src="${user.image}" alt="${user.firstName}'s photo">
          <p class="sm:text-4xl text-base"><strong>${user.firstName} #${randomm}</strong></p>
          <p class="sm:text-2xl text-[12px]">${user.lastName}</p>
          <a href="/"
            class="duration-300 mt-4 bg-clifford px-[18px] py-[4px] sm:py-[6px] sm:px-[22px] sm:rounded-lg rounded-md text-white border border-clifford hover:bg-transparent hover:text-clifford md:text-xl text-[12px] inline-block">
          Buy
          </a>
          <a href="/"
            class="duration-300 mt-1 bg-white px-[18px] py-[4px] sm:py-[6px] sm:px-[22px] sm:rounded-lg rounded-md text-clifford border border-clifford hover:bg-clifford hover:text-white md:text-xl text-[12px] inline-block">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
    `;
  });
}

Print(users); // 🔄 Ma'lumotni chiqarish
