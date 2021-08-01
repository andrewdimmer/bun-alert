export const sendBunAlertNotification = (bun: BunSighting) => {
  if (Notification.permission === "granted") {
    new Notification("BUN ALERT!");
  }
};
