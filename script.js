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
        let opacity = getComputedStyle(square).getPropertyValue("opacity");
        square.style["opacity"] = Number(opacity) + 0.1;
        let color = `#${randomizeColor()}`;
        square.style["background-color"] = color;
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

function randomizeColor() {
  let color = "";
  for (let i = 0; i < 6; ++i) {
    color += Math.floor(Math.random() * 15).toString(16);
  }
  return color;
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
randomizeColor();

