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
  bun: PreProcessedBunSighting;
}

const BunSightingInfo: React.FunctionComponent<BunSightingInfoProps> = ({
  bun,
}) => {
  const primaryText = `${bun.rankAndOtherBuns} sighted nearby!`;
  const secondaryText = `Sighted ${bun.minutesSinceSightingText}${
    bun.distanceAwayText ? " | " : ""
  }${bun.distanceAwayText}`;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <BunnyEmoji />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryText} secondary={secondaryText} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="open in maps"
          disabled={!bun.googleMapsDirectionsLink}
          onClick={() => {
            window.open(bun.googleMapsDirectionsLink, "_blank");
          }}
        >
          <MapIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default BunSightingInfo;
