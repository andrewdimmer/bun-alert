import React, { Fragment } from "react";
import Note from "../layouts/Note";

declare interface RequireLocationServicesProps
  extends RequiresAccessToLocationServices {
  prefix?: string;
  message?: string;
}

const RequireLocationServices: React.FunctionComponent<RequireLocationServicesProps> =
  ({
    accessToLocationServices,
    prefix = "Location Services are required!",
    message = "Please enable location services to access this page.",
    children,
  }) => {
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
