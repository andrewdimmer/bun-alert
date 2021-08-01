declare type BunRanks =
  | "Baby Bun"
  | "King Bun"
  | "Queen Bun"
  | "Princess Bun"
  | "Prince Bun"
  | "Peasent Bun";

declare interface GeoLocation {
  latitude: number;
  longitude: number;
}

declare interface BunSighting extends GeoLocation {
  id: string;
  numberOfBuns: number;
  rankOfSmallestBun: BunRanks;
  timeOfSighting: number;
}

declare interface PreProcessedBunSighting extends BunSighting {
  rankAndOtherBuns: string;
  distanceAway: number;
  distanceAwayText: string;
  minutesSinceSighting: number;
  minutesSinceSightingText: string;
  googleMapsDirectionsLink: string;
}

declare interface RequiresAccessToLocationServices {
  accessToLocationServices: boolean | undefined;
}
