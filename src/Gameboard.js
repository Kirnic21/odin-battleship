import { ship } from "./Ship";

const gameboard = () => {
  let shipArray = [];
  const getShipArray = () => shipArray;
  const createShip = (length, position) => {
    let newShip = ship(length, position);
    let shiparray = getShipArray();
    shiparray.push(newShip);
    return shiparray;
  };
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i][j] = j;
      }
    }
    return board;
  };
  const verifyIfHasShip = (coordinate) => {
    let stringfiedCoordinate = JSON.stringify(coordinate);
    let shipArray = getShipArray();
    for (let i in shipArray) {
      let positionArray = shipArray[i].getPosition();
      let stringfyPositionArray = JSON.stringify(positionArray);
      if (stringfyPositionArray.includes(stringfiedCoordinate)) {
        return shipArray[i];
      }
      
    }
  };
  const receiveAttack = ()=>{
    
  }
  let missedAttacks = [];
  return { createShip, verifyIfHasShip };
};
export { gameboard };
