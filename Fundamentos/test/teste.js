const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');

// window.getComputedStyle(document.getElementsByClassName('pixel')[0]).getPropertyValue('width')
function createPixel(container) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  container.appendChild(pixel);
}

function generateRandomColor() {
  const r = () => Math.floor(Math.random() * 256);
  const color = `rgb(${r()}, ${r()}, ${r()})`;

  return color;
}

const pixelContainer = document.getElementById('pixel-board');
function createBoard(size) {
  for (let index = 1; index <= size; index += 1) {
    createPixel(pixelContainer);
  }
}

function selectedClickHandler(event) {
  const hasSelected = document.querySelector('.selected');
  hasSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function selectColor() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', selectedClickHandler);
  }
}

function colorPixel() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = window
        .getComputedStyle(document.getElementsByClassName('selected')[0])
        .getPropertyValue('background-color');
    });
  }
}

// Create button
const buttonContainer = document.getElementById('button-container');
function createButton(text, id, container) {
  const button = document.createElement('button');
  button.innerText = text;
  button.id = id;
  container.appendChild(button);
}

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function buttonClearEventHandler() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);
}

// BONUS 1
const inputContainer = document.getElementById('input-container');
function createInput(id, container) {
  const input = document.createElement('input');
  input.type = 'number';
  input.min = 1;
  input.max = 50;
  input.id = id;
  input.size = 2;
  container.appendChild(input);
}

createInput('board-size', inputContainer);
createButton('VQV', 'generate-board', inputContainer);
createButton('Limpar', 'clear-board', buttonContainer);
buttonClearEventHandler();

const buttonCreateBoard = document.getElementById('generate-board');
const inputBox = document.getElementById('board-size');
const board = document.querySelector('#pixel-board');

function createBoardEventHandler() {
  if (inputBox.value < 0 || inputBox.value === '') {
    alert('Board inválido!');
  } else {
      const pixelsBox = document.querySelectorAll('.pixel');
      for (let index = 0; index < pixelsBox.length; index += 1) {
      pixelsBox[index].remove();
    }
    if(inputBox.value < 5){
      let size = 5 ** 2;
      for (let index = 0; index < size; index++) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      board.appendChild(pixel);
      let width = 5 * 43;
      board.style.width = width + 'px';
    }
      
    } else if (inputBox.value > 50) {
      let size = 50 ** 2;
      for (let index = 0; index < size; index++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        board.appendChild(pixel);
        let width = 50 * 43;
        board.style.width = width + 'px';
      }
    } else {
      let size = inputBox.value ** 2;
      for (let index = 0; index < size; index++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        board.appendChild(pixel);
        let width = inputBox.value * 43;
        board.style.width = width + 'px';
      }
    }
    selectColor();
    colorPixel();
  }
}

window.onload = function teste() {
  colors[0].classList.add('selected');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
  createBoard(25);
  board.style.width = 5 * 45 + 'px';
  firstColor.style.backgroundColor = generateRandomColor()
  secondColor.style.backgroundColor = generateRandomColor()
  thirdColor.style.backgroundColor = generateRandomColor()
  colorPixel();
  selectColor();
};

buttonCreateBoard.addEventListener('click', createBoardEventHandler);