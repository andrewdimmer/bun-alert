const buns: BunSighting[] = [];

export const getBuns = () => {
  return buns;
};

export const appendBun = (bun: BunSighting) => {
  buns.push(bun);
};

export const deleteBun = (bun: BunSighting) => {
  buns.splice(buns.indexOf(bun), 1);
};
