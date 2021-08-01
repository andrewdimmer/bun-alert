import React, { Fragment } from "react";
import Note from "./Note";

declare interface RequireLocationServicesProps {
  prefix?: string;
  message?: string;
}

const RequireLocationServices: React.FunctionComponent<RequireLocationServicesProps> =
  ({
    prefix = "Location Services is Required!",
    message = "Please enable location services to access this page.",
    children,
  }) => {
    const [accessToLocationServices, setAccessToLocationServices] =
      React.useState<boolean>();

    if (accessToLocationServices === undefined) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setAccessToLocationServices(true);
        },
        () => {
          setAccessToLocationServices(false);
        }
      );
    }

    return (
      <Fragment>
        {accessToLocationServices === true ? (
          children
        ) : (
          <Note
            type={accessToLocationServices === false ? "error" : "info"}
            prefix={prefix}
            message={message}
          />
        )}
      </Fragment>
    );
  };

export default RequireLocationServices;
