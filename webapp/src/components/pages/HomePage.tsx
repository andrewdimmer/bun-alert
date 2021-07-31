import React from "react";
import PageTemplate from "../layouts/PageTemplate";

declare interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = ({}) => {
  return <PageTemplate heading="Welcome to Bun Alert!" title=""></PageTemplate>;
};

export default HomePage;
