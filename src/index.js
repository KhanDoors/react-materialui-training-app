import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import indigo from "@material-ui/core/colors/indigo";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: indigo.A700,
      light: indigo[600],
      dark: indigo[300]
    },
    type: "dark"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,

  document.getElementById("root")
);
