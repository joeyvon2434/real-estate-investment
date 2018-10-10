import React from "react";
import "./MakeNewProperty.css";
import PropertyInput from "../../components/PropertyInput";
import API from "../../utils/API";

class MakeNewProperty extends React.Component {

    state = {
        propertyName: "",
        propertyType: "",
        summary: "",
        yearBuilt: 0,
        strategy: "",
        location: "",
        returnOnEquity: 0,
        internalRateOfReturn: 0,
        disposition: "",
        propertySold: true
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        const newProperty = {
            propertyName: this.state.propertyName,
            propertyType: this.state.PropertyType,
            summary: this.state.summary,
            yearBuilt: this.state.yearBuilt,
            strategy: this.state.strategy,
            location: this.state.location,
            returnOnEquity: this.state.returnOnEquity,
            internalRateOfReturn: this.state.internalRateOfReturn,
            disposition: this.state.disposition,
            propertySold: this.state.propertySold
        };

        API.createNewProperty(newProperty)
        .then(res => console.log("success"))
        .catch(err => console.log(err));

        // API.createNewProperty(newProperty)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    showState = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Create a New Property</h2>
                <PropertyInput
                    propertyId={null}
                    propertyName={"Property Name"}
                    propertySold={true}
                    yearBuilt={"Year Built"}
                    strategy={"Strategy: eg. hold or flip"}
                    location={"Property Location: City, State"}
                    returnOnEquity={"ROE: eg 3.90"}
                    internalRateOfReturn={"IRR: eg 3.90"}
                    disposition={"Date: e.g. December, 2017"}
                    buttonLabel={"Create New Property"}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <button className="btn btn-primary" onClick={this.showState}>Show State</button>
            </div>
        )
    }
};

export default MakeNewProperty;