function generateRGB() {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    return `rgb(${red},${green},${blue})`;
  }
  function generateColors() {
    const colors = document.querySelectorAll('.color');
    colors[1].style.backgroundColor = generateRGB();
    colors[2].style.backgroundColor = generateRGB();
    colors[3].style.backgroundColor = generateRGB();
  }
  function creatPixelBoard(size) {
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.innerHTML = '';
    for (let linha = 0; linha < size; linha += 1) {
      const linhaElement = document.createElement('div');
      linhaElement.classList.add('linha');
  
      for (let coluna = 0; coluna < size; coluna += 1) {
        const pixelElement = document.createElement('div');
        pixelElement.classList.add('pixel');
        linhaElement.appendChild(pixelElement);
      }
      pixelBoard.appendChild(linhaElement);
    }
  }
  function pixelClickListener() {
    // target= alvo
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.addEventListener('click', (event) => {
      const pixel = event.target;
      if (pixel.classList.contains('pixel')) {
        const selectedColor = document.querySelector('.selected');
        pixel.style.backgroundColor = selectedColor.style.backgroundColor;
      }
    });
  }
  function colorClickListener() {
    const colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', (event) => {
      const color = event.target;
      if (color.classList.contains('color')) {
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        color.classList.add('selected');
      }
    });
  }
  function clearClickListener() {
    const button = document.getElementById('clear-board');
    button.addEventListener('click', () => {
      const pixels = document.querySelectorAll('.pixel');
      pixels.forEach((pixel) => {
        const { style } = pixel;
        style.backgroundColor = 'white';
      });
    });
  }
  function createBoardListener() {
    const button = document.getElementById('generate-board');
    button.addEventListener('click', () => {
      const input = document.getElementById('board-size');
      if (!input.value) {
        alert('Board inválido!');
      } else if (input.value < 5) {
        creatPixelBoard(5);
      } else if (input.value > 50) {
        creatPixelBoard(50);
      } else creatPixelBoard(input.value);
    });
  }
  generateRGB();
  generateColors();
  creatPixelBoard(5);
  createBoardListener();
  pixelClickListener();
  colorClickListener();
  clearClickListener();