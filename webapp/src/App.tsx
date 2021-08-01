import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftMenu from "./components/layouts/LeftMenu";
import NavBar from "./components/layouts/NavBar";
import BugReportFab from "./components/misc/BugReportFab";
import NotificationBar, {
  NotificationMessage,
} from "./components/misc/Notifications";
import AboutPage from "./components/pages/AboutPage";
import Error404Page from "./components/pages/Error404Page";
import FindBunsPage from "./components/pages/FindBunsPage";
import HomePage from "./components/pages/HomePage";
import ReportBunPage from "./components/pages/ReportBunPage";
import SettingsPage from "./components/pages/SettingsPage";

declare interface AppProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const App: React.FunctionComponent<AppProps> = ({ theme, toggleTheme }) => {
  // In App Notifications
  const [notification, setNotification] =
    React.useState<NotificationMessage>(null);

  // Let Menu
  const [leftMenuOpen, setLeftMenuOpen] = React.useState<boolean>(false);

  const toggleLeftMenu = () => {
    setLeftMenuOpen(!leftMenuOpen);
  };

  const closeLeftMenu = () => {
    setLeftMenuOpen(false);
  };

  // Location Services
  const [accessToLocationServices, setAccessToLocationServices] =
    React.useState<boolean>();

  if (accessToLocationServices === undefined) {
    navigator.geolocation.getCurrentPosition(
      () => {
        setAccessToLocationServices(true);
      },
      () => {
        setAccessToLocationServices(false);
      }
    );
  }

  React.useEffect(() => {}, []);

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
            <ReportBunPage
              accessToLocationServices={accessToLocationServices}
              setNotification={setNotification}
            />
          </Route>
          <Route path="/find-buns" exact>
            <FindBunsPage
              accessToLocationServices={accessToLocationServices}
              setNotification={setNotification}
            />
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
