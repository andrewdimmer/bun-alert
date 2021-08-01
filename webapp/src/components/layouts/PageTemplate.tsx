import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { styles } from "../../styles";

declare interface PageTemplateProps {
  heading: string;
  title?: string;
}

const PageTemplate: React.FunctionComponent<PageTemplateProps> = ({
  children,
  heading,
  title = heading,
}) => {
  const classes = styles();

  React.useEffect(() => {
    document.title = (title ? `${title} - ` : "") + "Bun Alert";
  }, [title]);

  return (
    <Paper className={classes.marginedPadded}>
      <Typography variant="h3" className={classes.pageTitle}>
        {heading}
      </Typography>
      {children}
    </Paper>
  );
};

export default PageTemplate;
