import React from "react";
import "./MakeNewProperty.css";
import PropertyInput from "../../components/PropertyInput";

class MakeNewProperty extends React.Component {

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
                />
            </div>
        )
    }
};

export default MakeNewProperty;