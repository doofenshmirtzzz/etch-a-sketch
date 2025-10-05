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




const gridContainer = document.getElementById('grid');

createGrid(5, gridContainer);