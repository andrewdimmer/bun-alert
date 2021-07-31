import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

declare interface LeftMenuItemProps {
  label: string;
  route?: string;
  icon?: React.ReactNode;
  closeLeftMenu: () => void;
}

const LeftMenuItem: React.FunctionComponent<LeftMenuItemProps> = ({
  label,
  route = label.toLowerCase().replaceAll(" ", "-"),
  icon,
  closeLeftMenu,
}) => {
  const routeHistory = useHistory();

  return (
    <ListItem
      button
      key={`menu_item_${label.toLowerCase().replaceAll(" ", "_")}`}
    >
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText
        primary={label}
        onClick={() => {
          routeHistory.push(route);
          closeLeftMenu();
        }}
      />
    </ListItem>
  );
};

export default LeftMenuItem;
