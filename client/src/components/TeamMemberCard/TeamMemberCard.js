import React from "react";
import "./TeamMemberCard.css";



class TeamMemberCard extends React.Component {



    render() {
        return (
            <div>
                    <div className="TeamMemberCard-wrapper">
                        <img src="https://via.placeholder.com/300/09f/fff.png" alt="team member"></img>
                        <h3>{this.props.memberName}</h3>
                        <p>{this.props.summary}</p>
                    </div>
            </div>

        )
    }
};

export default TeamMemberCard;