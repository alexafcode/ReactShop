import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { Header, ProductList, SignUp, SignIn } from "./components";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#115293",
    },
    background: {
      default: "#f6f6f6",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
