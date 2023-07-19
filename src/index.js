import "./style.css";
import { ship } from "./Ship";
import { gameboard } from "./Gameboard";
import { makePlayerGrid } from "./Interface";
import { makeEnemyGrid } from "./Interface";
import { displayCoordinates,displayCoordinatesEnemy ,displayReceivedAttack,inputAttack} from "./Interface";
makePlayerGrid()
makeEnemyGrid()
displayCoordinates()
displayCoordinatesEnemy()
displayReceivedAttack()

inputAttack()