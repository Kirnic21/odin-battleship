import { gameboard } from "./Gameboard";

const player = (name, playerTurn) => {
  let itsPlayerTurn = playerTurn;
  const playerGameboard = gameboard();
  const getGameboard = () => {
    return playerGameboard;
  };
  let playerName = name
  const getPlayerName = (playerName)=>name;
  const getEnemy = (enemy) => enemy;
  let isAi = false;
  const getPlayerTurn = () => itsPlayerTurn;
  const getIsAi = () => isAi;
  const endTurn = () => {
    return (itsPlayerTurn = false);
  };
  const attackOtherGameboard = (enemy, coordinate) => {
    if (getIsAi() === false) {
      const enemyGameboard = getEnemy(enemy).getGameboard();

      if (getPlayerTurn() === true) {
        if (checkCoordinate(enemyGameboard.getCoordinates(), coordinate)) {
          return "Illegal Move(repeated move)";
        } else {
          endTurn();
          enemy.startTurn();
          return enemyGameboard.receiveAttack(coordinate);
        }
      }
    }
  };
  const startTurn = () => {
    return (itsPlayerTurn = true);
  };
  const turnIntoAi = () => {
    if (name === 0) {
      isAi = true;
      return isAi;
    } else {
      isAi = false;
      return isAi;
    }
  };

  const checkCoordinate = (coordinateArray, coordinate) => {
    let stringfiedCoordinate = JSON.stringify(coordinate);
    let stringfiedCoordinateArray = JSON.stringify(coordinateArray);

    if (stringfiedCoordinateArray.includes(stringfiedCoordinate)) {
      return true;
    }
  };
  const aiBehavior = (enemy) => {
    turnIntoAi();

    if (getIsAi() === true) {
      if (getPlayerTurn() === true) {
        let xCoordinateRandom = Math.floor(Math.random() * 9);
        let yCoordinateRandom = Math.floor(Math.random() * 9);

        const enemyGameboard = getEnemy(enemy).getGameboard();
        if (
          checkCoordinate(enemyGameboard.getCoordinates(), [
            xCoordinateRandom,
            yCoordinateRandom,
          ])
        ) {
          return aiBehavior(enemy);
        } else {
          enemyGameboard.receiveAttack([xCoordinateRandom, yCoordinateRandom]);
          return enemyGameboard.getCoordinates();
        }
      }
    }
  };
  
  return {
    endTurn,
    startTurn,
    turnIntoAi,
    getGameboard,
    aiBehavior,
    getEnemy,
    getPlayerTurn,
    getPlayerName,
    attackOtherGameboard,
  };
};

export { player };
