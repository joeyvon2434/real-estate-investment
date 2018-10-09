import React from "react";
import "./SignIn.css";

class SignIn extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <h2>Sign In Page</h2>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" placeholder="password" />
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;