export const getGoogleMapsDirections = (
  bun: BunSighting,
  currentLocation: GeoLocation
) => {
  return `https://www.google.com/maps/dir/${currentLocation.latitude},+${currentLocation.longitude}/${bun.latitude},${bun.longitude}/`;
};
