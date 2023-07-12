import { ship } from "./Ship";
const shipNew = ship(2)

test("Ship got hit 2 times!", () => {
  expect(shipNew.gotHit()).toBe(1);
});
test("Ship got hit 2 times!", () => {
  expect(shipNew.gotHit()).toBe(2);
});
test("Ship is sunk with 0 length ", () => {
  expect(ship(0).isSunk()).toBeTruthy();
});
test("Ship is sunk with 2 length and 2 hits", () => {
  expect(shipNew.isSunk()).toBeTruthy();
});
const shipNew2 = ship(3)
shipNew2.gotHit()
shipNew2.gotHit()
test("Ship is not sunk with 3 length and 2 hits", () => {
  expect(shipNew2.isSunk()).toBeFalsy();
});
