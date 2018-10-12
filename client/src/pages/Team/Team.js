import React from "react";
import "./Team.css";
import TeamMemberCard from "../../components/TeamMemberCard";
import { Container, Row, Col } from "reactstrap";

class Team extends React.Component {
    
    state = {
        teamMembers: [
            {
                name:"Kevin",
                summary: "Summary with lots of words and all kinds of fun stuff about the people on the team.",
                id: "1"
            },
            {
                name: "Joe",
                summary: "Summary with lots of other words and all kinds of fun stuff about the people on the team.",
                id: "2"
            }
        ]
    }
    
    
    render() {
        return (
            <div className="wrapper">
                <h2>Our Team</h2>
                <Container fluid>
                <Row>
                {this.state.teamMembers.map(member => (
                <Col md="6">
                <TeamMemberCard
                    key={member.id}
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