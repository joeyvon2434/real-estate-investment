import React from "react";
import { Route } from "react-router-dom";


function SecuredRoute(props) {
    console.log(props.location.pathname);
    const Component = props.component
    
    return (
        <Route path={props.path} render={() => {
            if (!props.auth.isAuthenticated()) {
                props.auth.login();
                return <div>Please Sign In</div>;
            }
            return <Component />
        }} />
    )
    
};

export default SecuredRoute;