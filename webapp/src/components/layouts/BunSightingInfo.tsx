import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import MapIcon from "@material-ui/icons/Map";
import { getDistance } from "geolib";
import React from "react";
import { metersToMiles } from "../../helpers/metersToMiles";
import BunnyEmoji from "../misc/BunnyEmoji";

declare interface BunSightingInfoProps {
  bun: BunSighting;
  now: number;
  location: { latitude: number; longitude: number } | undefined;
}

const BunSightingInfo: React.FunctionComponent<BunSightingInfoProps> = ({
  bun,
  now,
  location,
}) => {
  // Determine Bun Sighting Primary Text
  const otherBuns =
    bun.numberOfBuns > 1
      ? ` + ${bun.numberOfBuns - 1} other${bun.numberOfBuns !== 2 ? "s" : ""}`
      : "";
  const primaryText = `${bun.rankOfSmallestBun}${otherBuns} sighted nearby!`;

  // Determine Bun Sighting Duration Text
  const minutesSinceSighting = Math.trunc((now - bun.timeOfSighting) / 60000);
  const minutesSinceSightingText =
    minutesSinceSighting === 0
      ? "just now"
      : `${minutesSinceSighting} minute${
          minutesSinceSighting > 1 ? "s" : ""
        } ago`;

  // Determine Bun Sighting Distance Text
  const bunDistance = location
    ? Math.round(metersToMiles(getDistance(location, bun)) * 100) / 100
    : -1;
  const bunDistanceText =
    bunDistance !== -1
      ? ` | ${bunDistance} mile${bunDistance !== 1 ? "s" : ""} away`
      : "";
  // Determine Bun Sighting Secondary Text
  const secondaryText = `Sighted ${minutesSinceSightingText}${bunDistanceText}`;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <BunnyEmoji />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryText} secondary={secondaryText} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="open in maps">
          <MapIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default BunSightingInfo;
