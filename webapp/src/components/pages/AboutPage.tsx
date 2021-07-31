import React from "react";
import PageTemplate from "../layouts/PageTemplate";

declare interface AboutPageProps {}

const AboutPage: React.FunctionComponent<AboutPageProps> = ({}) => {
  return <PageTemplate heading="About Bun Alert" title="About"></PageTemplate>;
};

export default AboutPage;
