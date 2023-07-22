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
import { cpuAttack, gameLoop, playerTurnAttack,game } from "./gameloop";
let player1 = player("1", true);
let player2 = player(0, true);
player1.getGameboard().createShip(1,[[2,3]])
player2.getGameboard().createShip(1,[[2,3]])
game(player1,player2)