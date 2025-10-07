function createGrid() {
  // delete container contents
  gridContainer.textContent = '';

  // set css var for proper grid display
  setGridDimension(size);

  const totalCells = size * size;

  for (let i = 0; i < totalCells; i++) {
    const newDiv = document.createElement('div');
    gridContainer.appendChild(newDiv);
  }

  // add reseting the container for future 
}

function setGridDimension(n) {
  gridContainer.style.setProperty('--n', n)
}

function changeColor(target) {
  // do not change if target is container
  if (target.id) return;

  // get current background-color in hex format
  const currentColor = rgbToHex(target.style.backgroundColor || 'rgb(41, 41, 41)');

  // set background-color to next in gradient
  target.style.backgroundColor = returnNextColor(currentColor);
}

function returnNextColor(current) {
  const currentIndex = gradient.indexOf(current);

  if (gradient.length === currentIndex + 1) {
    // if current color is last, return it
    return gradient[gradient.length - 1];
  } else {
    return gradient[currentIndex + 1];
  }
}

function rgbToHex(rgb) {
  // match 3 values
  const values = rgb.match(/\d+/g);
  let hex = '#';

  for (const value of values) {
    hex += valueToHex(value);
  }

  return hex;
}

function valueToHex(v) {
  // convert string to int, convert back to string, but base16
  const hex = parseInt(v).toString(16);

  return (hex.length == 1) ? "0" + hex : hex;
}

function displaySize() {
  sizeDisplay.textContent = size;
}

function changeSize(target) {
  // if size isn't min or max at the moment, change it
  switch (target.id) {
    case 'size-up':
      if (size < 50) size++;
      break;
    case 'size-down':
      if (size > 2) size--;
      break;
  }

  displaySize();
  createGrid();
}

const gradient = ['#292929',
                  '#47453f',
                  '#656256',
                  '#837e6c',
                  '#a19b83',
                  '#bfb799',
                  '#ddd4b0',
                  '#fbf0c6',
]

const gridContainer = document.getElementById('grid'),
      buttonSizeUp = document.getElementById('size-up'),
      buttonSizeDown = document.getElementById('size-down'),
      buttonReset = document.getElementById('reset'),
      sizeDisplay = document.getElementById('size');

let size = 12;

createGrid();
displaySize();

gridContainer.addEventListener('mouseover', (e) => changeColor(e.target));

buttonSizeUp.addEventListener('click', (e) => changeSize(e.target));
buttonSizeDown.addEventListener('click', (e) => changeSize(e.target));