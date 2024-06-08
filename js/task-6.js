const inputBox = document.querySelector("input");
const createBox = document.querySelector('[data-create]');
const destroyBox = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes')


createBox.addEventListener('click', handlerCreate);

function handlerCreate() {
  const amount = Number(inputBox.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputBox.value = '';
  }
};



destroyBox.addEventListener('click', handlerDestroy)

function handlerDestroy() {
  boxContainer.innerHTML = '';
};


function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
    size += 10;
  }
  boxContainer.append(...boxes);
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

