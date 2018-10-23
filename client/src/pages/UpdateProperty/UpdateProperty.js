import React from "react";
import "./UpdateProperty.css";
import PropertyInput from "../../components/PropertyInput";
import API from "../../utils/API";
import ModalBox from "../../components/ModalBox";

//update property page

class UpdateProperty extends React.Component {

    state = {
        resultsArray: [],
        currentProperty: {},
        showUpdateModal: false
    }

    //get property info on page load
    componentDidMount() {
        this.findProperty();
    }


    //take in input changes and updates the current property state
    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const updatedProperty = Object.assign({}, this.state.currentProperty);

        updatedProperty[name] = value;

        this.setState({
            currentProperty: updatedProperty
        });
    }

    //handles form updates and autopopulate when a property is selected
    findProperty = () => {
        const value = this.props.propertyId;
        API.findOne(value)
            .then(res => {
                this.setState({
                    currentProperty: res.data
                });
            })
            .catch(err => console.log(err));
    }

    //function to update the property selected
    updateProperty = (event) => {
        event.preventDefault();
        console.log("Starting Update...");
        API.updateProperty(this.state.currentProperty)
            .then(() => {
                window.location.replace("/admin");
            })
            .catch(err => console.log(err));
    }

    //close update property screen
    closeUpdateProperty = () => {
        window.location.replace("/admin");
    }


    //update team member confirm using
    updateModalToggle = (event) => {
        event.preventDefault();
        const newToggle = !this.state.showUpdateModal;
        this.setState({
            showUpdateModal: newToggle
        });
    }


    render() {
        return (
            <div className="update-property-wrapper">
                <div className="wrapper inner-property-wrapper">
                
                    {this.state.showUpdateModal ? (<ModalBox
                        cancelFunction={this.updateModalToggle}
                        confirmFunction={this.updateProperty}
                        modalText={`Are you sure you want to update ${this.state.currentProperty.propertyName}?`}
                        modalHeadText={`Update Property!`}
                        confirmText={`Update: ${this.state.currentProperty.propertyName}`}
                    />) : ""}
                    <h2 
                        className="page-title"
                        >Update Property: {this.state.currentProperty.propertyName}
                            <i 
                            onClick={this.closeUpdateProperty}
                            className="fas fa-times close-top-right"></i>
                    </h2>

                    <PropertyInput
                        propertyId={this.state.currentProperty._id}
                        propertyName={this.state.currentProperty.propertyName}
                        summary={this.state.currentProperty.summary}
                        propertySold={this.state.currentProperty.propertySold}
                        yearBuilt={this.state.currentProperty.yearBuilt}
                        strategy={this.state.currentProperty.strategy}
                        location={this.state.currentProperty.location}
                        returnOnEquity={this.state.currentProperty.returnOnEquity}
                        internalRateOfReturn={this.state.currentProperty.internalRateOfReturn}
                        disposition={this.state.currentProperty.disposition}
                        pic1={this.state.currentProperty.pic1}
                        pic2={this.state.currentProperty.pic2}
                        pic3={this.state.currentProperty.pic3}
                        pic4={this.state.currentProperty.pic4}
                        pic5={this.state.currentProperty.pic5}
                        handleFormSubmit={this.updateModalToggle}
                        handleInputChange={this.handleInputChange}
                        buttonLabel={`Update Property: ${this.state.currentProperty.propertyName}`}
                    />
                </div>
            </div>
        )
    }
};

export default UpdateProperty;