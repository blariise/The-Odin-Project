import "./styles.css";
import Gameboard from "./gameboard.js";
import Ship from "./gameboard.js";


const gb = new Gameboard();
renderBoard();

function renderBoard() {
  const boardDiv = document.querySelector(".board");
  const table = createBoardDOM();
  boardDiv.appendChild(table);
}

function createBoardDOM() {
  const table = document.createElement("table");
  for (let x = 0; x < gb.height; ++x) {
    const tr = document.createElement("tr");
    tr.className = "board-row";
    for (let y = 0; y < gb.width; ++y) {
      const td = document.createElement("td");
      td.className = "cell";
      td.dataset.x = y;  // its
      td.dataset.y = x;  // good
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}

