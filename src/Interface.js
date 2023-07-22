import { gameboard } from "./Gameboard";
import { player } from "./player";
let player1 = player("input", true);
let player2 = player(0, false);
let player1Gameboard = player1.getGameboard();
let player2Gameboard = player2.getGameboard();

player2Gameboard.createShip(2, [[1, 2]]);
player2Gameboard.createShip(2, [[3, 4]]);
player2Gameboard.createShip(2, [[0, 0]]);

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const container = document.querySelector(".gameboard");
const enemyContainer = document.querySelector("#enemyGameboard");
const makePlayerGrid = () => {
  let board = player1Gameboard.createBoard();
  container.style.setProperty("--grid-rows", 10);
  container.style.setProperty("--grid-cols", 10);
  for (let i in board) {
    for (let j in board[i]) {
      let cell = document.createElement("div");
      cell.innerText = "";
      container.appendChild(cell).className = "grid-item";
      cell.dataset.coordinateX = board[i][i];
      cell.dataset.coordinateY = board[j][j];
    }
  }
};
const makeEnemyGrid = () => {
  let board = player2Gameboard.createBoard();
  enemyContainer.style.setProperty("--grid-rows", 10);
  enemyContainer.style.setProperty("--grid-cols", 10);
  for (let i in board) {
    for (let j in board[i]) {
      let cell = document.createElement("div");
      cell.innerText = "";
      enemyContainer.appendChild(cell).className = "grid-item-enemy";
      cell.dataset.coordinateY = board[i][i];
      cell.dataset.coordinateX = board[j][j];
    }
  }
};
const displayCoordinates = () => {
  const coordinateArray = player1Gameboard.getShipCoordinatesArray();

  const coordinateArrayStringfied = JSON.stringify(coordinateArray);
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((element) => {
    let coordinatesInDiv =
      "[" +
      element.dataset.coordinateX +
      "," +
      element.dataset.coordinateY +
      "]";
    if (coordinateArrayStringfied.includes(coordinatesInDiv)) {
      element.classList.add("ship-div");
    }
  });
};
const displayCoordinatesEnemy = () => {
  const coordinateArray = player2Gameboard.getShipCoordinatesArray();

  const coordinateArrayStringfied = JSON.stringify(coordinateArray);
  const gridItems = document.querySelectorAll(".grid-item-enemy");
  gridItems.forEach((element) => {
    let coordinatesInDiv =
      "[" +
      element.dataset.coordinateX +
      "," +
      element.dataset.coordinateY +
      "]";
    if (coordinateArrayStringfied.includes(coordinatesInDiv)) {
      element.classList.add("ship-div-enemy");
    }
  });
};
const displayReceivedAttack = (user) => {
  const coordinateArray = user.getGameboard().getCoordinates();

  const coordinateArrayStringfied = JSON.stringify(coordinateArray);
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((element) => {
    let coordinatesInDiv =
      "[" +
      element.dataset.coordinateX +
      "," +
      element.dataset.coordinateY +
      "]";
    if (
      coordinateArrayStringfied.includes(coordinatesInDiv) &&
      element.classList.contains("ship-div")
    ) {
      element.classList.add("attacked");
    }
  });
};

player2Gameboard.createShip(2, [[0, 0]]);
const inputAttack = (user, enemy) => {
  const enemyCoordinates = document.querySelectorAll(".grid-item-enemy");
  let gameboardEnemy = enemy.getGameboard();
  enemyCoordinates.forEach((element) => {
    element.addEventListener("click", () => {
      if (user.getPlayerTurn() === true) {
        let xCoordinate = parseInt(element.dataset.coordinateX);
        let yCoordinate = parseInt(element.dataset.coordinateY);
        console.log(xCoordinate, yCoordinate);
        gameboardEnemy.receiveAttack([xCoordinate, yCoordinate]);
        if (gameboardEnemy.ifHasShip([xCoordinate, yCoordinate])) {
          element.classList.add("attacked");
          user.endTurn();
        } else {
          element.classList.add("missed");
          user.endTurn();
        }
      } else {
        return;
      }
    });
  });
};
const aiInputAttack = (coordinates, user, enemy) => {
  const userCoordinates = document.querySelectorAll(".grid-item");
  let gameboardEnemy = enemy.getGameboard();
  userCoordinates.forEach((element) => {
    let xCoordinate = parseInt(element.dataset.coordinateX);
    let yCoordinate = parseInt(element.dataset.coordinateY);

    for (let i in coordinates) {
      if (
        coordinates[i][0] === xCoordinate &&
        coordinates[i][1] === yCoordinate
      ) {
        if (gameboardEnemy.ifHasShip([xCoordinate, yCoordinate])) {
          element.classList.add("attacked");
          user.endTurn();
        } else {
          element.classList.add("missed");
          user.endTurn();
        }
      }
    }
  });
};

export {
  aiInputAttack,
  makePlayerGrid,
  makeEnemyGrid,
  displayCoordinates,
  displayCoordinatesEnemy,
  displayReceivedAttack,
  inputAttack,
  removeAllChildNodes
};
