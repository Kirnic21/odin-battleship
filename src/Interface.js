import { gameboard } from "./Gameboard"
import { player } from "./player"
let player1 = player("input",true)
let player2 = player(0,false)
let player1Gameboard = player1.getGameboard()
let player2Gameboard = player2.getGameboard()

player2Gameboard.createShip(2,[[1,2]])
player2Gameboard.createShip(2,[[3,4]])
player2Gameboard.createShip(2,[[0,0]])


const container  = document.querySelector(".gameboard")
const enemyContainer = document.querySelector("#enemyGameboard")
const makePlayerGrid = ()=>{
    let board = player1Gameboard.createBoard()
    container.style.setProperty('--grid-rows',10)
    container.style.setProperty('--grid-cols',10)
    for(let i in board)
    {
        for(let j in board[i])
        {
        let cell = document.createElement("div")
        cell.innerText = ""
        container.appendChild(cell).className = "grid-item"
        cell.dataset.coordinateX = board[i][i]
        cell.dataset.coordinateY = board[j][j]
        }

    }
}
const makeEnemyGrid = ()=>{
    let board = player2Gameboard.createBoard()
    enemyContainer.style.setProperty('--grid-rows',10)
    enemyContainer.style.setProperty('--grid-cols',10)
    for(let i in board)
    {
        for(let j in board[i])
        {
        let cell = document.createElement("div")
        cell.innerText = ""
        enemyContainer.appendChild(cell).className = "grid-item-enemy"
        cell.dataset.coordinateY = board[i][i]
        cell.dataset.coordinateX = board[j][j]
        }

    }
}
const displayCoordinates = ()=>{
 const coordinateArray = player1Gameboard.getShipCoordinatesArray()

 const coordinateArrayStringfied = JSON.stringify(coordinateArray)
 const gridItems = document.querySelectorAll(".grid-item")
 gridItems.forEach((element)=>{
    let coordinatesInDiv = "["+element.dataset.coordinateX+","+element.dataset.coordinateY+"]"
    if(coordinateArrayStringfied.includes(coordinatesInDiv))
    {
        element.classList.add("ship-div")
    }
 })

}
const displayCoordinatesEnemy = ()=>{
    const coordinateArray = player2Gameboard.getShipCoordinatesArray()

    const coordinateArrayStringfied = JSON.stringify(coordinateArray)
    const gridItems = document.querySelectorAll(".grid-item-enemy")
    gridItems.forEach((element)=>{
       let coordinatesInDiv = "["+element.dataset.coordinateX+","+element.dataset.coordinateY+"]"
       if(coordinateArrayStringfied.includes(coordinatesInDiv))
       {
       
           element.classList.add("ship-div-enemy")
           
       }
    })
   
   }
const displayReceivedAttack = ()=>{
    const coordinateArray = player1Gameboard.getCoordinates()
  
    const coordinateArrayStringfied = JSON.stringify(coordinateArray)
    const gridItems = document.querySelectorAll(".grid-item")
    gridItems.forEach((element)=>{
       let coordinatesInDiv = "["+element.dataset.coordinateX+","+element.dataset.coordinateY+"]"
       if(coordinateArrayStringfied.includes(coordinatesInDiv) && element.classList.contains("ship-div"))
       {
        element.classList.add("attacked")
        console.log(coordinatesInDiv,coordinateArrayStringfied)
       }
    })
   
   }
  
   player2Gameboard.createShip(2,[[0,0]])
  const inputAttack= ()=>{
    const enemyCoordinates = document.querySelectorAll(".grid-item-enemy")
    let gameboard = player2Gameboard
  
    enemyCoordinates.forEach((element)=>{
        element.addEventListener("click",()=>{
            let xCoordinate = parseInt(element.dataset.coordinateX)
            let yCoordinate = parseInt(element.dataset.coordinateY);
            console.log(xCoordinate,yCoordinate)
        
            gameboard.receiveAttack([xCoordinate,yCoordinate])
            if(gameboard.ifHasShip([xCoordinate,yCoordinate]))
            {
               element.classList.add("attacked")
            }
            else{
                element.classList.add("missed")
            }
        })
    })}

export{makePlayerGrid, makeEnemyGrid,displayCoordinates,displayCoordinatesEnemy,displayReceivedAttack,inputAttack}