import React from "react";
import "./SignIn.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class SignIn extends React.Component {

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        console.log(this.props.auth);
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="wrapper">
                <ReactCSSTransitionGroup
                    transitionName="fade"
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