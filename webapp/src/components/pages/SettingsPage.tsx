import { Box, MenuItem, TextField, Typography } from "@material-ui/core";
import { Error } from "@material-ui/icons";
import React, { Fragment } from "react";
import {
  getStoredBunFilterParameters,
  setStoredBunFilterParameters,
  setStoredNotificationFilter,
} from "../../data/storedSettings";
import { styles } from "../../styles";
import PageTemplate from "../layouts/PageTemplate";

declare interface SettingsPageProps {
  notificationFilter: number;
  setNotificationFilter: (notificationFilter: number) => void;
}

const SettingsPage: React.FunctionComponent<SettingsPageProps> = ({
  notificationFilter,
  setNotificationFilter,
}) => {
  const classes = styles();

  const [bunFilterParameters, setBunFilterParamters] =
    React.useState<EditableBunFilterParameters>(getStoredBunFilterParameters());

  const storeIfValidBunFilterParamters = (
    bunFilterParameters: EditableBunFilterParameters
  ) => {
    setBunFilterParamters(bunFilterParameters);

    if (
      !(
        bunFilterParameters.maxAlertAge === "" ||
        bunFilterParameters.maxAlertAge <= 0 ||
        bunFilterParameters.maxDistanceAway === "" ||
        bunFilterParameters.maxDistanceAway <= 0 ||
        bunFilterParameters.walkingSpeed === "" ||
        bunFilterParameters.walkingSpeed <= 0 ||
        bunFilterParameters.detourCoefficent === "" ||
        bunFilterParameters.detourCoefficent < 0.01 ||
        bunFilterParameters.detourCoefficent > 1
      )
    ) {
      const maxAlertAge = bunFilterParameters.maxAlertAge;
      const maxDistanceAway = bunFilterParameters.maxDistanceAway;
      const walkingSpeed = bunFilterParameters.walkingSpeed;
      const detourCoefficent = bunFilterParameters.detourCoefficent;
      setStoredBunFilterParameters({
        maxAlertAge,
        maxDistanceAway,
        walkingSpeed,
        detourCoefficent,
      });
    }
  };

  const actualMaxDistance = () => {
    if (
      !(
        bunFilterParameters.maxAlertAge === "" ||
        bunFilterParameters.maxAlertAge <= 0 ||
        bunFilterParameters.maxDistanceAway === "" ||
        bunFilterParameters.maxDistanceAway <= 0 ||
        bunFilterParameters.walkingSpeed === "" ||
        bunFilterParameters.walkingSpeed <= 0 ||
        bunFilterParameters.detourCoefficent === "" ||
        bunFilterParameters.detourCoefficent < 0.01 ||
        bunFilterParameters.detourCoefficent > 1
      )
    ) {
      const maxAlertAge = bunFilterParameters.maxAlertAge;
      const maxDistanceAway = bunFilterParameters.maxDistanceAway;
      const walkingSpeed = bunFilterParameters.walkingSpeed;
      const detourCoefficent = bunFilterParameters.detourCoefficent;
      return Math.min(
        maxDistanceAway,
        walkingSpeed * detourCoefficent * (maxAlertAge / 60)
      ).toString();
    } else {
      return "";
    }
  };

  return (
    <PageTemplate heading="Settings">
      <Typography variant="h4">Bun Alert Filter Parameters</Typography>
      {/* Max Alert Age */}
      <Box className={classes.marginedTopBottom}>
        <TextField
          error={
            bunFilterParameters.maxAlertAge === "" ||
            bunFilterParameters.maxAlertAge <= 0
          }
          fullWidth
          helperText={
            (bunFilterParameters.maxAlertAge === "" ||
              bunFilterParameters.maxAlertAge <= 0) && (
              <Fragment>
                <Error fontSize="inherit" />
                {
                  " There must be at least one minute before an alert goes stale!"
                }
              </Fragment>
            )
          }
          id={`enter-max-alert-age`}
          label="Max Alert Age in Minutes (default is 15 minutes)"
          onChange={(event) => {
            const maxAlertAge =
              event.target.value !== ""
                ? Math.trunc(parseFloat(event.target.value))
                : "";
            storeIfValidBunFilterParamters({
              ...bunFilterParameters,
              maxAlertAge,
            });
          }}
          type="number"
          value={bunFilterParameters.maxAlertAge.toString()}
          variant="outlined"
        />
      </Box>

      {/* Max Distance */}
      <Box className={classes.marginedTopBottom}>
        <TextField
          error={
            bunFilterParameters.maxDistanceAway === "" ||
            bunFilterParameters.maxDistanceAway <= 0
          }
          fullWidth
          helperText={
            (bunFilterParameters.maxDistanceAway === "" ||
              bunFilterParameters.maxDistanceAway <= 0) && (
              <Fragment>
                <Error fontSize="inherit" />
                {
                  " There must be at least some distance allowed between you and the furthest alert!"
                }
              </Fragment>
            )
          }
          id={`enter-max-distance-away`}
          label="Max Distance in Miles to Walk to Bun Sighting (default is 1 mile)"
          onChange={(event) => {
            const maxDistanceAway =
              event.target.value !== "" ? parseFloat(event.target.value) : "";
            storeIfValidBunFilterParamters({
              ...bunFilterParameters,
              maxDistanceAway,
            });
          }}
          type="number"
          value={bunFilterParameters.maxDistanceAway.toString()}
          variant="outlined"
        />
      </Box>

      {/* Walking Speed */}
      <Box className={classes.marginedTopBottom}>
        <TextField
          error={
            bunFilterParameters.walkingSpeed === "" ||
            bunFilterParameters.walkingSpeed <= 0
          }
          fullWidth
          helperText={
            (bunFilterParameters.walkingSpeed === "" ||
              bunFilterParameters.walkingSpeed <= 0) && (
              <Fragment>
                <Error fontSize="inherit" />
                {" Walking speed must be greater than 0!"}
              </Fragment>
            )
          }
          id={`enter-walking-speed`}
          label="Average Walking Speed in Miles/Hour (default is 3.1 mile/hour)"
          onChange={(event) => {
            const walkingSpeed =
              event.target.value !== "" ? parseFloat(event.target.value) : "";
            storeIfValidBunFilterParamters({
              ...bunFilterParameters,
              walkingSpeed,
            });
          }}
          type="number"
          value={bunFilterParameters.walkingSpeed.toString()}
          variant="outlined"
        />
      </Box>

      {/* Detour Coefficent */}
      <Box className={classes.marginedTopBottom}>
        <TextField
          error={
            bunFilterParameters.detourCoefficent === "" ||
            bunFilterParameters.detourCoefficent < 0.01 ||
            bunFilterParameters.detourCoefficent > 1
          }
          fullWidth
          helperText={
            (bunFilterParameters.detourCoefficent === "" ||
              bunFilterParameters.detourCoefficent < 0.01 ||
              bunFilterParameters.detourCoefficent > 1) && (
              <Fragment>
                <Error fontSize="inherit" />
                {" The percentage must be between 1% and 100%!"}
              </Fragment>
            )
          }
          id={`enter-detour-coefficent`}
          label="Average Progress towards Bun Alert out of Total Distance Walked as a Percent (default is 70%)"
          onChange={(event) => {
            const detourCoefficent =
              event.target.value !== ""
                ? parseFloat(event.target.value) / 100
                : "";
            storeIfValidBunFilterParamters({
              ...bunFilterParameters,
              detourCoefficent,
            });
          }}
          type="number"
          value={
            bunFilterParameters.detourCoefficent === ""
              ? ""
              : (
                  Math.round(bunFilterParameters.detourCoefficent * 100000000) /
                  1000000
                ).toString()
          }
          variant="outlined"
        />
      </Box>

      {/* Actual Max Distance */}
      <Box className={classes.marginedTopBottom}>
        <TextField
          disabled
          fullWidth
          id={`actual-max-distance`}
          label="Actual Max Distance of Furthest Alert using the Proprietary Bun Alert Freshness Algorithm"
          value={actualMaxDistance()}
          variant="outlined"
        />
      </Box>

      <Typography variant="h4">Do Not Disturb Settings</Typography>
      {/* Minumum Rank for Bun Alert */}
      <Box className={classes.marginedTopBottom}>
        <TextField
          fullWidth
          id={`minimum-rank-for-bun-alert`}
          label="Select the Minimum Rank to Receive Bun Alerts for"
          onChange={(event) => {
            const notificationFilter = parseInt(event.target.value);
            setNotificationFilter(notificationFilter);
            setStoredNotificationFilter(notificationFilter);
          }}
          select
          value={notificationFilter}
          variant="outlined"
        >
          {[
            {
              label: <em>Do Not Disturb</em>,
              value: 0,
            },
            {
              label: "Baby Bun",
              value: 1,
            },
            {
              label: "King Bun",
              value: 2,
            },
            {
              label: "Queen Bun",
              value: 3,
            },
            {
              label: "Princess Bun",
              value: 4,
            },
            {
              label: "Prince Bun",
              value: 5,
            },
            {
              label: "Peasent Bun",
              value: 6,
            },
          ].map((option, index) => {
            return (
              <MenuItem
                key={`select-notification-filter-option-${index}`}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </TextField>{" "}
      </Box>
    </PageTemplate>
  );
};

export default SettingsPage;
