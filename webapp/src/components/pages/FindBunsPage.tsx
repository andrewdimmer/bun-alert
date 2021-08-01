import { Divider, List } from "@material-ui/core";
import React, { Fragment } from "react";
import { getBuns } from "../../data/localBuns";
import BunSightingInfo from "../layouts/BunSightingInfo";
import PageTemplate from "../layouts/PageTemplate";
import RequireLocationServices from "../misc/RequireLocationServices";

declare interface FindBunsPageProps {}

const FindBunsPage: React.FunctionComponent<FindBunsPageProps> = () => {
  const [nearbyBuns, setNearbyBuns] = React.useState<BunSighting[]>(getBuns());
  const [now, setNow] = React.useState<number>(Date.now());

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
      <RequireLocationServices message="We need to know where you are to show you nearby buns... please enable location services to find buns.">
        <List>
          {nearbyBuns.map((bun, index, array) => {
            return (
              <Fragment key={`bun_sighting_${index}`}>
                <BunSightingInfo bun={bun} now={now} />
                {index !== array.length - 1 && <Divider />}
              </Fragment>
            );
          })}
        </List>
      </RequireLocationServices>
    </PageTemplate>
  );
};

export default FindBunsPage;
