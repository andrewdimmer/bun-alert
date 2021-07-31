import {
  createStyles,
  Drawer,
  List,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import LeftMenuItem from "./LeftMenuItem";
import { Home, Info, Room, Search, Settings } from "@material-ui/icons";

declare interface LeftMenuProps {
  open: boolean;
  closeLeftMenu: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

const LeftMenu: React.FunctionComponent<LeftMenuProps> = ({
  open,
  closeLeftMenu,
}) => {
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={open} onClose={closeLeftMenu}>
      <List className={classes.root}>
        <LeftMenuItem
          label="Home"
          route="/"
          icon={<Home />}
          closeLeftMenu={closeLeftMenu}
        />
        <LeftMenuItem
          label="About"
          icon={<Info />}
          closeLeftMenu={closeLeftMenu}
        />
        <LeftMenuItem
          label="Report Bun"
          icon={<Room />}
          closeLeftMenu={closeLeftMenu}
        />
        <LeftMenuItem
          label="Find Buns"
          icon={<Search />}
          closeLeftMenu={closeLeftMenu}
        />
        <LeftMenuItem
          label="Settings"
          icon={<Settings />}
          closeLeftMenu={closeLeftMenu}
        />
      </List>
    </Drawer>
  );
};

export default LeftMenu;
