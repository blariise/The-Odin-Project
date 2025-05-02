const container = document.querySelector(".container");

function createGrid() {
  for (let i = 0; i < 16 * 16; ++i) { 
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    container.appendChild(square);
  }
}


createGrid();
