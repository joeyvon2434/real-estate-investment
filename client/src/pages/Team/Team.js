import React from "react";
import "./Team.css";
import TeamMemberCard from "../../components/TeamMemberCard";
import { Container, Row, Col } from "reactstrap";
import API from "../../utils/API";

class Team extends React.Component {

    state = {
        teamMembers: []
    }

    componentDidMount() {
        this.getAllTeamMembers();
    }

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
                <h2 className="page-title">Our Team</h2>
                <Container fluid>
                    <Row className="equal justify-content-center">
                        {this.state.teamMembers.map(member => (
                            <Col md="5" key={member._id} className="card-border m-4 gray-transparent-background">
                                <TeamMemberCard
                                    memberName={member.name}
                                    summary={member.summary}
                                    picture={member.picture}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Team;