import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import MapIcon from "@material-ui/icons/Map";
import React from "react";
import BunnyEmoji from "../misc/BunnyEmoji";

declare interface BunSightingInfoProps {
  bun: BunSighting;
  now: number;
}

const BunSightingInfo: React.FunctionComponent<BunSightingInfoProps> = ({
  bun,
  now,
}) => {
  const otherBuns =
    bun.numberOfBuns > 1
      ? ` + ${bun.numberOfBuns - 1} other${bun.numberOfBuns !== 2 ? "s" : ""}`
      : "";
  const primaryText = `${bun.rankOfSmallestBun}${otherBuns} sighted nearby!`;

  const minutesSinceSighting = Math.trunc((now - bun.timeOfSighting) / 60000);
  const minutesSinceSightingText =
    minutesSinceSighting === 0
      ? "just now"
      : `${minutesSinceSighting} minute${
          minutesSinceSighting > 1 ? "s" : ""
        } ago`;
  const secondaryText = `Sighted ${minutesSinceSightingText}`;

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
