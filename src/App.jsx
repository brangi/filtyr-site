import React from "react";
import { StoreProvider, createStore } from "easy-peasy";
import model from './components/TestDemo/model';
import "./styles/sass/app.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import { MuiThemeProvider } from "@material-ui/core/styles";
import Home from "./components/Home";
// import Theme from "./Theme";
import Exam from './components/TestDemo/Exam'
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
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/demo/:id" component={ExamApp}  />
        </Switch>
        </div>
      </Router>
  );
};

export default App;
