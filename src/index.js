import "./style.css";
import { ship } from "./Ship";
import { gameboard } from "./Gameboard";
import { makePlayerGrid } from "./Interface";
import { makeEnemyGrid } from "./Interface";
import {
  displayCoordinates,
  displayCoordinatesEnemy,
  displayReceivedAttack,
  inputAttack,
  aiInputAttack,
} from "./Interface";
import { player } from "./player";
import { cpuAttack, gameLoop, playerTurnAttack, game } from "./gameloop";
import { dragDrop } from "./dragDrop";
const button = document.querySelector("#start");
let gameOn = false;
button.addEventListener("click", () => {
  game("Kirnic");
});
