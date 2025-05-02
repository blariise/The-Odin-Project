const container = document.querySelector(".container");
let isMouseDown = false;

function createGrid() {
  for (let i = 0; i < 16 * 16; ++i) { 
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("id", `${i}`);
    container.appendChild(square);
  }
}
createGrid();

document.addEventListener("mousedown", (e) => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    if (isMouseDown) {
      square.style["background-color"] = "blue";
      console.log(square.id);
    }
  });
});


