import React from "react";
import "./Footer.css";

//It's a footer... it kind of explains itself

class Footer extends React.Component {


    render() {

        return(
            <div className="footer">
                Design By: <a className="designer-link" href="https://joeyvon2434.github.io/josephvonedwins/">Joseph Von Edwins</a>
            </div>
        )
    }
};

export default Footer;