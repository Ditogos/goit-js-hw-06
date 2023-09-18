const spanColor = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");
const bodyColor = document.body;

function getRandomBackgroundColor() {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}

buttonColor.addEventListener("click", getRandomBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
