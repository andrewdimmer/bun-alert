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
import { setPreLoadedLocation } from "./data/preLoadedLocation";
import { listenForNewBunSightings } from "./scripts/listenForNewBunSightings";

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

  // Location refresher
  const [location, setLocation] = React.useState<GeoLocation>();

  React.useEffect(() => {
    if (accessToLocationServices === true) {
      const locationListener = navigator.geolocation.watchPosition(
        (location) => {
          const newLocation = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          };
          setLocation(newLocation);
          setPreLoadedLocation(newLocation);
        },
        (error) => {
          console.log(error);
          setNotification({
            type: "error",
            message:
              "Unable to get your location to find buns nearby. Please try again.",
          });
        }
      );
      return () => {
        navigator.geolocation.clearWatch(locationListener);
      };
    }
  }, [accessToLocationServices]);

  // Firestore Buns
  const [nearbyBuns, setNearbyBuns] = React.useState<BunSighting[]>([]);

  React.useEffect(() => {
    const bunListener = listenForNewBunSightings(
      setNearbyBuns,
      setNotification
    );
    return () => {
      bunListener();
    };
  }, []);

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
              location={location}
              nearbyBuns={nearbyBuns}
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
