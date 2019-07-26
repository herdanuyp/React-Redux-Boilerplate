import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import Login from "./components/login";
import NoMatch from "./components/noMatch";

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <div>
              <h1>Hallo</h1>
            </div>
          )}
        />
        <Route path="/authorize" component={Login} />
        <Route component={NoMatch} />

      </Switch>
    </ConnectedRouter>
  );
};

export default App;
