import React from "react";

declare interface EmojiProps {
  label: string;
  symbol: string;
}

const Emoji: React.FunctionComponent<EmojiProps> = ({ label = "", symbol }) => {
  return (
    <span className="emoji" role="img" aria-label={label} aria-hidden={!label}>
      {symbol}
    </span>
  );
};

export default Emoji;
