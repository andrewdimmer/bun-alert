import { NotificationMessage } from "../components/misc/Notifications";
import { firestore } from "../config/firebaseConfig";
import { addBun } from "../data/localBuns";

export const recordBunSighting = (
  bun: BunSighting,
  setNotification: (notification: NotificationMessage) => void
) => {
  addBun(bun.id);
  firestore
    .collection("buns")
    .doc(bun.id)
    .set(bun)
    .then(() => {
      if (bun.rankOfSmallestBun === "Baby Bun") {
        setNotification({
          type: "info",
          message:
            'Baby Bun sighting reported with limited alerts (more info on the "About" page).',
        });
      } else {
        setNotification({
          type: "success",
          message: "Bun sighting reported successfully.",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      setNotification({
        type: "error",
        message: "Unable to report bun sighting. Please try again later.",
      });
    });
};
