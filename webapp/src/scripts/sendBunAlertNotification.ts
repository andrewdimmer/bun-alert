import { getPreLoadedLocation } from "../data/preLoadedLocation";
import { preProcessBunSighting } from "./preProcessBunSightings";

export const browserSupportsNotifications = "Notification" in window;

const addBunnyEmojis = (numberOfBuns: number) => {
  let bunnies = "";
  for (let i = 0; i < numberOfBuns; i++) {
    bunnies += "🐇";
  }
  return bunnies;
};

export const sendBunAlertNotification = (bunSighting: BunSighting) => {
  if (browserSupportsNotifications && Notification.permission === "granted") {
    const bun = preProcessBunSighting(
      bunSighting,
      Date.now(),
      getPreLoadedLocation()
    );

    const notificationDistanceText = bun.distanceAwayText
      ? ` ${bun.distanceAwayText}`
      : "";

    new Notification("BUN ALERT!", {
      badge: "logo512.png",
      body: `${
        bun.rankAndOtherBuns
      } sighted${notificationDistanceText}. Learn more on the "Find Buns" page. ${addBunnyEmojis(
        bun.numberOfBuns
      )}`,
      icon: "logo512.png",
      // image: "", // TODO: Add once Image Support is Added
    });
  }
};
