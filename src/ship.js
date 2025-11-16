export default class Ship {
  length;
  hits;
  sunk;

  constructor(length, hits, sunk = false) {
    this.hits = hits;
    this.length = length;
    this.sunk = sunk;
  }

  hit() {
    ++this.hits;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}
