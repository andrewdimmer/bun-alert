import { Divider, List } from "@material-ui/core";
import React, { Fragment } from "react";
import BunSightingInfo from "../layouts/BunSightingInfo";
import PageTemplate from "../layouts/PageTemplate";
import Note from "../misc/Note";
import { SetNotificationMessageProps } from "../misc/Notifications";
import RequireLocationServices from "../misc/RequireLocationServices";

declare interface FindBunsPageProps
  extends RequiresAccessToLocationServices,
    SetNotificationMessageProps {
  location: GeoLocation | undefined;
  nearbyBuns: BunSighting[];
}

const FindBunsPage: React.FunctionComponent<FindBunsPageProps> = ({
  accessToLocationServices,
  location,
  nearbyBuns,
  setNotification,
}) => {
  const [now, setNow] = React.useState<number>(Date.now());

  // Time refresher
  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <PageTemplate heading="Find Nearby Buns!" title="Find Buns">
      <RequireLocationServices
        accessToLocationServices={accessToLocationServices}
        message="We need to know where you are to show you nearby buns... please enable location services to find buns."
      >
        {nearbyBuns.length > 0 ? (
          <List>
            {nearbyBuns.map((bun, index, array) => {
              return (
                <Fragment key={`bun_sighting_${bun.id}`}>
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
