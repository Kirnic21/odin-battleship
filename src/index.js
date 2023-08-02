import "./style.css";
import { ship } from "./Ship";
import { gameboard ,getShipArray} from "./Gameboard";
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
import { gameLoopDom } from "./dragDrop";

const button = document.querySelector("#start");
const container = document.querySelector("#container")
let gameOn = false;
button.addEventListener("click", () => {
  const instructions = document.querySelector("#startgame")
  instructions.textContent = "Click to rotate the ship, Double click to place the ship"

  button.remove()
    let player1 = player("player 1", true);
    let cpu = player(0, false);
    makePlayerGrid();

    gameLoopDom(5,player1,cpu)
  } 
);
