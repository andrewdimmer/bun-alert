import { TextField, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import {
  getStoredBunFilterParameters,
  setStoredBunFilterParameters,
} from "../../data/storedSettings";
import { styles } from "../../styles";
import PageTemplate from "../layouts/PageTemplate";
import { Error } from "@material-ui/icons";

declare interface SettingsPageProps {}

const SettingsPage: React.FunctionComponent<SettingsPageProps> = () => {
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
      <TextField
        className={classes.marginedTopBottom}
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
              {" There must be at least one minute before an alert goes stale!"}
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

      {/* Max Distance */}
      <TextField
        className={classes.marginedTopBottom}
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

      {/* Walking Speed */}
      <TextField
        className={classes.marginedTopBottom}
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

      {/* Detour Coefficent */}
      <TextField
        className={classes.marginedTopBottom}
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

      {/* Actual Max Distance */}
      <TextField
        className={classes.marginedTopBottom}
        disabled
        fullWidth
        id={`actual-max-distance`}
        label="Actual Max Distance of Furthest Alert using the Proprietary Bun Alert Freshness Algorithm"
        value={actualMaxDistance()}
        variant="outlined"
      />
    </PageTemplate>
  );
};

export default SettingsPage;
