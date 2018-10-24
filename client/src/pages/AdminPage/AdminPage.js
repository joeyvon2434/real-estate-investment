import React from "react";
import "./AdminPage.css";
import API from "../../utils/API";
import { Container, Row, Col } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ModalBox from "../../components/ModalBox";
import UpdateTeamMember from "../UpdateTeamMember";
import UpdateProperty from "../UpdateProperty";


//serves as an admin page

class AdminPage extends React.Component {

    state = {
        propertiesArray: [],
        teamMemberArray: [],
        showDeletePropertyModal: false,
        showDeleteTeamMemberModal: false,
        showUpdateTeamMember: false,
        currentDeleteId: "",
        currentDeleteName: "",
        updateMemberId: "",
        updatePropertyId: ""
    }

    componentDidMount() {
        this.getAllProperties();
        this.getAllTeamMembers();
    }

    //calls the backend and receives the property info
    getAllProperties = () => {
        API.getAllProperties()
            .then(res => {
                this.setState({
                    propertiesArray: res.data
                })
            })
            .catch(err => console.log(err));
    }

    //function that gets the team members from the backend
    getAllTeamMembers = () => {
        API.getAllTeamMembers()
            .then(res => {
                this.setState({
                    teamMemberArray: res.data
                });
            })
            .catch(err => console.log(err));
    }

    handleAddPropertyClick = (event) => {
        event.preventDefault();
        window.location.replace('/admin/make-new-property');
        const {value} = event.target;
        this.setState({
            currentDeleteId: value
        });
    }

    handleAddTeamMemberClick = (event) => {
        event.preventDefault();
        window.location.replace('/admin/add-a-team-member');
    }

    //sets the current delete name and id to the clicked property
    handleDeletePropertyClick = (event) => {
        event.preventDefault();
        const { name, value} = event.target;
        this.setState({
            currentDeleteId: value,
            currentDeleteName: name
        });
        this.deletePropertyModalToggle();
    }

    //sets the current delete name and id to the clicked team member
    handleDeleteTeamMemberClick = (event) => {
        event.preventDefault();
        const { name, value} = event.target;
        this.setState({
            currentDeleteId: value,
            currentDeleteName: name
        });
        this.deleteTeamMemberModalToggle();
    }

    //function to delete a property
    deleteProperty = () => {
        const id = this.state.currentDeleteId;
        API.removeProperty(id)
        .then(res => {
            console.log("success");
            window.location.replace("/admin");
        })
        .catch(err => console.log(err));
    }

    //function to delete a team member
    deleteMember = () => {
        const id =this.state.currentDeleteId;
        API.removeMember(id)
        .then(res => {
            console.log("success");
            window.location.replace("/admin");
        })
        .catch(err => console.log(err));
    }

    //Delete Property confirm using a created modal
    deletePropertyModalToggle = () => {
        const newToggle = !this.state.showDeletePropertyModal;
        this.setState({
           showDeletePropertyModal: newToggle
        });
   }

   //Delete Property confirm using a created modal
   deleteTeamMemberModalToggle = () => {
    const newToggle = !this.state.showDeleteTeamMemberModal;
    this.setState({
       showDeleteTeamMemberModal: newToggle
    });
}

 //sets the updateMemberId before showing the edit screen
 handleUpdateTeamMemberClick = (event) => {
    event.preventDefault();
    const { value} = event.target;
    this.setState({
        updateMemberId: value,
    });
    this.updateTeamMemberToggle();
}

//toggles the team member update screen
updateTeamMemberToggle = () => {
    const newToggle = !this.state.showUpdateTeamMember;
    this.setState({
       showUpdateTeamMember: newToggle
    });
}

 //sets the updatePropertyId before showing the edit screen
 handleUpdatePropertyClick = (event) => {
    event.preventDefault();
    const { value} = event.target;
    this.setState({
        updatePropertyId: value,
    });
    this.updatePropertyToggle();
}

//Toggles the property update screen
updatePropertyToggle = () => {
    const newToggle = !this.state.showUpdateProperty;
    this.setState({
       showUpdateProperty: newToggle
    });
}

    render() {
        return (
            <div className="wrapper">
            {this.state.showDeletePropertyModal ? (<ModalBox 
                                            cancelFunction={this.deletePropertyModalToggle}
                                            confirmFunction={this.deleteProperty}
                                            modalText={`Are you sure you want to delete ${this.state.currentDeleteName}?`}
                                            modalHeadText={`Warning: Deleting!`}
                                            confirmText={`Delete: ${this.state.currentDeleteName}`}
                                            />) : ""}
            {this.state.showDeleteTeamMemberModal ? (<ModalBox 
                                            cancelFunction={this.deleteTeamMemberModalToggle}
                                            confirmFunction={this.deleteMember}
                                            modalText={`Are you sure you want to delete ${this.state.currentDeleteName}?`}
                                            modalHeadText={`Warning: Deleting!`}
                                            confirmText={`Delete: ${this.state.currentDeleteName}`}
                                            />) : ""}
            {this.state.showUpdateTeamMember ? (<UpdateTeamMember 
                                            memberId={this.state.updateMemberId}
                                            />) : ""}
            {this.state.showUpdateProperty ? (<UpdateProperty 
                                            propertyId={this.state.updatePropertyId}
                                            />) : ""}
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={1500}
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionLeaveTimeout={1500}
                >
                    <h2 className="page-title">Admin Page</h2>
                    <Container fluid>
                        <Row className="equal justify-content-center admin-row">

                            <Col md="5" sm="8">
                                <h4 className="admin-titles">Properties</h4>
                                <div className="admin-container">
                                <button
                                    onClick={this.handleAddPropertyClick}
                                    className="btn add-button"
                                    >Add Property +</button>
                                    <ul>
                                        {this.state.propertiesArray.map(property => (
                                            <li
                                            key={property._id}
                                            ><div className="list-item-name">{property.propertyName}</div>
                                                <button 
                                                    value={property._id}
                                                    onClick={this.handleUpdatePropertyClick}
                                                    className="btn edit-button"
                                                >Edit</button>
                                                <button 
                                                    onClick={this.handleDeletePropertyClick}
                                                    value={property._id}
                                                    name={property.propertyName}
                                                className="btn dlt-button"
                                                >Delete</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>

                            <Col md="5" sm="8">
                                <h4 className="admin-titles">Team Members</h4>
                                <div className="admin-container">
                                <button 
                                    onClick={this.handleAddTeamMemberClick}
                                    className="btn add-button"
                                    >Add Team Member +</button>
                                    <ul>
                                        {this.state.teamMemberArray.map(member => (
                                            <li
                                                key={member._id}
                                            ><div className="list-item-name">{member.name}</div>
                                                <button 
                                                    onClick={this.handleUpdateTeamMemberClick}
                                                    className="btn edit-button"
                                                    value={member._id}
                                                    >Edit</button>
                                                <button 
                                                    value={member._id}
                                                    name={member.name}
                                                    onClick={this.handleDeleteTeamMemberClick}
                                                    className="btn dlt-button"
                                                    >Delete</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>

                        </Row>
                    </Container>

                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default AdminPage;