import React from "react";
import "./Callback.css";


//provides a route for Auth0 to return to after authentication attempts before redirecting to default pages
class Callback extends React.Component {

    render() {

        return(
            <div>
                Callback
                <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=3640f6095bc8915b3972706e3296a7ee" alt="Loading gif"></img>
            </div>
        )
    }
};

export default Callback;