import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Main, SignUp } from "./components";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>

)

export default App;
