import { getBunRankNumberFromBunRankName } from "../data/bunRankNameToNumber";
import { getStoredBunFilterParameters } from "../data/storedSettings";
import { purgeBunAlertIfStale } from "./pergeBunAlertIfStale";
import { preProcessBunSighting } from "./preProcessBunSightings";

export const bunMatchesFilters = (bun: PreProcessedBunSighting) => {
  const bunFilterParameters = getStoredBunFilterParameters();

  // Omit Baby Buns more than 1/10th of a mile away
  if (bun.rankOfSmallestBun === "Baby Bun" && bun.distanceAway > 0.1) {
    return false;
  }

  // Omit all buns further than the max distance
  if (bun.distanceAway > bunFilterParameters.maxDistanceAway) {
    return false;
  }

  // Omit all buns with a Bun Alert Freshness Score above the max alert age
  if (
    bun.minutesSinceSighting + bun.estimatedArrival >
    bunFilterParameters.maxAlertAge
  ) {
    return false;
  }

  return true;
};

export const filterBuns = (buns: PreProcessedBunSighting[], now: number) => {
  return buns.reduce((acceptedBuns, currentBun) => {
    if (
      !purgeBunAlertIfStale(currentBun, now) &&
      bunMatchesFilters(currentBun)
    ) {
      return acceptedBuns.concat(currentBun);
    }
    return acceptedBuns;
  }, [] as PreProcessedBunSighting[]);
};

export const preProcessFilterAndSortBuns = (
  buns: BunSighting[],
  now: number,
  location: GeoLocation
) => {
  const filteredBuns = filterBuns(
    buns.map((bun) => {
      return preProcessBunSighting(bun, now, location);
    }),
    now
  );
  const sortedBuns = filteredBuns.concat([]).sort(bunComparator);
  return sortedBuns;
};

const bunComparator = (
  bun1: PreProcessedBunSighting,
  bun2: PreProcessedBunSighting
) => {
  const timeToArriveDiff =
    bun1.minutesSinceSighting +
    bun1.estimatedArrival -
    (bun2.minutesSinceSighting + bun2.estimatedArrival);
  if (timeToArriveDiff !== 0) {
    return timeToArriveDiff;
  }

  const numDiff = bun2.numberOfBuns - bun1.numberOfBuns;
  if (numDiff !== 0) {
    return numDiff;
  }

  const rankDiff =
    getBunRankNumberFromBunRankName(bun1.rankOfSmallestBun) -
    getBunRankNumberFromBunRankName(bun2.rankOfSmallestBun);
  if (rankDiff !== 0) {
    return rankDiff;
  }

  const timeDiff = bun1.timeOfSighting - bun2.timeOfSighting;
  return timeDiff;
};
