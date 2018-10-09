import React from "react";
import "./PropertyCard.css";

class PropertyCard extends React.Component {
    render() {
        return (
            <div className="propertyCard-wrapper">
                <img src={this.props.imageLink} alt="placeholder" />
                <div>{this.props.propertyName}</div>
            </div>
        )
    }
};

export default PropertyCard;