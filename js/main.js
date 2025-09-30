const sketchBoard = document.querySelector('.sketchBoard');

let numGrid = 16;

for (let i=1;i<=numGrid*numGrid;i++) {
    let grid = document.createElement('div');
    let gridSize = sketchBoard.offsetWidth/numGrid;
    console.log(gridSize);
    grid.textContent = '.';
    grid.style.cssText = `width:${gridSize}px;height:${gridSize}px`;
    grid.classList.add('grid');
    sketchBoard.appendChild(grid);
}

function changeBgColor() {
    this.style.backgroundColor = 'black';
}

const grids = document.querySelectorAll('.grid');
grids.forEach(grid => grid.addEventListener('click',changeBgColor));

