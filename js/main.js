const DEFAULT_NUM_GRID = 16;

const sketchBoard = document.querySelector('.sketchBoard');
const slider = document.querySelector('.slider');
const pixelInfo = document.querySelector('.pixelInfo');

let numGrid = DEFAULT_NUM_GRID;

function drawGrid(numGrid) {
    let gridSize = sketchBoard.offsetWidth/numGrid;
    console.log(sketchBoard.offsetWidth)
    console.log(gridSize)
    for (let i=1;i<=(numGrid*numGrid);i++) {
        let grid = document.createElement('div');
        grid.style.cssText = `width:${gridSize}px;height:${gridSize}px`;
        grid.classList.add('grid');
        sketchBoard.appendChild(grid);
    }
}

// feature to draw
function getAllGrids() {
    return document.querySelectorAll('.grid');
}

function changeBgColor() {
    this.style.backgroundColor = 'black';
}

function mousedownOnGrid() {
    changeBgColor.call(this);
    let grids = getAllGrids();
    grids.forEach(grid => grid.addEventListener('mousemove',changeBgColor));
    document.addEventListener('mouseup',stopDrawing);
}

function stopDrawing() {
    let grids = getAllGrids();
    grids.forEach(grid => grid.removeEventListener('mousemove',changeBgColor));
    document.removeEventListener('mouseup',stopDrawing);
}

function applyDrawListener () {
    let grids = getAllGrids();
    grids.forEach(grid => grid.addEventListener('mousedown',mousedownOnGrid));
};

// feature to change number of grid pixels
function updatePixelInfo (numGrid){
    pixelInfo.textContent = `${numGrid} x ${numGrid}`;
}

function changeNumGrid (numGrid, grids) {
    grids.forEach(grid => sketchBoard.removeChild(grid));
    drawGrid(numGrid);
}

slider.addEventListener('input', function() {
    let numGrid = slider.value;
    updatePixelInfo(numGrid);
    changeNumGrid(numGrid, grids);
    grids = getAllGrids();
    applyDrawListener();
})

window.addEventListener('load', function() {
  drawGrid(numGrid);
  applyDrawListener();
});
