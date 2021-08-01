import { getPreLoadedLocation } from "../data/preLoadedLocation";
import { preProcessBunSighting } from "./preProcessBunSightings";

export const sendBunAlertNotification = (bunSighting: BunSighting) => {
  if (Notification.permission === "granted") {
    const bun = preProcessBunSighting(
      bunSighting,
      Date.now(),
      getPreLoadedLocation()
    );
    new Notification("BUN ALERT!");
  }
};
