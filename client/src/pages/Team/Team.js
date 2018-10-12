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
                <h2>Our Team</h2>
                <Container fluid>
                    <Row>
                        {this.state.teamMembers.map(member => (
                            <Col md="6" key={member._id}>
                                <TeamMemberCard
                                    memberName={member.name}
                                    summary={member.summary}
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