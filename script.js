
let numSquares = 16;
const container = document.querySelector(".grid-container");
const btnChange = document.querySelector(".btnChange");
const btnClear = document.querySelector(".btnClear");

function createGrid() {
    const dimension = 480 / numSquares;
    for (let i = 0; i < numSquares * numSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("gridSquare");
        square.style.width = `${dimension}px`
        square.style.height = `${dimension}px`
        container.appendChild(square);
    }
}

createGrid();

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("gridSquare")) {
        e.target.style.backgroundColor = "blue";
    }
    
})

btnClear.addEventListener("click", (e) => {
    const allSquares = document.querySelectorAll(".gridSquare");
    for (const square of allSquares) { 
        square.style.backgroundColor = "white";
    }
})

btnChange.addEventListener("click", (e) => {
    const newSize = prompt("Enter new grid size");
    if (newSize > 99) {
        alert("Your number must be less than 100.")
    } else {
        numSquares = Number(newSize);
        grid = numSquares * numSquares;
        container.innerHTML = "";
        createGrid();
    }
    
} )