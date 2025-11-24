import Ship from "./ship.js";

describe("Ship class", () => {
  test("hit()", () => {
    const ship = new Ship(0, 2);
    ship.hit();
    expect(ship.hits).toBe(3);
  });
  
  test("sunk", () => {
    const ship = new Ship(5, 0);
    ship.hit();
    expect(ship.sunk).toBeFalsy();
    ship.hit();
    ship.hit();
    expect(ship.sunk).toBeFalsy();
    ship.hit();
    ship.hit();
    expect(ship.sunk).toBeTruthy();
  });
});
