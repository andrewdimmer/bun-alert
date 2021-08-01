import { getDistance } from "geolib";
import { getDurationInMinutes } from "../helpers/getDurationInMinutes";
import { getGoogleMapsDirections } from "../helpers/getGoogleMapsDirections";
import { metersToMiles } from "../helpers/metersToMiles";

export const preProcessBunSighting = (
  bun: BunSighting,
  now: number,
  location: GeoLocation | undefined
) => {
  // Determine Bun Sighting Distance Text
  const distanceAway = location
    ? Math.round(metersToMiles(getDistance(location, bun)) * 100) / 100
    : -1;
  const distanceAwayText =
    distanceAway !== -1
      ? ` | ${distanceAway} mile${distanceAway !== 1 ? "s" : ""} away`
      : "";

  // Determine Bun Sighting Duration Text
  const minutesSinceSighting = getDurationInMinutes(bun.timeOfSighting, now);
  const minutesSinceSightingText =
    minutesSinceSighting === 0
      ? "just now"
      : `${minutesSinceSighting} minute${
          minutesSinceSighting > 1 ? "s" : ""
        } ago`;

  // Get Google Maps Directions Link
  const googleMapsDirectionsLink = location
    ? getGoogleMapsDirections(bun, location)
    : "";

  return {
    ...bun,
    distanceAway,
    distanceAwayText,
    minutesSinceSighting,
    minutesSinceSightingText,
    googleMapsDirectionsLink,
  };
};
