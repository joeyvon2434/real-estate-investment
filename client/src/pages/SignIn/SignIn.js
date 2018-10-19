import React from "react";
import "./SignIn.css";


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
                <h2 className="page-title">Sign In Page</h2>


                {!isAuthenticated() ? (<button
                    onClick={this.login.bind(this)}
                >
                    Log In
                </button>
                ) : <button
                    onClick={this.logout.bind(this)}
                >
                        Log Out
               </button>}


            </div>
        )
    }
};

export default SignIn;