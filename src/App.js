import React from "react";
import "./styles/sass/app.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Home from "./components/Home";
import Theme from "./Theme";
import Exam from "./components/TestDemo/Exam";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      {/* <Router basename="/react-landing"> */}
      <Router basename="/">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/demo" component={Exam} exact />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
