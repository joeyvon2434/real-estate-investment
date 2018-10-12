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
import MakeNewProperty from "./pages/MakeNewProperty";
import UpdateProperty from "./pages/UpdateProperty";
import AddTeamMember from "./pages/AddTeamMember";
import UpdateTeamMember from "./pages/UpdateTeamMember";
import NoMatch from "./pages/NoMatch";
import NavTabs from "./pages/NavTabs";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/strategy" component={Strategy} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/admin/make-new-property" component={MakeNewProperty} />
        <Route exact path="/admin/update-or-delete-property" component={UpdateProperty} />
        <Route exact path="/admin/add-a-team-member" component={AddTeamMember} />
        <Route exact path="/admin/update-or-delete-team-member" component={UpdateTeamMember} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
