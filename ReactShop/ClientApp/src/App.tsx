import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Main } from "./components";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>

)

export default App;
