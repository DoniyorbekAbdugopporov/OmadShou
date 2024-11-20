const titleEl = document.querySelector(".title");
const btnEl = document.querySelector(".btn");
const audioEl = document.querySelector(".audio");
const headerEl = document.querySelector(".header");
const mainEl = document.querySelector(".main");
const phoneInput = document.getElementById("phoneInput");
const modal = document.getElementById("modal");
const phoneList = document.getElementById("phoneList");

const TEL = [
  "+998 91 999 77 81",
  "+998 99 987 43 32",
  "+998 94 464 77 89",
  "+998 91 647 54 98",
  "+998 90 987 56 94",
  "+998 91 757 04 09",
  "+998 94 785 33 33",
  "+998 91 859 88 44",
  "+998 90 889 64 81",
  "+998 94 784 84 89",
  "+998 93 849 74 78",
  "+998 99 999 77 88",
  "+998 94 441 41 88",
  "+998 33 878 44 64",
  "+998 93 840 82 81",
];

function addDarkMode() {
  headerEl.classList.toggle("dark");
  mainEl.classList.toggle("dark");
}

function addPhoneNumber() {
  const newPhoneNumber = phoneInput.value.trim();
  if (newPhoneNumber) {
    TEL.push(newPhoneNumber);
    alert(`Telefon raqam qo'shildi: ${newPhoneNumber}`);
    phoneInput.value = "";
  } else {
    alert("Telefon raqamni kiriting!");
  }
}

function getAllNumbers() {
  phoneList.innerHTML = "";
  TEL.forEach((number, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${number}`;
    phoneList.appendChild(listItem);
  });
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function randomTel() {
  btnEl.setAttribute("disabled", true);
  const interval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * TEL.length);
    titleEl.textContent = TEL[randomNumber];
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    btnEl.removeAttribute("disabled");
    TEL.splice(TEL.indexOf(titleEl.textContent), 1);
    // audioEl.play();
  }, 2000);
}

btnEl.addEventListener("click", randomTel);
