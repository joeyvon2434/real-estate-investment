import React from "react";
import "./Team.css";
import TeamMemberCard from "../../components/TeamMemberCard";
import { Container, Row, Col } from "reactstrap";
import API from "../../utils/API";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

//displays the team members

class Team extends React.Component {

    state = {
        teamMembers: []
    }

    //calls function that gets team info on initial load
    componentDidMount() {
        this.getAllTeamMembers();
    }

    //function that gets the team members from the backend
    getAllTeamMembers = () => {
        console.log("Getting team members...");
        API.getAllTeamMembers()
            .then(res => {
                this.setState({
                    teamMembers: res.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="wrapper">
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={1500}
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionLeaveTimeout={1500}
                >
                    <h2 className="page-title">Our Team</h2>
                    <Container fluid>
                        <Row className="equal justify-content-center">
                            {this.state.teamMembers.map(member => (
                                <Col sm="8" md="4" key={member._id} className="card-border m-4 sgray-transparent-background">
                                    <TeamMemberCard
                                        memberName={member.name}
                                        summary={member.summary}
                                        picture={member.picture}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default Team;