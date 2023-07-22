import { player } from "./player";

let player1 = player("Kirnic", true);
player1.getGameboard().createShip(1, [[2, 3]]);
let player2test = player("Sylvester", true);
let player2 = player(0, true);
test("player end turn !", () => {
  expect(player1.endTurn()).toBe(false);
});
test("player start turn !", () => {
  expect(player1.startTurn()).toBe(true);
});
test("turn into AI !", () => {
  expect(player2.turnIntoAi()).toBe(true);
});
test("NOT AI !", () => {
  expect(player1.turnIntoAi()).toBe(false);
});

test("Attack other Gameboard", () => {
  expect(player2test.attackOtherGameboard(player1, [2, 3])).toBe(true);
});
test("Turn change after attack", () => {
  expect(player2test.getPlayerTurn()).toBe(false);
});
test("Turn change after attack", () => {
  expect(player1.getPlayerTurn()).toBe(true);
});
test("playername is Kirnic", () => {
  expect(player1.getPlayerName()).toBe("Kirnic");
});
