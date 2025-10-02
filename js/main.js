const DEFAULT_NUM_GRID = 16;
const DEFAULT_COLOR = '#00aafb';

const sketchBoard = document.querySelector('.sketchBoard');
const slider = document.querySelector('.slider');
const pixelInfo = document.querySelector('.pixelInfo');
const singleColorBtn = document.querySelector('.singleColorBtn');
const colorChoiceBtn = document.querySelector('.colorChoiceBtn');
const functionBtns = document.querySelectorAll('.functions-left button:not(.clearBtn');


let numGrid = DEFAULT_NUM_GRID;
let color = DEFAULT_COLOR;

function drawGrid(numGrid) {
    let gridSize = sketchBoard.offsetWidth/numGrid;
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
    if (singleColorBtn.classList.contains('active')) {
        this.style.backgroundColor = color;
    }
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

function removeGrids(grids) {
    grids.forEach(grid => sketchBoard.removeChild(grid));
}

function applyChangNumGridListener() {
    slider.addEventListener('input', function() {
        let numGrid = slider.value;
        let grids = getAllGrids();
        updatePixelInfo(numGrid);
        removeGrids(grids);
        drawGrid(numGrid);
        applyDrawListener();
})
}

// ////////////
function clearActiveClass() {
    functionBtns.forEach(btn => btn.classList.remove('active'));
}

function toggleActiveClass(btn) {
    btn.classList.toggle('active');
}

function updateColor() {
    color = colorChoiceBtn.value;
}

functionBtns.forEach(btn => btn.addEventListener('click', function () {
    clearActiveClass();
    toggleActiveClass(btn);
}));

colorChoiceBtn.addEventListener('input', updateColor);


window.addEventListener('load', function() {
  drawGrid(numGrid);
  applyDrawListener();
  applyChangNumGridListener();
});
