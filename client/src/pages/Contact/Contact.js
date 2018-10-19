import React from "react";
import "./Contact.css";
import API from "../../utils/API";

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
        if(this.state.emailAddress === "" || this.state.name === "" || this.state.message === "") {
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
                <h2 className="page-title">Contact Page</h2>
                <form>
                    <label>Email Address</label><br></br>
                    <input onChange={this.handleInputChange} type="text" name="emailAddress"></input><br></br>
                    <label>Name</label><br></br>
                    <input onChange={this.handleInputChange} type="text" name="name"></input><br></br>
                    <label>Phone</label><br></br>
                    <input onChange={this.handleInputChange} type="text" name="phone"></input><br></br>
                    <label>Message</label><br></br>
                    <textarea onChange={this.handleInputChange} type="text" name="message"></textarea><br></br>
                    <button
                    onClick={this.sendMessage}
                    className="btn btn-primary"
                    >Send Message</button>
                </form>
            </div>
        )
    }
};

export default Contact;