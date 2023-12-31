import { player } from "./player";
import { gameboard } from "./Gameboard";
import {
  displayReceivedAttack,
  inputAttack,
  aiInputAttack,
  removeAllChildNodes,
  makePlayerGrid,
  makeEnemyGrid,
  shipsEnemyDom,
} from "./Interface";
import { gameLoopDom} from "./dragDrop";

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
  const enemyGameboardDOM = document.querySelectorAll(".grid-item-enemy");
  const gameboardEnemy = cpu.getGameboard();
  const gameboardContainer = document.querySelector(".gameboard-container");
  const gameboardContainer2 = document.querySelector(".gameboard-container2");

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
            if (cpu.getGameboard().checkIfShipsAreSunk() === true) {
              const wonText = document.createElement("div");
              wonText.textContent = user.getPlayerName() + " won";
              removeAllChildNodes(gameboardContainer);
              removeAllChildNodes(gameboardContainer2);
              
              const instructions = document.querySelector("#startgame")
              instructions.textContent = "player 1 won! reload the page to play again"
              
            } else if (user.getGameboard().checkIfShipsAreSunk() === true) {
              const instructions = document.querySelector("#startgame")
              instructions.textContent = "player 1 won! reload the page to play again"
              removeAllChildNodes(gameboardContainer);
              removeAllChildNodes(gameboardContainer2);
              
            }
          }
        } else if (
          !gameboardEnemy.ifHasCoordinate([xCoordinate, yCoordinate])
        ) {
          gameboardEnemy.receiveAttack([xCoordinate, yCoordinate]);
          element.classList.add("missed");
          user.endTurn();
          cpu.startTurn();
          cpuAttack(cpu, user);
          if (
            cpu.getGameboard().checkIfShipsAreSunk() === true ||
            user.getGameboard().checkIfShipsAreSunk() === true
          ) {
            if (cpu.getGameboard().checkIfShipsAreSunk() === true) {
              const wonText = document.createElement("div");
          
              const instructions = document.querySelector("#startgame")
              instructions.textContent = "player 1 won! reload the page to play again"
              removeAllChildNodes(gameboardContainer);
              removeAllChildNodes(gameboardContainer2);
              container.appendChild(wonText);
            } else if (user.getGameboard().checkIfShipsAreSunk() === true) {
              
              const instructions = document.querySelector("#startgame")
              instructions.textContent = "player 1 won! reload the page to play again"
              removeAllChildNodes(gameboardContainer);
              removeAllChildNodes(gameboardContainer2);
          
              
            }
          }
        }
      }
    });
  });
};


const game = (name) => {
  const removeText = document.querySelector(".wonText");
  if (removeText !== null) {
    removeText.remove();
    let player1 = player(name, true);
    let cpu = player(0, false);
    makePlayerGrid();

    gameLoopDom(5,player1,cpu)
    return
  } else {
    
    let player1 = player(name, true);
    let cpu = player(0, false);
   
    makePlayerGrid();
    gameLoopDom(5,player1,cpu)
    return
  }
};

export { playerTurnAttack, cpuAttack, gameLoop, game };
