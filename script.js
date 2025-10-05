function createGrid(size, target) {
  // !!! add a check for invalid size when adding user input

  // set css var for proper grid display
  setGridDimension(size, target);

  const totalCells = size * size;

  for (let i = 0; i < totalCells; i++) {
    const newDiv = document.createElement('div');
    target.appendChild(newDiv);
  }

  // add reseting the container for future 
}

function setGridDimension(n, target) {
  target.style.setProperty('--n', n)
}

function changeColor(target, gradient) {
  const currentColor = rgbToHex(target.style.backgroundColor || 'rgb(41, 41, 41)');

  target.style.backgroundColor = returnNextColor(gradient, currentColor)
}

function returnNextColor(gradient, current) {
  const currentIndex = gradient.indexOf(current);

  if (gradient.length === currentIndex + 1) {
    return gradient[gradient.length - 1];
  } else {
    return gradient[currentIndex + 1];
  }
}

function rgbToHex(rgb) {
  const values = rgb.match(/\d+/g);
  let hex = '#';

  for (const value of values) {
    hex += valueToHex(value);
  }

  return hex;
}

function valueToHex(v) {
  const hex = parseInt(v).toString(16);
  return (hex.length == 1) ? "0" + hex : hex;
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

const gridContainer = document.getElementById('grid');

gridContainer.addEventListener('mouseover', (e) => changeColor(e.target, gradient));

createGrid(6, gridContainer);