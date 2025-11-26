import "./styles.css";
import Battleship from "./battleship.js";

const battleship = new Battleship();
const player1BoardDiv = document.querySelector(".player1.board");
const player2BoardDiv = document.querySelector(".player2.board");

initGame();


function initGame() {
  const boardsDiv = document.querySelector(".boards");
  boardsDiv.addEventListener("click", (e) => {
    if (e.target.className == "cell") {
      const playerBoardClickSource = e.target.parentElement.parentElement.parentElement.classList[0];
      const x = e.target.dataset.x;
      const y = e.target.dataset.y;
      gameCycle(playerBoardClickSource, x, y);
    }
  });
  
  renderBoard(player1, player1BoardDiv);
  renderBoard(player2, player2BoardDiv);
  setCellStatusOnBoard(player1, player1BoardDiv);
}

function gameCycle(playerBoardClickSource, x, y) {
  if (activePlayer == player1 && playerBoardClickSource == "player2") {
    playerTurn(x, y);
  } else if (activePlayer == player2 && playerBoardClickSource == "player1"){
    computerTurn(x, y);
  }
}

function playerTurn(x, y) {
  const board = player2.gameboard;
  if (!board.receiveAttack(x, y)) {
    return;
  }
  setCellStatusOnBoard(player2, player2BoardDiv);
  activePlayer = player2;
}

function computerTurn(x, y) {
  const board = player1.gameboard;
  if (!board.receiveAttack(x, y)) {
    return;
  }
  setCellStatusOnBoard(player1, player1BoardDiv);
  activePlayer = player1;
}

function renderBoard(player, playerBoardDiv) {
  const boardTable = createBoardDOM();
  playerBoardDiv.appendChild(boardTable);
}

function setCellStatusOnBoard(player, playerBoardDiv) {
  const rowNodes = playerBoardDiv.childNodes[0].childNodes;
  const playerBoard = player.gameboard.board;
  let x = 0;
  playerBoard.forEach((row) => {
    let y = 0;
    row.forEach((cell) => {
      const cellNodes = rowNodes[y].childNodes;
      const cellDOM = cellNodes[x];
      switch(cell.value) {
        case 1:
          cellDOM.dataset.status = "ship";
          break;
        case 0:
          cellDOM.dataset.status = "clear";
          break;
        case -1:
          cellDOM.dataset.status = "hit";
          break;
        case -2:
          cellDOM.dataset.status = "miss";
          break;
      }
      ++y;
    });
    ++x;
  });
}

function createBoardDOM() {
  const table = document.createElement("table");
  for (let y = 0; y < 10; ++y) {
    const tr = document.createElement("tr");
    tr.className = "board-row";
    for (let x = 0; x < 10; ++x) {
      const td = document.createElement("td");
      td.className = "cell";
      td.dataset.x = x;
      td.dataset.y = y;
      td.dataset.status = "clear";
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}

