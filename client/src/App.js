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
import Callback from "./components/Callback";
import NoMatch from "./pages/NoMatch";
import NavTabs from "./pages/NavTabs";
import Auth from './Auth/Auth';
import SecuredRoute from "./components/SecuredRoute";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


class App extends React.Component {
  render() {
    return (
      <Router >

        <div className="total-wrapper">
          <NavTabs />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/strategy" component={Strategy} />
            <Route exact path="/properties" component={Properties} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signin" render={() => <SignIn auth={auth} />} />
            <SecuredRoute path="/admin" component={AdminPage} auth={auth} />
            <SecuredRoute exact path="/admin/make-new-property" component={MakeNewProperty} />
            <SecuredRoute exact path="/admin/update-or-delete-property" component={UpdateProperty} />
            <SecuredRoute exact path="/admin/add-a-team-member" component={AddTeamMember} />
            <SecuredRoute exact path="/admin/update-or-delete-team-member" component={UpdateTeamMember} />
            <Route exact path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} auth={auth} />
            }} />
            <Route component={NoMatch} />
          </Switch>
        </div>

      </Router>

    )
  }
};

export default App;
