import { getDistance } from "geolib";
import { getDurationInMinutes } from "../helpers/getDurationInMinutes";
import { getGoogleMapsDirections } from "../helpers/getGoogleMapsDirections";
import { metersToMiles } from "../helpers/metersToMiles";

export const preProcessBunSighting = (
  bun: BunSighting,
  now: number,
  location: GeoLocation | undefined
) => {
  const otherBuns =
    bun.numberOfBuns > 1
      ? ` + ${bun.numberOfBuns - 1} other${bun.numberOfBuns !== 2 ? "s" : ""}`
      : "";
  const rankAndOtherBuns = `${bun.rankOfSmallestBun}${otherBuns}`;

  // Determine Bun Sighting Distance Text
  const distanceAway = location
    ? Math.round(metersToMiles(getDistance(location, bun)) * 100) / 100
    : -1;
  const distanceAwayText =
    distanceAway !== -1
      ? `${distanceAway} mile${distanceAway !== 1 ? "s" : ""} away`
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
    rankAndOtherBuns,
    distanceAway,
    distanceAwayText,
    minutesSinceSighting,
    minutesSinceSightingText,
    googleMapsDirectionsLink,
  };
};
