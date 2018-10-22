import React from "react";
import "./Contact.css";
import API from "../../utils/API";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ErrorModalBox from "../../components/ErrorModalBox";


//creates the contact / invest page and handles the emails

class Contact extends React.Component {

    state = {
        emailAddress: "",
        name: "",
        phone: "",
        message: "",
        showErrorModal: false,
        showConfirmModal: false
    }

    
    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    //sends email throug the nodemailer email package on the back end
    sendMessage = (event) => {
        event.preventDefault();

        //front end required field validation
        if (this.state.emailAddress === "" || this.state.name === "" || this.state.message === "") {
            return this.errorModalToggle();
        };

        //call to backend API
        API.sendEmail(this.state)
            .then(res => {
                console.log('success');
                //Bring up success screen
                this.confirmModalToggle();
            })
            .catch(err => console.log(err));
    }

    //Modal to confirm correct fields are filled out
    errorModalToggle = () => {
        const newToggle = !this.state.showErrorModal;
        this.setState({
            showErrorModal: newToggle
        });
    }

      //Modal to confirm correct fields are filled out
      confirmModalToggle = () => {
        const newToggle = !this.state.showConfirmModal;
        this.setState({
            showConfirmModal: newToggle
        });
        setTimeout( ()=> {
            this.sendToHomeWindow();
        }, 5000)
    }

    //redirect to home function
    sendToHomeWindow = () => {
        window.location.replace("/");
    }

    render() {
        return (
            <div className="wrapper">
            {this.state.showErrorModal ? (<ErrorModalBox
                    cancelFunction={this.errorModalToggle}
                    modalText={`The following fields are required:
                                name
                                email`}
                    modalHeadText={`Error: Required Fields!`}
                    confirmText={`Create: ${this.state.propertyName}`}
                />) : ""}
            {this.state.showConfirmModal ? (<ErrorModalBox
                    cancelFunction={this.sendToHomeWindow}
                    modalText={`Thank you for your interest in ROH properties.`}
                    modalHeadText={`Message Sent`}
                    confirmText={`Return to Home`}
                />) : ""}
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={1500}
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionLeaveTimeout={1500}
                >
                    <h2 className="page-title">Investors</h2>
                    <form className="contact-form gray-transparent-background">
                        <p className="input-label">We are seeking investors, and brokers to work with for mutual profit. If our investment strategy matches with your philosophy, please feel free to contact us with the form below.</p>
                        <br></br>
                        <label className="input-label">Email Address</label>
                        <input onChange={this.handleInputChange} type="text" name="emailAddress" className="input-field"></input>
                        <label className="input-label">Name</label>
                        <input onChange={this.handleInputChange} type="text" name="name" className="input-field"></input>
                        <label className="input-label">Phone</label>
                        <input onChange={this.handleInputChange} type="text" name="phone" className="input-field"></input>
                        <label className="input-label">Message</label>
                        <textarea onChange={this.handleInputChange} type="text" name="message" className="input-field text-field"></textarea>
                        <button
                            onClick={this.sendMessage}
                            className="btn send-button"
                        >Send Message</button>
                    </form>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default Contact;