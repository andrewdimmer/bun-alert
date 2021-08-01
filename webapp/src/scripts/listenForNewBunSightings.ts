import { NotificationMessage } from "../components/misc/Notifications";
import { firestore } from "../config/firebaseConfig";
import {
  addBun,
  deleteBun,
  isInitialLoad,
  runInitialLoad,
} from "../data/notifiedBuns";
import { getPreLoadedLocation } from "../data/preLoadedLocation";
import { bunMatchesFilters } from "./filterAndSortBunSightings";
import { preProcessBunSighting } from "./preProcessBunSightings";
import { sendBunAlertNotification } from "./sendBunAlertNotification";

export const listenForNewBunSightings = (
  setNearbyBuns: (nearbyBuns: BunSighting[]) => void,
  setNotification: (notification: NotificationMessage) => void
) => {
  return firestore.collection("buns").onSnapshot(
    (snapshot) => {
      // Update list of known buns
      setNearbyBuns(
        snapshot.docs.map((doc) => {
          return doc.data() as BunSighting;
        })
      );

      // Update list of known buns and send notifications of new bun alerts
      snapshot.docChanges().forEach((documentChange) => {
        const bun = documentChange.doc.data() as BunSighting;
        if (documentChange.type === "added") {
          const preProcessedBun = preProcessBunSighting(
            bun,
            Date.now(),
            getPreLoadedLocation()
          );
          if (
            bunMatchesFilters(preProcessedBun) &&
            addBun(bun.id) &&
            !isInitialLoad()
          ) {
            sendBunAlertNotification(preProcessedBun);
          }
        } else if (documentChange.type === "removed") {
          deleteBun(bun.id);
        } else {
          console.warn(
            "An existing Firebase document was changed. This should not happen!"
          );
        }
      });

      // Start allowing notifications of new buns after the intial load
      runInitialLoad();
    },
    (error) => {
      console.log(error);
      setNotification({
        type: "error",
        message: "Unable to get bun sightings. Please try again later.",
      });
    }
  );
};
