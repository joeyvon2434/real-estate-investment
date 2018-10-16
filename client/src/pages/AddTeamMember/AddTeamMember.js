import React from "react";
import "./AddTeamMember.css";
import TeamInput from "../../components/TeamInput";
import API from "../../utils/API";

class AddTeamMember extends React.Component {

    state = {
        name: "",
        summary: "",
        picture: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        const newMember = {
            name: this.state.name,
            summary: this.state.summary,
            picture: this.state.picture
        };

        API.createNewTeamMember(newMember)
        .then(res => console.log("success"))
        .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Add a New Team Member</h2>
                <TeamInput
                    name={"Input Name"}
                    summary={"Input Summary"}
                    buttonLabel={"Add New Team Member"}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        )
    }
};

export default AddTeamMember;