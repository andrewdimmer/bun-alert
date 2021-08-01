declare type BunRanks =
  | "Baby Bun"
  | "King Bun"
  | "Queen Bun"
  | "Princess Bun"
  | "Prince Bun"
  | "Peasent Bun";

declare interface BunSighting {
  id: string;
  numberOfBuns: number;
  rankOfSmallestBun: BunRanks;
  timeOfSighting: number;
  latitude: number;
  longitude: number;
}

declare interface RequiresAccessToLocationServices {
  accessToLocationServices: boolean | undefined;
}
