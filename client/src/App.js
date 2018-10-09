import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Strategy from "./pages/Strategy";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import AdminPage from "./pages/AdminPage";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/strategy" component={Strategy} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/admin" component={AdminPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
