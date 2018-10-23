import React from "react";
import "./UpdateTeamMember.css";
import TeamInput from "../../components/TeamInput";
import API from "../../utils/API";
import ModalBox from "../../components/ModalBox";

//displays update team member page

class UpdateTeamMember extends React.Component {

    state = {
        currentMember: {},
        resultsArray: [],
        showUpdateModal: false
    }
    //gets all team members on initial page load
    componentDidMount() {
        this.findMember();
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

    //get current member from database using call for single member
    findMember = () => {
        const value =this.props.memberId;
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
        .then( (res) => {
            window.location.replace("/admin");
        })
        .catch(err => console.log(err));
    }

    //Update team member confirm modal
    updateModalToggle = (event) => {
        event.preventDefault();
        const newToggle = !this.state.showUpdateModal
        this.setState({
            showUpdateModal: newToggle
        })
    }

    render() {
        return (
            <div className="update-team-wrapper">
            <div className="wrapper inner-team-wrapper">
            {this.state.showUpdateModal ? (<ModalBox 
                                                cancelFunction={this.updateModalToggle}
                                                confirmFunction={this.updateMember}
                                                modalText={`Are you sure you want to update ${this.state.currentMember.name}?`}
                                                modalHeadText={`Update Team Member!`}
                                                confirmText={`Update: ${this.state.currentMember.name}`}
                                            />) : ""}
                <h2 className="page-title">Update Team Member: {this.state.currentMember.name}</h2>
                <TeamInput
                    name={this.state.currentMember.name}
                    summary={this.state.currentMember.summary}
                    picture={this.state.currentMember.picture}
                    buttonLabel={"Update Team Member"}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.updateModalToggle}
                />

            </div>
           </div>
        )
    }
};

export default UpdateTeamMember;