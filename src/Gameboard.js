import { ship } from "./Ship";

const gameboard = () => {
  let shipArray = [];
  const getShipArray = () => shipArray;
  const cleanShipArray =()=>{
    let shipArray = getShipArray()
    shipArray = []
    return shipArray
  }
  const verifyIfhasAShipInCoordinate = (position) => {
    for (let i in position) {
      if (verifyIfHasShip(position[i]) !== undefined) {
        return false;
      }
    }
  };
  let shipCoordinatesArray = [];
  const equal2DArray = (coordinateArray, position) => {
    let coordinateArrayStringfied = JSON.stringify(coordinateArray);
    for (let i in position) {
      let stringfied = JSON.stringify(position[i]);
      if (coordinateArrayStringfied.includes(stringfied)) {
        return true;
      }
    }
  };
  const getShipCoordinates = () => {
    const shipArray = getShipArray();
    let coordinateArray = [];
    for (let i in shipArray) {
      coordinateArray.push(shipArray[i].getPosition());
    }

    return coordinateArray;
  };
  const ifHasShip = (coordinate) => {
    let stringfiedCoordinate = JSON.stringify(coordinate);
    let coordinateArray = JSON.stringify(getShipCoordinates());
    console.log(coordinateArray)

    if (coordinateArray.includes(stringfiedCoordinate)) {
      return true;
    } else {
      return false;
    }
  };
  const ifHasCoordinate = (coordinate) => {
    let stringfiedCoordinate = JSON.stringify(coordinate);
    
    let coordinateArray = JSON.stringify(getCoordinates());
    console.log(getCoordinates())
    if (coordinateArray.includes(stringfiedCoordinate)) {
      return true;
    } else {
      return false;
    }
  };
  const getShipCoordinatesArray = () => shipCoordinatesArray;
  const createShip = (length, position) => {
    let coordinateArray = getShipCoordinatesArray();
    
    if (!equal2DArray(coordinateArray, position)) {
      let newShip = ship(length, position);
      let shiparray = getShipArray();
      shiparray.push(newShip);
      coordinateArray.push(newShip.getPosition());
      return shiparray;
    } else {
      return "no";
    }
  };
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = j;
      }
    }
    return board;
  };
  const returnCoordinate = (ship, coordinate) => {
    let stringfiedCoordinate = JSON.stringify(coordinate);
    let shipArray = JSON.stringify(ship.getPosition());
    if (shipArray.includes(stringfiedCoordinate)) {
      return coordinate;
    }
  };
  const verifyIfHasShip = (coordinate) => {
    let stringfiedCoordinate = JSON.stringify(coordinate);
    let shipArray = getShipArray();
    for (let i in shipArray) {
      let positionArray = shipArray[i].getPosition();
      let stringfyPositionArray = JSON.stringify(positionArray);
      if (stringfyPositionArray.includes(stringfiedCoordinate)) {
        return shipArray[i];
      } else {
        continue;
      }
    }
  };
  const receiveAttack = (coordinate) => {
    let receivedAttack = verifyIfHasShip(coordinate);

    let coordinates = getCoordinates();
    if (receivedAttack === undefined) {
      coordinates.push(coordinate);
      return coordinates;
    } else {
      let receivedAttackCoordinate = returnCoordinate(
        receivedAttack,
        coordinate,
      );
      let coordinates = getCoordinates();
      if (
        receivedAttackCoordinate[0] === coordinate[0] &&
        receivedAttackCoordinate[1] === coordinate[1]
      ) {
        receivedAttack.gotHit();
        coordinates.push(coordinate);
        return receivedAttack.isSunk();
      }
    }
  };
  let coordinatesAttacked = [];
  const getCoordinates = () => coordinatesAttacked;

  const checkIfShipsAreSunk = () => {
    let shipArray = getShipArray();
    const testIfIsSunk = (currentValue) => {
      return currentValue.isSunk() === true;
    };
    return shipArray.every(testIfIsSunk);
  };
  return {
    createShip,
    verifyIfHasShip,
    receiveAttack,
    verifyIfhasAShipInCoordinate,
    createBoard,
    checkIfShipsAreSunk,
    getShipArray,
    getCoordinates,
    getShipCoordinatesArray,
    getShipCoordinates,
    ifHasShip,
    ifHasCoordinate,
    cleanShipArray
  };
};
export { gameboard };
