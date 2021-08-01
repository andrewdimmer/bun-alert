declare interface BunSighting {
  numberOfBuns: number;
  rankOfSmallestBun: string;
  timeOfSighting: number;
  latitude: number;
  longitude: number;
}

declare interface RequiresAccessToLocationServices {
  accessToLocationServices: boolean | undefined;
}
