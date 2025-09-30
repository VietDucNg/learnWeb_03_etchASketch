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

// drawing feature
const grids = document.querySelectorAll('.grid');

function changeBgColor() {
    this.style.backgroundColor = 'black';
}

function mousedownOnGrid() {
    this.style.backgroundColor = 'black';
    grids.forEach(grid => grid.addEventListener('mousemove',changeBgColor));
    document.addEventListener('mouseup',stopDrawing);
}

function stopDrawing() {
    grids.forEach(grid => grid.removeEventListener('mousemove',changeBgColor));
    document.removeEventListener('mouseup',stopDrawing);
}

grids.forEach(grid => grid.addEventListener('mousedown',mousedownOnGrid));

