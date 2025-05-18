// ! Login

const form = document.getElementById("userrForm");
const userrList = document.getElementById("userrList");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Input qiymatlarini localStorage'dan olish
nameInput.value = localStorage.getItem("inputName") || "";
emailInput.value = localStorage.getItem("inputEmail") || "";

// Input har safar o'zgarganda localStorage'ga yozish
nameInput.addEventListener("input", () => {
  localStorage.setItem("inputName", nameInput.value);
});

emailInput.addEventListener("input", () => {
  localStorage.setItem("inputEmail", emailInput.value);
});

// Saqlangan foydalanuvchilarni olish
let userss = JSON.parse(localStorage.getItem("userss")) || [];

// Foydalanuvchilar ro'yxatini chiqarish
function renderUsers() {
  userrList.innerHTML = "";
  userss.forEach((userr) => {
    const li = document.createElement("li");
    li.textContent = `${userr.name} - ${userr.email}`;
    userrList.appendChild(li);
  });
}

// Formani yuborish
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name && email) {
    const userr = { name, email };
    userss.push(userr);
    localStorage.setItem("userss", JSON.stringify(userss));
    renderUsers();
    form.reset();
    localStorage.removeItem("inputName");
    localStorage.removeItem("inputEmail");
  }
});

renderUsers();
