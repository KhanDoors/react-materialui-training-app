import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "../Exercises/Dialogs/Create";

function Header({ muscles }) {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#2f2f2f",
        padding: "5px"
      }}
    >
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
          Exercise Database
        </Typography>
        <CreateDialog muscles={muscles} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
