const ship = (length, position) => {
  let hit = 0;
  position;
  const gotHit = () => {
    return ++hit;
  };
  const isSunk = () => getHit() >= length;
  const getHit = () => hit;
  const getPosition = () => {
    return position;
  };
  const getLength = () => length;
  return { gotHit, isSunk, getPosition, getHit, getLength };
};
let ship2 = ship(3, [[3, 4]]);

export { ship };
