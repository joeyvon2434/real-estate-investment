import React from "react";
import "./UpdateTeamMember.css";
import TeamInput from "../../components/TeamInput";
import API from "../../utils/API";

class UpdateTeamMember extends React.Component {

    state = {
        currentMember: {},
        resultsArray: []
    }

    componentDidMount() {
        this.getAllTeamMembers();
    }

 //Function to populate the input selector with all members to allow the user to choose the property to update
 populateSelector = (inputArray) => {
    //function to populate the selector with all options from the database
    for (let i = 0; i < inputArray.length; i++) {
        const select = document.getElementById("memberSelector");
        select.options[select.options.length] = new Option(inputArray[i].name, inputArray[i]._id);
    }
}

    //
    getAllTeamMembers = () => {
        API.getAllTeamMembers()
        .then(res => {
            this.setState({
                resultsArray: res.data
            });
        }).then(() => {
            this.populateSelector(this.state.resultsArray);
        })
        .catch(err => console.log(err));
    }

    //changes the state of the current member without altering unchanged items
    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const updatedMember = Object.assign({}, this.state.currentMember);
        
        updatedMember[name] = value;

        this.setState({
            currentMember: updatedMember
        });
    }

    //handles form updates when a new member is selected
    handleMemberChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        API.findOneMember(value)
        .then(res => {
            this.setState({
                currentMember: res.data
            });
        })
        .catch(err => console.log(err));
    }

    //function to update the member selected
    updateMember = (event) => {
        event.preventDefault();
        console.log("Starting Update...");
        API.updateMember(this.state.currentMember)
        .then(res => {
            this.setState({
                resultsArray: [],
                currentMember: {}
            });
            const select = document.getElementById("memberSelector");
            select.innerHTML = "";
            alert("Member Successfully Updated");
        })
        .then( () => {
            this.getAllTeamMembers();
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    //function to delete a property
    deleteMember = () => {
        const id =this.state.currentMember._id;
        API.removeMember(id)
        .then(res => {
            console.log("success");
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Update Team Member</h2>
                <label>Choose a Team Member to Update</label>
                <select
                    name="memberId"
                    id="memberSelector"
                    onChange={this.handleMemberChange}
                >
                    <option>Please Select a Team Member</option>
                </select>
                <TeamInput
                    name={this.state.currentMember.name}
                    summary={this.state.currentMember.summary}
                    buttonLabel={"Update Team Member"}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.updateMember}
                />
                <button
                    value={this.state.currentMember._id}
                    className="btn btn-danger delete-button"
                    onClick={this.deleteMember}
                    >
                    Delete Team Member: {this.state.currentMember.name}
                </button>
            </div>
        )
    }
};

export default UpdateTeamMember;