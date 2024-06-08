const changeColor = document.querySelector(".change-color");
const bodyColor = document.querySelector('body');
const color = document.querySelector(".color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener('click', handlerColor);
function handlerColor() {
  let result = getRandomHexColor();
  bodyColor.style.backgroundColor = result;
  color.textContent = result;
};

