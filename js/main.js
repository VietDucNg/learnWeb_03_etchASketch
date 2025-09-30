const sketchBoard = document.querySelector('.sketchBoard');

let numGrid = 16;

for (let i=1;i<=numGrid*numGrid;i++) {
    let grid = document.createElement('div');
    let gridSize = sketchBoard.offsetWidth/numGrid;
    console.log(gridSize);
    grid.style.cssText = `width:${gridSize}px;height:${gridSize}px`;
    grid.classList.add('grid');
    sketchBoard.appendChild(grid);
}

const grids = document.querySelectorAll('.grid');
let isDrawing = false;

function changeBgColor() {
    isDrawing = true;
    this.style.backgroundColor = 'black';
}

grids.forEach(grid => {
  grid.addEventListener('mousedown', changeBgColor);
  grid.addEventListener('mouseover', function() {
    if (isDrawing) this.style.backgroundColor = 'black';
  });
});

document.addEventListener('mouseup', function() {
  isDrawing = false;
});
