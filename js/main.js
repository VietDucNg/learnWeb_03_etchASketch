const sketchBoard = document.querySelector('.sketchBoard');
const slider = document.querySelector('.slider');
const pixelInfo = document.querySelector('.pixelInfo');

let numGrid = 16;

function drawGrid(numGrid) {
    let gridSize = sketchBoard.offsetWidth/numGrid;
    for (let i=1;i<=numGrid*numGrid;i++) {
        let grid = document.createElement('div');
        grid.style.cssText = `width:${gridSize}px;height:${gridSize}px`;
        grid.classList.add('grid');
        sketchBoard.appendChild(grid);
    }
}

drawGrid(numGrid);


// feature to draw
function getAllGrids() {
    return document.querySelectorAll('.grid');
}

function changeBgColor() {
    this.style.backgroundColor = 'black';
}

function mousedownOnGrid() {
    this.style.backgroundColor = 'black';
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

applyDrawListener();

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
    let grids = getAllGrids();
    changeNumGrid(numGrid, grids);
    applyDrawListener();
})