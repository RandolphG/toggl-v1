import React from "react";
import "antd/dist/antd.css";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import MoreIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#333333",
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));

function BottomAppBar({ toggleDrawer }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <div className={classes.grow} />
        <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default BottomAppBar;
