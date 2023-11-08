const butt = document.querySelector(".change-color");
const backcol = document.querySelector(".color");
butt.addEventListener("click", getRandomHex);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function getRandomHex() {
  const random = getRandomHexColor();
  document.body.style.backgroundColor = random;
  backcol.textContent = random;
}
