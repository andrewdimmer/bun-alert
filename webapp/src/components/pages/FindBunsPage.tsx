import { Divider, List } from "@material-ui/core";
import React, { Fragment } from "react";
import { preProcessFilterAndSortBuns } from "../../scripts/filterAndSortBunSightings";
import BunSightingInfo from "../layouts/BunSightingInfo";
import Note from "../layouts/Note";
import PageTemplate from "../layouts/PageTemplate";
import RequireLocationServices from "../misc/RequireLocationServices";

declare interface FindBunsPageProps extends RequiresAccessToLocationServices {
  location: GeoLocation | undefined;
  allBuns: BunSighting[];
}

const FindBunsPage: React.FunctionComponent<FindBunsPageProps> = ({
  accessToLocationServices,
  location,
  allBuns,
}) => {
  const allBunsToNearbyBuns = (
    buns: BunSighting[],
    now: number,
    location: GeoLocation | undefined
  ) => {
    return location ? preProcessFilterAndSortBuns(buns, now, location) : [];
  };

  const [nearbyBuns, setNearbyBuns] = React.useState(
    allBunsToNearbyBuns(allBuns, Date.now(), location)
  );

  // Time refresher
  React.useEffect(() => {
    setNearbyBuns(allBunsToNearbyBuns(allBuns, Date.now(), location));
    const interval = setInterval(() => {
      setNearbyBuns(allBunsToNearbyBuns(allBuns, Date.now(), location));
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, [allBuns, location]);

  return (
    <PageTemplate heading="Find Nearby Buns!" title="Find Buns">
      <RequireLocationServices
        accessToLocationServices={accessToLocationServices}
        prefix="Location Services are required to find nearby buns!"
        message="We need to know where you are to show you nearby buns... please enable location services to find buns."
      >
        {nearbyBuns.length > 0 ? (
          <List>
            {nearbyBuns.map((bun, index, array) => {
              return (
                <Fragment key={`bun_sighting_${bun.id}`}>
                  <BunSightingInfo bun={bun} />
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
