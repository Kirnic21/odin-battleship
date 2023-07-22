import { player } from "./player";
import { gameboard } from "./Gameboard";
import { displayReceivedAttack, inputAttack, aiInputAttack, removeAllChildNodes ,makePlayerGrid,makeEnemyGrid} from "./Interface";
let player1 = player("a", true);
let player2 = player(0, false);
const playerTurnAttack = (user, enemy) => {
  let playerTurn = user.getPlayerTurn();

  if (playerTurn === true) {
    inputAttack(user, enemy);
    user.endTurn();
    enemy.startTurn();
  }
};
const cpuAttack = (cpu, user) => {
  let cpuTurn = cpu.getPlayerTurn();

  if (cpuTurn === true) {
    aiInputAttack(cpu.aiBehavior(user), cpu, user);
    cpu.endTurn();
    user.startTurn();
  }
};
const gameLoop = (user, cpu) => {
  const userGameboardDOM = document.querySelectorAll(".grid-item");
  const enemyGameboardDOM = document.querySelectorAll(".grid-item-enemy");
  const gameboardEnemy = cpu.getGameboard();
  const container = document.querySelector("#container")
  enemyGameboardDOM.forEach((element) => {
    element.addEventListener("click", () => {
      if (user.getPlayerTurn() === true) {
        let xCoordinate = parseInt(element.dataset.coordinateX);
        let yCoordinate = parseInt(element.dataset.coordinateY);

       
        if (
          gameboardEnemy.ifHasShip([xCoordinate, yCoordinate]) &&
          !gameboardEnemy.ifHasCoordinate([xCoordinate, yCoordinate])
        ) {
          gameboardEnemy.receiveAttack([xCoordinate, yCoordinate]);
          element.classList.add("attacked");
          cpu.startTurn();
          user.endTurn();
          cpuAttack(cpu, user);
          if (
            cpu.getGameboard().checkIfShipsAreSunk() === true ||
            user.getGameboard().checkIfShipsAreSunk() === true
          ) {
            if(cpu.getGameboard().checkIfShipsAreSunk() === true)
            {
            const wonText = document.createElement("div")
            wonText.textContent = user.getPlayerName() + " won"
            removeAllChildNodes(container)
            container.appendChild(wonText)
            }
            else if(user.getGameboard().checkIfShipsAreSunk() === true)
            {
            const wonText = document.createElement("div")
            wonText.textContent = "CPU won "
            removeAllChildNodes(container)
            container.appendChild(wonText)
            } 
          }
        } else if (!gameboardEnemy.ifHasCoordinate([xCoordinate, yCoordinate])) {
          gameboardEnemy.receiveAttack([xCoordinate, yCoordinate]);
          element.classList.add("missed");
          user.endTurn();
          cpu.startTurn();
          cpuAttack(cpu, user);
          if (
            cpu.getGameboard().checkIfShipsAreSunk() === true ||
            user.getGameboard().checkIfShipsAreSunk() === true
          ) {
            if(cpu.getGameboard().checkIfShipsAreSunk() === true)
            {
            const wonText = document.createElement("div")
            wonText.textContent = user.getPlayerName() + " won"
            removeAllChildNodes(container)
            container.appendChild(wonText)
            }
            else if(user.getGameboard().checkIfShipsAreSunk() === true)
            {
            const wonText = document.createElement("div")
            wonText.textContent = "CPU won "
            removeAllChildNodes(container)
            container.appendChild(wonText)
            } 
          }
        }
      }
    });
  });
};
const game = (user,cpu)=>{
  makePlayerGrid();
  makeEnemyGrid();
  gameLoop(user,cpu)
}
export { playerTurnAttack, cpuAttack, gameLoop,game };
