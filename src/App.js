import React from "react";
import "./styles/sass/app.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Home from "./components/Home";
// import Landing2 from "./components/Landing2";
// import Demo from "./components/Demo";
import Theme from "./Theme";
// import Landing3 from "./components/Landing3";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      {/* <Router basename="/react-landing"> */}
      <Router basename="/">
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route component={Error} />
          <Route path="/landing1" component={Landing1} />
          <Route path="/landing2" component={Landing2} />
          <Route path="/landing3" component={Landing3} />
          */}
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
