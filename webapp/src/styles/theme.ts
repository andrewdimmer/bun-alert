import { createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const lightTheme = createTheme({
  palette: {
    primary: red,
    secondary: undefined,
    success: undefined,
    error: undefined,
    info: undefined,
    warning: undefined,
  },
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: red,
    secondary: undefined,
    success: undefined,
    error: undefined,
    info: undefined,
    warning: undefined,
  },
});
