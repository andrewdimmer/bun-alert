import { Divider, List } from "@material-ui/core";
import React, { Fragment } from "react";
import { getBuns } from "../../data/localBuns";
import BunSightingInfo from "../layouts/BunSightingInfo";
import PageTemplate from "../layouts/PageTemplate";
import Note from "../misc/Note";
import { SetNotificationMessageProps } from "../misc/Notifications";
import RequireLocationServices from "../misc/RequireLocationServices";

declare interface FindBunsPageProps extends SetNotificationMessageProps {}

const FindBunsPage: React.FunctionComponent<FindBunsPageProps> = ({
  setNotification,
}) => {
  const [nearbyBuns, setNearbyBuns] = React.useState<BunSighting[]>(getBuns());
  const [now, setNow] = React.useState<number>(Date.now());
  const [location, setLocation] =
    React.useState<{ latitude: number; longitude: number }>();

  // Time refresher
  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Location refresher
  React.useEffect(() => {
    const locationListener = navigator.geolocation.watchPosition(
      (location) => {
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
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
  }, []);

  return (
    <PageTemplate heading="Find Nearby Buns!" title="Find Buns">
      <RequireLocationServices message="We need to know where you are to show you nearby buns... please enable location services to find buns.">
        {nearbyBuns.length > 0 ? (
          <List>
            {nearbyBuns.map((bun, index, array) => {
              return (
                <Fragment key={`bun_sighting_${index}`}>
                  <BunSightingInfo bun={bun} now={now} location={location} />
                  {index !== array.length - 1 && <Divider />}
                </Fragment>
              );
            })}
          </List>
        ) : (
          <Note
            type="info"
            prefix="There are not any nearby buns reported."
            message={
              'You can either report one yourself from the "Report Bun" page, or you can adjust the scope of your search from the "Settings" page to see if you can find buns further out.'
            }
          />
        )}
      </RequireLocationServices>
    </PageTemplate>
  );
};

export default FindBunsPage;
