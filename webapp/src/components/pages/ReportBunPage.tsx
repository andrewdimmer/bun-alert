import { Button, MenuItem, TextField, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { styles } from "../../styles";
import PageTemplate from "../layouts/PageTemplate";
import { Error } from "@material-ui/icons";
import { recordBunSighting } from "../../scripts/recordBunSighting";

declare interface ReportBunPageProps {}

const ReportBunPage: React.FunctionComponent<ReportBunPageProps> = () => {
  const classes = styles();

  const [numberOfBuns, setNumberOfBuns] = React.useState<number>(0);
  const [rankOfSmallestBun, setRankOfSmallestBun] = React.useState<string>("");

  const hasError = () => {
    return numberOfBuns <= 0 || rankOfSmallestBun === "";
  };

  const clear = () => {
    setNumberOfBuns(0);
    setRankOfSmallestBun("");
  };

  return (
    <PageTemplate heading="Report a Bun Sighting" title="Report Bun">
      {/* Number of Buns */}
      <TextField
        className={classes.marginedTopBottom}
        error={numberOfBuns <= 0}
        fullWidth
        helperText={
          numberOfBuns <= 0 && (
            <Fragment>
              <Error fontSize="inherit" />
              {" There must be at least one bun!"}
            </Fragment>
          )
        }
        id={`enter-number-of-buns`}
        label="Number of Buns"
        onChange={(event) => {
          setNumberOfBuns(parseInt(event.target.value));
        }}
        type="number"
        value={numberOfBuns}
        variant="outlined"
      />
      {/* Size of Smallest Bun */}
      <TextField
        className={classes.marginedTopBottom}
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
          setRankOfSmallestBun(event.target.value);
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
      {/* Bun Rank */}
      <TextField
        className={classes.marginedTopBottom}
        disabled
        fullWidth
        id={`display-bun-rank`}
        label="Informational: Rank of the Smallest Bun"
        value={rankOfSmallestBun}
        variant="outlined"
      />
      <Button
        color="primary"
        className={classes.marginedTopBottom}
        disabled={hasError()}
        fullWidth
        onClick={() => {
          recordBunSighting({ numberOfBuns, rankOfSmallestBun });
          clear();
        }}
        variant="contained"
      >
        <Typography variant="h5">Submit Bun Sighting</Typography>
      </Button>
    </PageTemplate>
  );
};

export default ReportBunPage;
