import { isFirstDayOfMonth } from "date-fns";
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

const makePlayerGrid = () => {
  let board = player1Gameboard.createBoard();
  const gamboardContainer = document.querySelector(".gameboard-container");
  const container = document.createElement("div");
  container.classList.add("gameboard");
  gamboardContainer.appendChild(container);
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
  const gamboardContainer = document.querySelector(".gameboard-container2");
  const enemyContainer = document.createElement("div");
  enemyContainer.classList.add("gameboard");
  gamboardContainer.appendChild(enemyContainer);
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
const displayCoordinates = (player) => {
  const coordinateArray = player.getGameboard().getShipCoordinatesArray();

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
const displayCoordinatesEnemy = (enemy) => {
  const coordinateArray = enemy.getGameboard().getShipCoordinatesArray();


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
        console.log(typeof xCoordinate)
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
  let enemyGameboard = enemy.getGameboard();
  userCoordinates.forEach((element) => {
    let xCoordinate = parseInt(element.dataset.coordinateX);
    let yCoordinate = parseInt(element.dataset.coordinateY);

    for (let i in coordinates) {
      if (
        coordinates[i][0] === xCoordinate &&
        coordinates[i][1] === yCoordinate
      ) {
        if (enemyGameboard.ifHasShip([parseInt(xCoordinate), parseInt(yCoordinate)])) {

          console.log(enemyGameboard.ifHasShip([xCoordinate,yCoordinate]))
          element.classList.remove("shipDiv")
          element.classList.add("attacked");
          user.endTurn();
        } else {
          element.classList.remove("shipDiv")
          element.classList.add("missed")
          user.endTurn();
        }
      }
    }
  });
};
const placeShipsDOM = (player1)=>{
    const container = document.querySelector(".gameboard-container")
    const gridItems = document.querySelectorAll(".grid-items")
    container.addEventListener("click", function createShip(){
     const trail = (event)=>{
     event.preventDefault();
     let x = parseInt(event.target.dataset.coordinateX);
     let y = parseInt(event.target.dataset.coordinateY);

     let x_array = [];
     let paintDivs = [];
     for (let i = 0; i < length; i++) {
       let a = parseInt(x) + i;
       x_array.push(a);
     }
     for (let i in x_array) {
       let div = document.querySelector(
         `.grid-item[data-coordinate-x='${x_array[i]}'][data-coordinate-y='${y}']`,
       );
       if (div !== null) {
         paintDivs.push(div);
       }
     }
     for (let i in paintDivs) {
       paintDivs[i].classList.add("dropOver");
     }
    }
    gridItems.forEach((element) => {
      element.addEventListener("mouseover",trail)
    })
    }
)
}
const shipsEnemyDom = (enemy,quantity)=>{
  let enemyGameboard = enemy.getGameboard()
  let orientation = Math.floor(Math.random()*2)
  

  if(orientation === 0)
  {
  
    for(let i = 0 ; i<5;i++)
    {
      let initialPositionX = parseInt(Math.floor(Math.random() * 9))
      let initialPositionY = parseInt(Math.floor(Math.random()*9))
      let array = []
      let size  = quantity-i
      console.log(typeof initialPositionX)
      
      for(let j = 0;j<size;j++)
      {
        if(initialPositionX+j>9 || initialPositionX+j<0)
        {
          
          return shipsEnemyDom(enemy,size)
        }
        if(!enemyGameboard.ifHasShip([parseInt(initialPositionX + j),parseInt(initialPositionY)]))
        {

        
        array.push([initialPositionX+j,initialPositionY])
        }
        else{
          
          return shipsEnemyDom(enemy,size)
        }
      }
      enemyGameboard.createShip(size,array)
      
      
    }
    
  }
  
  else if(orientation === 1)
  {
    for(let i = 0 ; i<5;i++)
    {
      let initialPositionX = parseInt(Math.floor(Math.random() * 9))
      let initialPositionY = parseInt(Math.floor(Math.random()*9))
      let array = []
      let size  = quantity-i
      for(let j = 0;j<size;j++)
      {
        if(initialPositionY+j>9 || initialPositionY+j<0)
        {
          return shipsEnemyDom(enemy,size)
        }
        if(!enemyGameboard.ifHasShip([initialPositionX,initialPositionY+j]))
        {
        array.push([initialPositionX,initialPositionY+j])
        }
        else{
          
          return shipsEnemyDom(enemy,size)
        }
      }
      enemyGameboard.createShip(size,array)
      
    }
  }
}
export {
  aiInputAttack,
  makePlayerGrid,
  makeEnemyGrid,
  displayCoordinates,
  displayCoordinatesEnemy,
  displayReceivedAttack,
  inputAttack,
  removeAllChildNodes,
  placeShipsDOM,
  shipsEnemyDom,
};
