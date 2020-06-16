import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from "./history";
import { Header, Main, SignUp } from "./components";

const App = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </Router>

)

export default App;
