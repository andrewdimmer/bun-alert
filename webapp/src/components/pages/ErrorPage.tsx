import { Typography } from "@material-ui/core";
import React from "react";
import PageTemplate from "../layouts/PageTemplate";

declare interface ErrorPageProps {
  errorCode?: number;
  errorMessage: string;
  errorDescription?: string;
}

const ErrorPage: React.FunctionComponent<ErrorPageProps> = ({
  errorCode,
  errorMessage,
  errorDescription,
}) => {
  const errorCodeString = errorCode !== undefined ? ` ${errorCode}` : "";

  return (
    <PageTemplate
      heading={`Error${errorCodeString}!`}
      title={`Error${errorCodeString}`}
    >
      <Typography variant="h4">{errorMessage}</Typography>
      {errorDescription && (
        <Typography variant="body1">{errorDescription}</Typography>
      )}
    </PageTemplate>
  );
};

export default ErrorPage;
