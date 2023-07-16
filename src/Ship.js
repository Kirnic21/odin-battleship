const ship = (length, position) => {
  let hit = 0;
  const position2 = position
  const gotHit = () => {
    return ++hit;
  };
  const isSunk = () => hit >= length;
  const getPosition = () => {
    return position2;
  };
  return { gotHit, isSunk, hit, getPosition };
};
let ship2 = ship(3, [[3, 4]]);

export { ship };
