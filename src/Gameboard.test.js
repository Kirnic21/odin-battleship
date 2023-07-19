import { gameboard } from "./Gameboard";
import { ship } from "./Ship";

let gameboard2 = gameboard();

let testShip = ship(1, [[3, 4]]);
let testShip2 = ship(1, [[4, 3]]);
let testShip3 = ship(2, [
  [3, 4],
  [3, 5],
]);
console.log(testShip)
test("Ship created", () => {
  expect(JSON.stringify(gameboard2.createShip(1, [[3, 4]])[0])).toEqual(
    JSON.stringify(testShip),
  );
});
test("Ship cannot be created created", () => {
  expect(gameboard2.createShip(1, [[3, 4]])).toEqual("no");
});

test("Ship created", () => {
  expect(JSON.stringify(gameboard2.createShip(3, [[3, 1]])[1])).toEqual(
    JSON.stringify(testShip3),
  );
});
test("Ship created", () => {
  expect(JSON.stringify(gameboard2.createShip(3, [[4, 3]])[1])).toEqual(
    JSON.stringify(testShip3),
  );
});
gameboard2.createShip(1, [1, 1], [3, 2]);
test("Check if there is a shipn in this coordinate!", () => {
  expect(JSON.stringify(gameboard2.verifyIfHasShip([3, 4]))).toEqual(
    JSON.stringify(testShip),
  );
});
console.log(gameboard2.verifyIfHasShip([3, 4]))

test("Check if there is a shipn in this coordinate!", () => {
  expect(gameboard2.verifyIfhasAShipInCoordinate([3, 4])).toEqual(
    true,
  );
});
test("Check if there is a shipn in this coordinate!", () => {
  expect(gameboard2.verifyIfhasAShipInCoordinate([0, 0])).toEqual(
    false,
  );
});
test("Check if there is a ship in this coordinate 2 !", () => {
  expect(JSON.stringify(gameboard2.verifyIfHasShip([4, 3]))).toEqual(
    JSON.stringify(testShip2),
  );
});
test("Check if it returns something if it does not exists", () => {
  expect(JSON.stringify(gameboard2.verifyIfHasShip([2, 3]))).toBe(undefined);
});
test("Ship got hit and sunk!!", () => {
  expect(gameboard2.receiveAttack([1, 1])).toBe(true);
});

test("Ship got hit and  not sunk!!", () => {
  expect(gameboard2.receiveAttack([3, 1])).toBe(false);
});
test("Ship cant attack in a place it doesnt have a ship", () => {
  expect(gameboard2.receiveAttack([5, 3])).toEqual([
    [1, 1],
    [3, 1],
    [5, 3],
  ]);
});
test("Ship cant attack in a place it doesnt have a ship", () => {
  expect(gameboard2.receiveAttack([8, 3])).toEqual([
    [1, 1],
    [3, 1],
    [5, 3],
    [8, 3],
  ]);
});
test("Are all ships sunk,no", () => {
  expect(gameboard2.checkIfShipsAreSunk()).toEqual(false);
});
let gameboard3 = gameboard();
gameboard3.createShip(1, [[3, 4]]);
gameboard3.receiveAttack([3, 4]);
test("Are all ships sunk,yes", () => {
  expect(gameboard3.checkIfShipsAreSunk()).toEqual(true);
});

test("Are all ships sunk,yes", () => {
  expect(gameboard3.checkIfShipsAreSunk()).toEqual(true);
});
