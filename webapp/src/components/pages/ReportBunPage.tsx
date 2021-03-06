import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Error } from "@material-ui/icons";
import { nanoid } from "nanoid";
import React, { Fragment } from "react";
import { getPreLoadedLocation } from "../../data/preLoadedLocation";
import { recordBunSighting } from "../../scripts/recordBunSighting";
import { styles } from "../../styles";
import PageTemplate from "../layouts/PageTemplate";
import { SetNotificationMessageProps } from "../misc/Notifications";
import RequireLocationServices from "../misc/RequireLocationServices";

declare interface ReportBunPageProps
  extends RequiresAccessToLocationServices,
    SetNotificationMessageProps {}

const ReportBunPage: React.FunctionComponent<ReportBunPageProps> = ({
  accessToLocationServices,
  setNotification,
}) => {
  const classes = styles();

  const [numberOfBuns, setNumberOfBuns] = React.useState<number | "">("");
  const [rankOfSmallestBun, setRankOfSmallestBun] = React.useState<
    BunRanks | ""
  >("");

  const hasError = () => {
    return numberOfBuns === "" || numberOfBuns <= 0 || rankOfSmallestBun === "";
  };

  const clear = () => {
    setNumberOfBuns("");
    setRankOfSmallestBun("");
  };

  return (
    <PageTemplate heading="Report a Bun Sighting" title="Report Bun">
      <RequireLocationServices
        accessToLocationServices={accessToLocationServices}
        prefix="Location Services are required to report bun sightings!"
        message="We need to know where you've found your bun... please enable location services to report a bun sighting."
      >
        {/* Number of Buns */}
        <Box className={classes.marginedTopBottom}>
          <TextField
            error={numberOfBuns === "" || numberOfBuns <= 0}
            fullWidth
            helperText={
              (numberOfBuns === "" || numberOfBuns <= 0) && (
                <Fragment>
                  <Error fontSize="inherit" />
                  {" There must be at least one bun!"}
                </Fragment>
              )
            }
            id={`enter-number-of-buns`}
            label="Number of Buns"
            onChange={(event) => {
              const value =
                event.target.value !== ""
                  ? Math.trunc(parseFloat(event.target.value))
                  : "";
              setNumberOfBuns(value);
            }}
            type="number"
            value={numberOfBuns.toString()}
            variant="outlined"
          />
        </Box>

        {/* Size of Smallest Bun */}
        <Box className={classes.marginedTopBottom}>
          <TextField
            error={rankOfSmallestBun === ""}
            fullWidth
            helperText={
              rankOfSmallestBun === "" && (
                <Fragment>
                  <Error fontSize="inherit" />
                  {" Please select a size range for the smallest bun."}
                </Fragment>
              )
            }
            id={`select-rank-of-buns`}
            label="Select the Approximate Length from Head to Tail of the Smallest Bun"
            onChange={(event) => {
              setRankOfSmallestBun(event.target.value as BunRanks | "");
            }}
            select
            value={rankOfSmallestBun}
            variant="outlined"
          >
            {[
              {
                label: <em>Please select a size range</em>,
                value: "",
              },
              {
                label: "< 3.5 inches (smaller than a computer mouse)",
                value: "Baby Bun",
              },
              {
                label: "< 4.75 inches (smaller than a pop can)",
                value: "King Bun",
              },
              {
                label: "< 6 inches (smaller than an eyeglasses case)",
                value: "Queen Bun",
              },
              {
                label: "< 8 inches (smaller than a disposable water bottle)",
                value: "Princess Bun",
              },
              {
                label: "< 12 inches (smaller than a loaf of bread)",
                value: "Prince Bun",
              },
              {
                label: "> 12 inches (larger than a loaf of bread)",
                value: "Peasent Bun",
              },
            ].map((option, index) => {
              return (
                <MenuItem
                  key={`select-bun-rank-option-${index}`}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              );
            })}
          </TextField>
        </Box>

        {/* Bun Rank */}
        <Box className={classes.marginedTopBottom}>
          <TextField
            disabled
            fullWidth
            id={`display-bun-rank`}
            label="Informational: Rank of the Smallest Bun"
            value={rankOfSmallestBun}
            variant="outlined"
          />
        </Box>
        <Button
          color="primary"
          className={classes.marginedTopBottom}
          disabled={hasError()}
          fullWidth
          onClick={() => {
            const location = getPreLoadedLocation();
            if (location) {
              recordBunSighting(
                {
                  id: nanoid(),
                  numberOfBuns: numberOfBuns !== "" ? numberOfBuns : 1,
                  rankOfSmallestBun:
                    rankOfSmallestBun !== ""
                      ? rankOfSmallestBun
                      : "Peasent Bun",
                  timeOfSighting: Date.now(),
                  latitude: location.latitude,
                  longitude: location.longitude,
                },
                setNotification
              );
              clear();
            } else {
              setNotification({
                type: "error",
                message:
                  "Unable to get your location to create a Bun Sighting. Please try again.",
              });
            }
          }}
          variant="contained"
        >
          <Typography variant="h5">Submit Bun Sighting</Typography>
        </Button>
      </RequireLocationServices>
    </PageTemplate>
  );
};

export default ReportBunPage;
