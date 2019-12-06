import React from "react";

import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from "./Main.component";
let defaultHistory = createBrowserHistory();
const App: React.FC<{ history: any }> = ({ history }) => {
  return (
    <Router history={history || defaultHistory}>
        <Switch>
          <Route exact path="/e2e/main" component={Main} />
        </Switch>
    </Router>
  );
};

export default App;
