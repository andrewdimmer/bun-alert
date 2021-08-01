let preLoadedLocation: GeoLocation;

export const getPreLoadedLocation = () => {
  return preLoadedLocation;
};

export const setPreLoadedLocation = (location: GeoLocation) => {
  preLoadedLocation = location;
};
