
let numSquares = 16;
let grid = numSquares * numSquares;
const container = document.querySelector(".container");

function createGrid() {
    for (i = 0; i < grid; i++) {
        let square = document.createElement("div");
        container.appendChild(square);
    }
}

createGrid();