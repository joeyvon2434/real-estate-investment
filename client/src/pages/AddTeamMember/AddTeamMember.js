import React from "react";
import "./AddTeamMember.css";
import TeamInput from "../../components/TeamInput";
import API from "../../utils/API";
import ModalBox from "../../components/ModalBox";
import ErrorModalBox from "../../components/ErrorModalBox";

//component handles adding team members

class AddTeamMember extends React.Component {

    state = {
        name: "",
        summary: "",
        picture: "",
        showCreateModal: false,
        showErrorModal: false,
        highlightRequiredFields: false
    }

    //creates team member
    handleFormSubmit = (event) => {
        event.preventDefault();

        const newMember = {
            name: this.state.name,
            summary: this.state.summary,
            picture: this.state.picture
        };
        //calls to backend and submits the new team member
        API.createNewTeamMember(newMember)
        .then(res => {
            console.log("success");
            window.location.replace("/admin");
    })
        .catch(err => console.log(err));
    }
    
    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    //Create Property confirm using a created modal
    createModalToggle = (event) => {
        event.preventDefault();

        if (this.state.name === "" || this.state.summary === "" || this.state.picture === "") {
            console.log('fails validation');
            return this.errorModalToggle();
        }

        const newToggle = !this.state.showCreateModal;
        this.setState({
            showCreateModal: newToggle
        });
    }

    //Modal to confirm correct fields are filled out
    errorModalToggle = () => {
        const newToggle = !this.state.showErrorModal;
        this.setState({
            showErrorModal: newToggle,
            highlightRequiredFields: true
        });
    }

    render() {
        return (
            <div className="wrapper">
            {this.state.showCreateModal ? (<ModalBox
                    cancelFunction={this.createModalToggle}
                    confirmFunction={this.handleFormSubmit}
                    modalText={`Are you sure you want to create ${this.state.name}?`}
                    modalHeadText={`Creating Team Member!`}
                    confirmText={`Create: ${this.state.name}`}
                />) : ""}
            {this.state.showErrorModal ? (<ErrorModalBox
                    cancelFunction={this.errorModalToggle}
                    modalText={`All fields are required prior to submission`}
                    modalHeadText={`Error: Missing Required Fields!`}
                    confirmText={`Cancel`}
                />) : ""}
                <h2 className="page-title">Add a New Team Member</h2>
                <TeamInput
                    name={"Input Name"}
                    summary={"Input Summary"}
                    buttonLabel={"Add New Team Member"}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.createModalToggle}
                    highlightRequiredFields={this.state.highlightRequiredFields}
                />
            </div>
        )
    }
};

export default AddTeamMember;