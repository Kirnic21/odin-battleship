import { gameboard } from "./Gameboard";
const player = (name, playerTurn, enemy) => {
  let itsPlayerTurn = playerTurn;
  const playerGameboard = gameboard();
  const getGameboard = () => {
    return playerGameboard;
  };
  const getPlayerTurn = () => itsPlayerTurn
  const endTurn = () => {
    return (itsPlayerTurn = false);
  };
  const startTurn = () => {
    return (itsPlayerTurn = true);
  };
  const turnIntoAi = () => {
    if (name === 0) {
      return "Is AI";
    }
  };
  const aiBehavior = ()=>{
    if(getPlayerTurn()=== true)
  }
  return { playerGameboard, endTurn, startTurn, turnIntoAi, getGameboard };
};
export { player };
