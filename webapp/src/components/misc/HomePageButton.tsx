import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { styles } from "../../styles";

declare interface HomePageButtonProps {
  label: string;
  route: string;
  icon: any;
}

const HomePageButton: React.FunctionComponent<HomePageButtonProps> = ({
  label,
  route,
  icon,
}) => {
  const classes = styles();
  const routeHistory = useHistory();

  const Icon = icon;
  const iconElement = <Icon className={classes.margined} />;

  return (
    <Button
      className={classes.marginedTopBottom}
      color="primary"
      fullWidth
      onClick={() => {
        routeHistory.push(route);
      }}
      variant="contained"
    >
      {iconElement}
      <Typography variant="h5">{label}</Typography>
      {iconElement}
    </Button>
  );
};

export default HomePageButton;
