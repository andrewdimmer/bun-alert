import { Divider, List } from "@material-ui/core";
import React, { Fragment } from "react";
import { getBuns } from "../../data/localBuns";
import BunSightingInfo from "../layouts/BunSightingInfo";
import PageTemplate from "../layouts/PageTemplate";

declare interface FindBunsPageProps {}

const FindBunsPage: React.FunctionComponent<FindBunsPageProps> = () => {
  const [nearbyBuns, setNearbyBuns] = React.useState<BunSighting[]>(getBuns());

  return (
    <PageTemplate heading="Find Nearby Buns!" title="Find Buns">
      <List>
        {nearbyBuns.map((bun, index, array) => {
          return (
            <Fragment>
              <BunSightingInfo bun={bun} index={index} />
              {index !== array.length - 1 && <Divider />}
            </Fragment>
          );
        })}
      </List>
    </PageTemplate>
  );
};

export default FindBunsPage;
