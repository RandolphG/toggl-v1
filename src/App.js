import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import "./App.scss";
import Drawer from "@material-ui/core/Drawer";
import { List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import TimerIcon from "@material-ui/icons/Timer";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import SettingsIcon from "@material-ui/icons/Settings";
import BottomAppBar from "./components/bottomAppBar";
import { AnimatePresence } from "framer-motion";
export default function App() {
  // bool value state
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  /**
   *
   * @param open
   * @returns {function(...[*]=)}
   */
  const toggleDrawer = (open) => (event) => {
    console.log(`drawer ${open ? "open" : "closed"}`);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen((open) => !open);
  };
  const handleChange = (e) => {
    setChecked((checked) => !checked);
  };
  const dashboard = [
    { link: "LOGIN", url: "/login", icon: <LockOpenIcon /> },
    { link: "TIMER", url: "/", icon: <TimerIcon /> },
    { link: "REPORT", url: "#", icon: <AssessmentIcon /> },
    { link: "SETTINGS", url: "#", icon: <SettingsIcon /> },
    { link: "HELP", url: "#", icon: <LiveHelpIcon /> },
  ];

  return (
    <Router>
      <div>
        <Drawer
          className="drawer"
          anchor={"left"}
          open={open}
          onClose={toggleDrawer(false)}
        >
          <div className="drawer-container">
            <span className="drawer-header">toggl</span>
            <List className="drawer-list">
              {dashboard.map(({ link, url, icon }, idx) => (
                <ListItem className="list-item" key={idx} button>
                  <Link className="link" to={url}>
                    <ListItemIcon className="icon">{icon}</ListItemIcon>
                    {link}
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/" render={() => <Main open={open} />} />
          </Switch>
        </AnimatePresence>
        <BottomAppBar toggleDrawer={toggleDrawer} />
      </div>
    </Router>
  );
}
