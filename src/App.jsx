import React from "react";
import { StoreProvider, createStore } from "easy-peasy";
import model from './components/demo/model';
import "./styles/sass/app.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Home from "./components/Home";
import Theme from "./Theme";
import Exam from './components/demo/Exam'
import Signup from './components/Signup'
import Login from './components/Login'
import DashHome from './components/dash/DashHome'

const store = createStore(model);

const ExamApp = () =>{
  return (
    <StoreProvider store={store}>
     <Exam/>
    </StoreProvider>
  );
};

const App = () =>{
  return (
    <MuiThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dash" component={DashHome} />
          <Route exact path="/demo/:id" component={ExamApp}  />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
