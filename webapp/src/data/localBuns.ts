const bunIds: string[] = [];

export const addBun = (bunId: string) => {
  if (!bunIds.includes(bunId)) {
    bunIds.push(bunId);
  }
};

export const deleteBun = (bunId: string) => {
  if (bunIds.includes(bunId)) {
    bunIds.splice(bunIds.indexOf(bunId), 1);
  }
};
