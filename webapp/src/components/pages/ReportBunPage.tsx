import React from "react";
import PageTemplate from "../layouts/PageTemplate";

declare interface ReportBunPageProps {}

const ReportBunPage: React.FunctionComponent<ReportBunPageProps> = ({}) => {
  return (
    <PageTemplate
      heading="Report a Bun Sighting"
      title="Report Bun"
    ></PageTemplate>
  );
};

export default ReportBunPage;
