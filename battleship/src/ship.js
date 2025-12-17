export default class Ship {
  length;
  hits;
  sunk;

  constructor(length, hits = 0, sunk = false) {
    this.hits = hits;
    this.length = length;
    this.sunk = sunk;
  }

  hit() {
    ++this.hits;
    this.isSunk();
  }

  isSunk() {
    this.sunk = (this.hits >= this.length);
  }
}

