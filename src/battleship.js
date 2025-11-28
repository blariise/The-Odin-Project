import Player from "./player.js";

export default class Battleship {
  players = new Array(2);
  isGameOver;
  playerToHit;

  constructor(playAgainstBot = true) {
    this.players[0] = new Player("human");
    this.players[1] = playAgainstBot ? new Player("bot") : new Player("human");
    this.isGameOver = false;
    this.playerToHit = this.players[0];
  }

  playerTurn(x, y) {
    const secondPlayer = this.#getSecondPlayer();
    const hitOrMiss = secondPlayer.gameboard.receiveAttack(x, y);

    switch (hitOrMiss) {
      case "miss":
        console.log("miss");
        this.playerToHit = secondPlayer;
        return;
      case "hit":
        if (secondPlayer.gameboard.isGameOver()) {
          this.isGameOver = true;
          console.log(`Game over ${activePlayer} won!`); // to remove
          return;
        }
        break;
      default:
        return;
    }
  }

  botTurn() {
    const x = getRandomInt(10);
    const y = getRandomInt(10);
    const humanPlayer = players[0];
    if (!humanPlayer.gameboard.receiveAttack(x, y)) {
      return false;
    }
    if (humanPlayer.gameboard.isGameBoard()) {
      this.isGameOver();
      console.log(`Game over bot won!`);
    }
    activePlayer = player;
    return true;
  }

  #getSecondPlayer() {
    return this.playerToHit === this.players[0] ? this.players[1] : this.players[0];
  };
}
