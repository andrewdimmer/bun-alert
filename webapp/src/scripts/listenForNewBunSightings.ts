import { NotificationMessage } from "../components/misc/Notifications";
import { firestore } from "../config/firebaseConfig";
import { addBun, deleteBun } from "../data/localBuns";

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

      // Update list of known buns
      snapshot.docChanges().forEach((documentChange) => {
        if (documentChange.type === "added") {
          addBun(documentChange.doc.data().id);
        } else if (documentChange.type === "removed") {
          deleteBun(documentChange.doc.data().id);
        } else {
          console.warn(
            "An existing Firebase document was changed. This should not happen!"
          );
        }
      });
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
