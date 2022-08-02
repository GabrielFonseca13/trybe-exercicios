const boardElement = document.getElementById('pixel-board');
const colorPaletteElement = document.getElementById('color-palette');
const clearBtnElement = document.getElementById('clear-board');
const generateBoardBtnElement = document.getElementById('generate-board');
const boardSizeInputElement = document.getElementById('board-size');
const colorElements = colorPaletteElement.children;
const boardPixels = boardElement.children;
const resetColor = 'rgb(255,255,255)';
let originalColor = 'rgb(255,255,255)';
let mouseState = false;

/* \\\\\\\\\\\\\\\\ BOARD FUNCTIONS //////////////// */

function checkInput() {
  if (boardSizeInputElement.value >= 5 && boardSizeInputElement.value <= 50) {
    return parseInt(boardSizeInputElement.value, 10);
  }

  if (boardSizeInputElement.value > 50) {
    return 50;
  }

  return false;
}

function getBoardSize() {
  let boardSize = 5;
  const inputVal = checkInput();

  if (typeof inputVal === 'number') {
    boardSize = inputVal;
  }

  return boardSize;
}

function getSelectedBgColor() {
  const selectedColorCss = getComputedStyle(document.querySelector('.selected'));
  const selectedColorValue = selectedColorCss.getPropertyValue('background-color');

  return selectedColorValue;
}

function setBoardWidth(boardDimension) {
  const pixelDiv = document.querySelector('.pixel');
  const pixelDivCssStyle = getComputedStyle(pixelDiv);
  const pixelWidth = pixelDivCssStyle.getPropertyValue('width').split('px', 1);
  const boardWidth = boardDimension * parseInt(pixelWidth, 10);

  boardElement.style.width = `${boardWidth}px`;
}

/* \\\\\\\\ PIXEL HANDLER FUNCTIONS //////// */

function removePixels(currentBoardSize, newBoardSize) {
  for (let index = currentBoardSize - 1; index >= newBoardSize; index -= 1) {
    boardPixels[index].remove();
  }
}

function addPixels(currentBoardSize, newBoardSize) {
  for (let index = 0; index < (newBoardSize - currentBoardSize); index += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.classList.add('pixel');
    pixelDiv.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });
    boardElement.appendChild(pixelDiv);
  }
}

function clearPixels() {
  for (let index = 0; index < boardPixels.length; index += 1) {
    if (boardPixels[index].classList.contains('painted')) {
      boardPixels[index].style.backgroundColor = resetColor;
      boardPixels[index].classList.remove('painted');
    }
  }
}

function generatePixelBoard() {
  const currentBoardSize = parseInt(boardPixels.length, 10);
  const boardSize = getBoardSize() ** 2;

  if (boardSize >= currentBoardSize) {
    addPixels(currentBoardSize, boardSize);
  } else {
    removePixels(currentBoardSize, boardSize);
  }

  clearPixels();
  setBoardWidth(getBoardSize());
}

function paintPixel(e) {
  e.target.style.backgroundColor = getSelectedBgColor();
  e.target.classList.add('painted');
  console.log(1);
}

function previewPaintedPixel(e) {
  const regexNums = /\d*\d/g;
  const colors = getSelectedBgColor().match(regexNums);
  const currentElement = e.target;

  if (e.type === 'mouseover' && currentElement.style.backgroundColor !== getSelectedBgColor()) {
    originalColor = e.target.style.backgroundColor;
    currentElement.style.backgroundColor = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.8)`;
  }

  if (e.type === 'mouseout') {
    if (currentElement.style.backgroundColor === getSelectedBgColor()) {
      originalColor = getSelectedBgColor();
    }
    currentElement.style.backgroundColor = originalColor;
  }
}

function previewOrPaint(e) {
  if (!mouseState) {
    previewPaintedPixel(e);
  } else {
    paintPixel(e);
  }
}

/* \\\\\\\\ END PIXEL HANDLER FUNCTIONS //////// */

/* \\\\\\\\\\\\\\\\ END BOARD FUNCTIONS //////////////// */

/* \\\\\\\\\\\\\\\\ PALETTE FUNCTIONS //////////////// */

function removePreviousSelection() {
  for (let index = 0; index < colorElements.length; index += 1) {
    if (colorElements[index].classList.contains('selected')) {
      colorElements[index].classList.remove('selected');
    }
  }
}

function selectColor({ target }) {
  if (!target.classList.contains('selected')) {
    removePreviousSelection();
    target.classList.add('selected');
  }
}

function generateRandomColor() {
  const rgb = {
    R: Math.round(Math.random() * 255),
    G: Math.round(Math.random() * 255),
    B: Math.round(Math.random() * 255),
  };

  return `rgb(${rgb.R}, ${rgb.G}, ${rgb.B})`;
}

function generateColorPalette() {
  for (let index = 1; index < colorElements.length; index += 1) {
    colorElements[index].style.backgroundColor = generateRandomColor();
  }
}

/* \\\\\\\\\\\\\\\\ END PALETTE FUNCTIONS //////////////// */

/* \\\\\\\\\\\\\\\\ LOOP EVENT FUNCTIONS //////////////// */

function addSelectColorEvent() {
  for (let index = 0; index < colorElements.length; index += 1) {
    colorElements[index].addEventListener('click', selectColor);
  }
}

function addPaintPixelEvent() {
  for (let index = 0; index < boardPixels.length; index += 1) {
    boardPixels[index].addEventListener('click', paintPixel);
    boardPixels[index].addEventListener('mouseover', previewOrPaint);
    boardPixels[index].addEventListener('mouseout', previewOrPaint);
  }
}

/* \\\\\\\\\\\\\\\\ END LOOP EVENT FUNCTIONS //////////////// */

window.onload = () => {
  generatePixelBoard();
  generateColorPalette();
  addPaintPixelEvent();
  addSelectColorEvent();
  boardElement.addEventListener('mousedown', () => { mouseState = true; });
  boardElement.addEventListener('mouseup', () => { mouseState = false; });

  clearBtnElement.addEventListener('click', clearPixels);
  generateBoardBtnElement.addEventListener('click', () => {
    generatePixelBoard();
    addPaintPixelEvent();

    if (!checkInput()) {
      alert('Board inválido!');
    }
  });
};