import { Card, Container, Paper, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import NavBar from "./components/layouts/NavBar";
import BugReportFab from "./components/misc/BugReportFab";
import NotificationBar, {
  NotificationMessage,
} from "./components/misc/Notifications";
import { styles } from "./styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404Page from "./components/pages/Error404Page";
import LeftMenu from "./components/layouts/LeftMenu";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ReportBunPage from "./components/pages/ReportBunPage";
import FindBunsPage from "./components/pages/FindBunsPage";
import SettingsPage from "./components/pages/SettingsPage";

declare interface AppProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const App: React.FunctionComponent<AppProps> = ({ theme, toggleTheme }) => {
  const classes = styles();

  const [notification, setNotification] =
    React.useState<NotificationMessage>(null);

  const [leftMenuOpen, setLeftMenuOpen] = React.useState<boolean>(false);

  const toggleLeftMenu = () => {
    setLeftMenuOpen(!leftMenuOpen);
  };

  const closeLeftMenu = () => {
    setLeftMenuOpen(false);
  };

  return (
    <Router>
      <NavBar
        theme={theme}
        toggleTheme={toggleTheme}
        toggleLeftMenu={toggleLeftMenu}
      />
      <Container>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/report-bun" exact>
            <ReportBunPage />
          </Route>
          <Route path="/find-buns" exact>
            <FindBunsPage />
          </Route>
          <Route path="/settings" exact>
            <SettingsPage />
          </Route>
          <Route>
            <Error404Page />
          </Route>
        </Switch>
      </Container>
      <LeftMenu open={leftMenuOpen} closeLeftMenu={closeLeftMenu} />
      <NotificationBar
        notification={notification}
        setNotification={setNotification}
      />
      <BugReportFab />
    </Router>
  );
};

export default App;
