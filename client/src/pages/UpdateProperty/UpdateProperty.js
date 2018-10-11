import React from "react";
import "./UpdateProperty.css";
import PropertyInput from "../../components/PropertyInput";
import API from "../../utils/API";


class UpdateProperty extends React.Component {


    state = {
        resultsArray: [],
        currentProperty: {}
    }

    componentDidMount() {
        this.getAllProperties();
    }

    //Function to populate the input selector with all properties to allow the user to choose the property to update
    populateSelector = (inputArray) => {
        //function to populate the selector with all options from the database
        for (let i = 0; i < inputArray.length; i++) {
            const select = document.getElementById("propertySelector");
            select.options[select.options.length] = new Option(inputArray[i].propertyName, inputArray[i]._id);
        }
    }

    //Function to get properties
    getAllProperties = () => {
        API.getAllProperties()
            .then(res => {
                this.setState({
                    resultsArray: res.data
                });
            }).then(() => {
                this.populateSelector(this.state.resultsArray);
            })
            .catch(err => console.log(err));
    }


    //take in input changes and updates the current property state
    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const updatedProperty = Object.assign({}, this.state.currentProperty);
        console.log("Updated Property");
        console.log(updatedProperty);

        updatedProperty[name] = value;

        this.setState({
            currentProperty: updatedProperty
        });
    }

    //handles form updates and autopopulate when a property is selected
    handlePropertyChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        const propertyId = {
            id: value
        };
        API.findOne(propertyId)
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
            .then(res => {
                this.setState({
                    resultsArray: [],
                    currentProperty: {}
                });
                const select = document.getElementById("propertySelector");
                select.innerHTML = "";
            })
            .then(() => {
                this.getAllProperties();
                window.location.reload();
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Update Property</h2>
                <label>Choose a Property to Update</label>
                <select
                    name="propertyId"
                    id="propertySelector"
                    onChange={this.handlePropertyChange}
                >
                    <option>Please Select a Property</option>
                </select>

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
                    handleFormSubmit={this.updateProperty}
                    handleInputChange={this.handleInputChange}
                    buttonLabel={"Update Property"}
                />
                <button className="btn btn-danger delete-button">Delete Property</button>

            </div>
        )
    }
};

export default UpdateProperty;