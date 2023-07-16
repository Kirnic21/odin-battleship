import { player } from "./player";
let player1 = player("Kirnic", true);
test("player end turn !", () => {
  expect(player1.endTurn()).toBe(false);
});
test("player start turn !", () => {
  expect(player1.startTurn()).toBe(true);
});
