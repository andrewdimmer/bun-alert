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
  index: number;
}

const BunSightingInfo: React.FunctionComponent<BunSightingInfoProps> = ({
  bun,
  index,
}) => {
  const otherBuns =
    bun.numberOfBuns > 1
      ? ` + ${bun.numberOfBuns - 1} other${bun.numberOfBuns !== 2 ? "s" : ""}`
      : "";
  const primaryText = `${bun.rankOfSmallestBun}${otherBuns} sighted nearby!`;

  return (
    <ListItem key={`bun_sighting_${index}`}>
      <ListItemAvatar>
        <Avatar>
          <BunnyEmoji />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryText} secondary="" />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="open in maps">
          <MapIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default BunSightingInfo;
