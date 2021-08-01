const initializeStoredBunFilterParameters = () => {
  const bunFilterParametersString = window.localStorage.getItem(
    "bunFilterParameters"
  );
  const defaultBunFilterParameters: BunFilterParameters = {
    maxAlertAge: 15,
    maxDistanceAway: 1,
    walkingSpeed: 3.1,
    detourCoefficent: 0.7,
  };

  return bunFilterParametersString
    ? (JSON.parse(bunFilterParametersString) as BunFilterParameters)
    : defaultBunFilterParameters;
};

let storedBunFilterParameters: BunFilterParameters =
  initializeStoredBunFilterParameters();

export const getStoredBunFilterParameters = () => {
  return storedBunFilterParameters;
};

export const setStoredBunFilterParameters = (
  bunFilterParameters: BunFilterParameters
) => {
  storedBunFilterParameters = bunFilterParameters;
  window.localStorage.setItem(
    "bunFilterParameters",
    JSON.stringify(bunFilterParameters)
  );
};
