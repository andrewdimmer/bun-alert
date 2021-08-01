declare type BunRanks =
  | "Baby Bun"
  | "King Bun"
  | "Queen Bun"
  | "Princess Bun"
  | "Prince Bun"
  | "Peasent Bun";

declare interface BunSighting extends GeoLocation {
  id: string;
  numberOfBuns: number;
  rankOfSmallestBun: BunRanks;
  timeOfSighting: number;
}

declare interface RequiresAccessToLocationServices {
  accessToLocationServices: boolean | undefined;
}

declare interface GeoLocation {
  latitude: number;
  longitude: number;
}
