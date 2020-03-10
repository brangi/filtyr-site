import React from "react";
import { StoreProvider, createStore } from "easy-peasy";
import model from './components/TestDemo/model';
import "./styles/sass/app.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Home from "./components/Home";
import Theme from "./Theme";
import TestDemo from "./components/TestDemo/TestDemo";
import ExamInit from './components/TestDemo/ExamInit'
const store = createStore(model);


const ExamApp = () =>{
  return (
    <StoreProvider store={store}>
     <ExamInit/>
    </StoreProvider>
);
}

const App =() =>{
  return (
    <MuiThemeProvider theme={Theme}>
      {/* <Router basename="/react-landing"> */}
      <Router basename="/">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/demo" component={ExamApp} exact />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
