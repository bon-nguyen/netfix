import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import * as ROUTES from './constants/routes';
import { Home } from './pages';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
      </Switch>
    </Router>

  );
};

export default App;