import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import "./App.scss";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/main" render={() => <Login />}>
            <Login />
          </Route>
          <Route
            path="/"
            render={() => (
              <AnimatePresence exitBeforeEnter>
                <Main />
              </AnimatePresence>
            )}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}
