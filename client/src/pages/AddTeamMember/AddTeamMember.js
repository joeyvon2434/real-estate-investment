import React from "react";
import "./AddTeamMember.css";
import TeamInput from "../../components/TeamInput";
import API from "../../utils/API";
import ModalBox from "../../components/ModalBox";

//component handles adding team members

class AddTeamMember extends React.Component {

    state = {
        name: "",
        summary: "",
        picture: "",
        showCreateModal: false
    }

    //creates team member
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

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
        const newToggle = !this.state.showCreateModal;
        this.setState({
            showCreateModal: newToggle
        });
    }

    render() {
        return (
            <div className="wrapper">
            {this.state.showCreateModal ? (<ModalBox
                    cancelFunction={this.createModalToggle}
                    confirmFunction={this.handleFormSubmit}
                    modalText={`Are you sure you want to create ${this.state.name}?`}
                    modalHeadText={`Creating Property!`}
                    confirmText={`Create: ${this.state.name}`}
                />) : ""}
                <h2 className="page-title">Add a New Team Member</h2>
                <TeamInput
                    name={"Input Name"}
                    summary={"Input Summary"}
                    buttonLabel={"Add New Team Member"}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.createModalToggle}
                />
            </div>
        )
    }
};

export default AddTeamMember;