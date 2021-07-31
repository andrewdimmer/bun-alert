import React from "react";
import PageTemplate from "../layouts/PageTemplate";

declare interface SettingsPageProps {}

const SettingsPage: React.FunctionComponent<SettingsPageProps> = () => {
  return <PageTemplate heading="Settings"></PageTemplate>;
};

export default SettingsPage;
