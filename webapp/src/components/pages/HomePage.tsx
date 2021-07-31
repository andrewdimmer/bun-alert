import { Typography } from "@material-ui/core";
import { Info, Room, Search, Settings } from "@material-ui/icons";
import React from "react";
import { styles } from "../../styles";
import PageTemplate from "../layouts/PageTemplate";
import HomePageButton from "../misc/HomePageButton";

declare interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const classes = styles();

  return (
    <PageTemplate heading="Welcome to Bun Alert!" title="">
      <Typography variant="h6" className={classes.pageTitle}>
        "They need to know: there are buns." - xkcd 1871
      </Typography>
      <HomePageButton
        label="Learn More About Bun Alert"
        route="/about"
        icon={Info}
      />
      <HomePageButton
        label="Report a Bun Sighting"
        route="/report-bun"
        icon={Room}
      />
      <HomePageButton
        label="Find Nearby Buns"
        route="/find-buns"
        icon={Search}
      />
      <HomePageButton label="Settings" route="/settings" icon={Settings} />
    </PageTemplate>
  );
};

export default HomePage;
