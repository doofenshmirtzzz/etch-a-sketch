function createGrid(size, target) {
  // !!! add a check for invalid size when adding user input

  const totalCells = size * size;

  for (let i = 0; i < totalCells; i++) {
    const newDiv = document.createElement('div');
    target.appendChild(newDiv);
  }
}




const gridContainer = document.getElementById('grid');

createGrid(2, gridContainer);