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

const initializeStoredNotificationFilter = () => {
  const notificationFilterString =
    window.localStorage.getItem("notificationFilter");
  const defaultNotificationFilter = 6;

  return notificationFilterString
    ? parseInt(notificationFilterString)
    : defaultNotificationFilter;
};

let storedNotificationFilter: number = initializeStoredNotificationFilter();

export const getStoredNotificationFilter = () => {
  return storedNotificationFilter;
};

export const setStoredNotificationFilter = (notificationFilter: number) => {
  storedNotificationFilter = notificationFilter;
  window.localStorage.setItem(
    "notificationFilter",
    notificationFilter.toString()
  );
};
