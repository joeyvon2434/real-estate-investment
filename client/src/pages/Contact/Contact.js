import React from "react";
import "./Contact.css";

class Contact extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <h2>Contact Page</h2>
                <form>
                    <label>Email Address</label><br></br>
                    <input type="text" name="email"></input><br></br>
                    <label>Name</label><br></br>
                    <input type="text" name="name"></input><br></br>
                    <label>Phone</label><br></br>
                    <input type="text" name="phone"></input><br></br>
                    <label>Message</label><br></br>
                    <textarea type="text" name="message"></textarea><br></br>
                </form>
            </div>
        )
    }
};

export default Contact;