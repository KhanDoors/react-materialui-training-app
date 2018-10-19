import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Header() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#2f2f2f",
        padding: "5px"
      }}
    >
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Exercise Database
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
