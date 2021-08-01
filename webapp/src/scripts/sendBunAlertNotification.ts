import { getPreLoadedLocation } from "../data/preLoadedLocation";
import { preProcessBunSighting } from "./preProcessBunSightings";

export const browserSupportsNotifications = "Notification" in window;

export const sendBunAlertNotification = (bunSighting: BunSighting) => {
  if (browserSupportsNotifications && Notification.permission === "granted") {
    const bun = preProcessBunSighting(
      bunSighting,
      Date.now(),
      getPreLoadedLocation()
    );
    new Notification("BUN ALERT!");
  }
};
