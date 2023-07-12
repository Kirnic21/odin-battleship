const ship = (length) => {
  let hit = 0;
  const gotHit = () => {
    return ++hit;
  };
  const isSunk = () => hit >= length;
  return { gotHit, isSunk,hit };
};


export { ship };
