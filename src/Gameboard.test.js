import { gameboard } from "./Gameboard";
import { ship } from "./Ship";

let gameboard2 = gameboard();
let testShip = ship(1, [[3, 4]]);
let testShip2 = ship(1, [[4, 3]]);
let testShip3 = ship(2, [[3, 4]]);
test("Ship created", () => {
  expect(JSON.stringify(gameboard2.createShip(1, [[3, 4]])[0])).toEqual(JSON.stringify(testShip));
});
test("Ship created", () => {
  expect(JSON.stringify(gameboard2.createShip(2, [[3, 4]])[1])).toEqual(JSON.stringify(testShip3));
});
test("Check if there is a shipn in this coordinate!", () => {
  expect(JSON.stringify(gameboard2.verifyIfHasShip([3,4]))).toEqual(JSON.stringify(testShip));
});
gameboard2.createShip(1,[[4,3]])
test("Check if there is a shipn in this coordinate 2 !", () => {
  expect(JSON.stringify(gameboard2.verifyIfHasShip([4,3]))).toEqual(JSON.stringify(testShip2));
});
test("Check if it returns something if it does not exists", () => {
  expect(JSON.stringify(gameboard2.verifyIfHasShip([2,3]))).toBe(undefined)
});