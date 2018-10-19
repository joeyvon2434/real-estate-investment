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
        propertySold: true,
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: "",
        pic5: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        //set new property for submission
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
            propertySold: this.state.propertySold,
            pic1: this.state.pic1,
            pic2: this.state.pic2,
            pic3: this.state.pic3,
            pic4: this.state.pic4,
            pic5: this.state.pic5
        };

        //send newProperty to the API
        API.createNewProperty(newProperty)
        .then(res => {
            console.log("success");
            alert("Property Successfully Added!");
    })
    .then(window.location.reload())
        .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="wrapper">
                <h2 className="page-title">Create a New Property</h2>
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
                    pic1={"pic1"}
                    pic2={"pic2"}
                    pic3={"pic3"}
                    pic4={"pic4"}
                    pic5={"pic5"}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        )
    }
};

export default MakeNewProperty;