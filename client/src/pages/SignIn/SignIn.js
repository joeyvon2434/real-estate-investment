import React from "react";
import "./SignIn.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

//sign in screen

class SignIn extends React.Component {

    //log in method calls the Auth0 login API passed through props
    login() {
        this.props.auth.login();
    }

    //log out method calls the Auth0 logout API passed through props
    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="wrapper">
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={1500}
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionLeaveTimeout={1500}
                >
                    <h2 className="page-title">Sign In Page</h2>


                    {!isAuthenticated() ? (
                        <button
                            className="btn"
                            onClick={this.login.bind(this)}
                        >
                            Log In
                        </button>
                            ) : <button
                        className="btn"
                        onClick={this.logout.bind(this)}
                        >
                            Log Out
                        </button>}

                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default SignIn;