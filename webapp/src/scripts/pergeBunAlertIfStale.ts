import { firestore } from "../config/firebaseConfig";
import { deleteBun } from "../data/notifiedBuns";
import { getDurationInMinutes } from "../helpers/getDurationInMinutes";

export const purgeBunAlertIfStale = (bun: BunSighting, now: number) => {
  if (getDurationInMinutes(bun.timeOfSighting, now) > 60) {
    deleteBun(bun.id);
    firestore.collection("buns").doc(bun.id).delete();
    return true;
  }
  return false;
};
