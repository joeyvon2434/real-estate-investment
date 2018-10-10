import React from "react";
import "./UpdateProperty.css";
import PropertyInput from "../../components/PropertyInput";
import API from "../../utils/API";

class UpdateProperty extends React.Component {


    state = {
        propertyId: "",
        resultsArray: []
    }

    componentDidMount(){
        this.getAllProperties();
    }

    //Function to populate the input selector with all properties to allow the user to choose the property to update
    populateSelector = (inputArray) => {
        //function to populate the selector with all options from the database
        console.log("input array");
        console.log(inputArray);
        for (let i = 0; i < inputArray.length; i++) {
            const select = document.getElementById("propertySelector");
            select.options[select.options.length] = new Option(inputArray[i].propertyName, inputArray[i]._id);
        }
    }

    //Function to get properties
    getAllProperties = () => {
        API.getAllProperties()
        .then(res => {
            console.log('result');
            console.log(res.data);
            console.log(res.data[0]._id);
            this.setState({
                resultsArray: res.data
            });
        }).then(()=> {
            console.log("called selector");
            this.populateSelector(this.state.resultsArray);
        })
        .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="wrapper">
                <h2>Update Property</h2>
                <label>Choose a Property to Update</label>
                <select id="propertySelector">
                </select>

                <PropertyInput
                    propertyId={this.state.propertyId}
                    propertyName={""}
                    propertySold={""}
                    yearBuilt={""}
                    strategy={""}
                    location={""}
                    returnOnEquity={""}
                    internalRateOfReturn={""}
                    disposition={""}
                    buttonLabel={"Update Property"}
                />
                <button className="btn btn-danger delete-button">Delete Property</button>

            </div>
        )
    }
};

export default UpdateProperty;