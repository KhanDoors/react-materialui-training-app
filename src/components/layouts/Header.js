import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "../Exercises/Dialog";

function Header({ muscles, onExerciseCreate }) {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#2f2f2f",
        padding: "5px"
      }}
    >
      <Toolbar>
        <Typography variant="headline" color="primary" style={{ flex: 1 }}>
          Exercise Database
        </Typography>
        <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
