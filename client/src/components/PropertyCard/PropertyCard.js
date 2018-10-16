import React from "react";
import "./PropertyCard.css";
import {Container, Row, Col} from "reactstrap";


class PropertyCard extends React.Component {

    
    displaySold = () => {
        if(this.props.propertySold) {
            return (
                <div>
                <div className="bullet-text">IRR: {this.props.internalRateOfReturn}%</div>
                <div className="bullet-text">Disposition: {this.props.disposition}</div>
                </div>
            );
        } else {
            return <div className="bullet-text">ROE: {this.props.returnOnEquity}%</div>
        }
    }
     
    render() {
        return (
            <div className="propertyCard-wrapper">
            <Container fluid>
            <Row>
                <Col xs="12" sm="12" md="12" lg="5">
                <img className="property-image" src={this.props.pic1} alt="placeholder" />
                </Col>
                <Col xs="12" sm="12" md="12" lg="7">
                <h2 className="property-title">{this.props.propertyName}</h2>
                <div className="summary-text">{this.props.summary}</div>
                <div className="bullet-text">Location: {this.props.location}</div>
                <div className="bullet-text">Property Type: {this.props.propertyType}</div>
                <div className="bullet-text">Year Built: {this.props.yearBuilt}</div>
                <div className="bullet-text">Strategy: {this.props.strategy}</div>
                {this.displaySold()}
                
                </Col>
            </Row>
            </Container>
            </div>
        )
    }
};

export default PropertyCard;