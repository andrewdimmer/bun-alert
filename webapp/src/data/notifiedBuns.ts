const bunIds: string[] = [];

let initialLoad = true;

export const addBun = (bunId: string) => {
  if (!bunIds.includes(bunId)) {
    bunIds.push(bunId);
    return true;
  }
  return false;
};

export const deleteBun = (bunId: string) => {
  if (bunIds.includes(bunId)) {
    bunIds.splice(bunIds.indexOf(bunId), 1);
    return true;
  }
  return false;
};

export const isInitialLoad = () => {
  return initialLoad;
};

export const runInitialLoad = () => {
  initialLoad = false;
};
