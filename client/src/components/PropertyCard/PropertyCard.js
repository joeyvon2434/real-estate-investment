import React from "react";
import "./PropertyCard.css";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";


//This card displays the properties in the database

class PropertyCard extends React.Component {

    state = {
        pictureArray: []
    }
    //populate the state from the databse when the card mounts
    componentDidMount() {
        this.makePictureArray();
    }
    //makes the picture array for the picture carousel
    makePictureArray = () => {
        const property = this.props;
        const pictureArray = [];
        if (property.pic1 !== "") {
            pictureArray.push(
                {
                    src: property.pic1,
                    altText: this.props.propertyName,
                    caption: "",
                    header: ""
                }
            );
        };
        if (property.pic2 !== "") {
            pictureArray.push(
                {
                    src: property.pic2,
                    altText: this.props.propertyName,
                    caption: "",
                    header: ""
                }
            );
        };
        if (property.pic3 !== "") {
            pictureArray.push(
                {
                    src: property.pic3,
                    altText: this.props.propertyName,
                    caption: "",
                    header: ""
                }
            );
        };
        if (property.pic4 !== "") {
            pictureArray.push(
                {
                    src: property.pic4,
                    altText: this.props.propertyName,
                    caption: "",
                    header: ""
                }
            );
        };
        if (property.pic5 !== "") {
            pictureArray.push(
                {
                    src: property.pic5,
                    altText: this.props.propertyName,
                    caption: "",
                    header: ""
                }
            );
        };
        this.setState({
            pictureArray: pictureArray
        });
    }


    //CHeck if the property is sold or current and display the necessary info
    displaySold = () => {
        if (this.props.propertySold) {
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
                <Container className="property-container">
                    <Row className="justify-content-center">
                        <Col xs="12" sm="12" md="12" lg="5" >
                            <div className="image-container">
                                <UncontrolledCarousel items={this.state.pictureArray} className="property-image" />
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="7" className="p-2">
                            <h2 className="property-title">{this.props.propertyName}</h2>
                            <div className="summary-text">{this.props.summary}</div>
                            <div className="bullet-text">Location: {this.props.location}</div>
                            <div className="bullet-text">Property Type: {this.props.propertyType}</div>
                            <div className="bullet-text">Year Built: {this.props.yearBuilt}</div>
                            <div className="bullet-text">Strategy: {this.props.strategy}</div>
                            {this.displaySold()}
                            <div className="bullet-text">Interested investors <a href="/contact">click here.</a> </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default PropertyCard;

