import React from "react";
import "./Contact.css";
import API from "../../utils/API";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Contact extends React.Component {

    state = {
        emailAddress: "",
        name: "",
        phone: "",
        message: ""
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    sendMessage = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.emailAddress === "" || this.state.name === "" || this.state.message === "") {
            return alert("Email, Name, and Message are required fields");
        };
        API.sendEmail(this.state)
            .then(res => {
                console.log('success');
                window.location.href = "/";
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="wrapper">
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionLeaveTimeout={1500}
                >
                    <h2 className="page-title">Contact Page</h2>
                    <form className="contact-form">
                        <label className="input-label">Email Address</label><br></br>
                        <input onChange={this.handleInputChange} type="text" name="emailAddress" className="input-field"></input><br></br>
                        <label className="input-label">Name</label><br></br>
                        <input onChange={this.handleInputChange} type="text" name="name" className="input-field"></input><br></br>
                        <label className="input-label">Phone</label><br></br>
                        <input onChange={this.handleInputChange} type="text" name="phone" className="input-field"></input><br></br>
                        <label className="input-label">Message</label><br></br>
                        <textarea onChange={this.handleInputChange} type="text" name="message" className="input-field text-field"></textarea><br></br>
                        <button
                            onClick={this.sendMessage}
                            className="btn"
                        >Send Message</button>
                    </form>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default Contact;