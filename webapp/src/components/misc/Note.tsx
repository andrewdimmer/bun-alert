import { Grid, Typography } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import React, { Fragment } from "react";
import { styles } from "../../styles";

declare interface NoteProps {
  type: "hint" | "info" | "warning" | "error";
  prefix?: string;
  message: string;
  className?: string;
}

export const Note: React.FunctionComponent<NoteProps> = ({
  type,
  prefix,
  message,
  className,
}) => {
  const classes = styles();

  const typeToIconMap = {
    hint: <ChatIcon className={classes.hintIcon} />,
    info: <InfoIcon className={classes.infoIcon} />,
    warning: <WarningIcon className={classes.warningIcon} />,
    error: <ErrorIcon className={classes.errorIcon} />,
  };

  return (
    <Grid
      container
      spacing={2}
      className={className}
      wrap="nowrap"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Grid item>{typeToIconMap[type]}</Grid>
      <Grid item>
        {prefix ? (
          <Typography>
            <strong>{prefix}</strong> {message}
          </Typography>
        ) : (
          <Typography>{message}</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Note;
