import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
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
import Footer from "./components/Footer";
import Auth from './Auth/Auth';
import SecuredRoute from "./components/SecuredRoute";
import history from "./history";

//creating a new instance of the authentication Auth0 package for use in the app
const auth = new Auth();

//used to call Auth0 for authentication
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


class App extends React.Component {


  render() {
    return (
      <Router history={history}>

        <div className="total-wrapper">
          <div className="scroll-wrapper">
            <NavTabs auth={auth} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/strategy" component={Strategy} />
              <Route exact path="/properties" component={Properties} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/signin" render={() => <SignIn auth={auth} />} />
              <SecuredRoute exact path="/admin" component={AdminPage} auth={auth} />
              <SecuredRoute exact path="/admin/make-new-property" component={MakeNewProperty} auth={auth} />
              {/* <SecuredRoute exact path="/admin/update-property/:id" component={UpdateProperty} auth={auth} /> */}
              <SecuredRoute exact path="/admin/add-a-team-member" component={AddTeamMember} auth={auth} />
              {/* <SecuredRoute exact path="/admin/update-team-member/:id" component={UpdateTeamMember} auth={auth} /> */}
              <Route exact path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} auth={auth} />
              }} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>

      </Router>

    )
  }
};

export default App;
