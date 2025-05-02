const container = document.querySelector(".container");
let isMouseDown = false;
let gridSize = 16;
const CONTAINER_SIZE = 640;
const button = document.querySelector(".btn");

function createGrid() {
  let squareSize = CONTAINER_SIZE / gridSize;
  for (let i = 0; i < gridSize * gridSize; ++i) { 
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("id", `${i}`);
    square.style["width"] = `${squareSize}px`;
    square.style["height"] = `${squareSize}px`;
    container.appendChild(square);
  }

  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (isMouseDown) {
        square.style["background-color"] = "blue";
        console.log(square.id);
      }
    });
  });
}
createGrid();

function clearGrid() {
  let squares = document.querySelectorAll(".square");
  console.log(squares);
  squares.forEach((square) => {
    container.removeChild(square);
  });
}


button.addEventListener("click", () => {
  let size = prompt("Change grid size, enter side size: ", 16);
  while (size > 100 || size < 1) {
    size = parseInt(prompt("You enter wrong size! Enter valid 1 <= x <= 100"));
  }
  gridSize = size;
  clearGrid();
  createGrid();
});

document.addEventListener("mousedown", (e) => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});


