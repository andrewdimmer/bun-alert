import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { browserSupportsNotifications } from "../../scripts/sendBunAlertNotification";
import { styles } from "../../styles";
import Note from "../layouts/Note";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";

declare interface NotificationInfoManagerProps
  extends RequiresAccessToLocationServices {}

const NotificationInfoManager: React.FunctionComponent<NotificationInfoManagerProps> =
  ({ accessToLocationServices }) => {
    const classes = styles();

    const [allowNotifications, setAllowNotifications] = React.useState(
      Notification.permission
    );

    return browserSupportsNotifications ? (
      accessToLocationServices === true ? (
        allowNotifications === "granted" ? (
          <Fragment />
        ) : (
          <Paper className={classes.marginedPadded}>
            <Grid
              container
              spacing={2}
              wrap="nowrap"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Grid item>
                {allowNotifications === "default" ? (
                  <InfoIcon className={classes.infoIcon} />
                ) : (
                  <WarningIcon className={classes.warningIcon} />
                )}
              </Grid>
              <Grid item>
                <Typography>
                  <strong>
                    Notifications are required to receive Bun Alerts
                    automatically when a new bun is sighted!
                  </strong>{" "}
                  If you wish to be automatically notified when a new bun is
                  sighted, please enable notifications to find buns.
                </Typography>
              </Grid>
              {allowNotifications === "default" && (
                <Grid item>
                  <Button
                    color="primary"
                    onClick={() => {
                      try {
                        Notification.requestPermission().then(
                          setAllowNotifications
                        );
                      } catch {
                        Notification.requestPermission(setAllowNotifications);
                      }
                    }}
                    variant="outlined"
                  >
                    Enable Notifications
                  </Button>
                </Grid>
              )}
            </Grid>
          </Paper>
        )
      ) : (
        <Paper className={classes.marginedPadded}>
          <Note
            type={accessToLocationServices === false ? "warning" : "info"}
            prefix="Location Services are required to receive Bun Alerts automatically when a new bun is sighted!"
            message="We need to know where you are to notify you about nearby buns. If you wish to be automatically notified when a new bun is sighted, please enable location services."
          />
        </Paper>
      )
    ) : (
      <Paper className={classes.marginedPadded}>
        <Note
          type="warning"
          prefix="Your web browser does not support notifications."
          message="You will not be able to receive Bun Alerts automatically when a new bun is sighted. However, you're free to report buns you see and find nearby buns yourself."
        />{" "}
      </Paper>
    );
  };

export default NotificationInfoManager;
