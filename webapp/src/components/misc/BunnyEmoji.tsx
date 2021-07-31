import React from "react";

declare interface BunnyEmojiProps {
  labeled?: boolean;
}

const BunnyEmoji: React.FunctionComponent<BunnyEmojiProps> = ({ labeled }) => {
  const label = labeled ? "bunny" : "";

  return (
    <span className="emoji" role="img" aria-label={label} aria-hidden={!label}>
      🐇
    </span>
  );
};

export default BunnyEmoji;
