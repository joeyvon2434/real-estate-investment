import React from "react";
import "./UpdateProperty.css";
import PropertyInput from "../../components/PropertyInput";


class UpdateProperty extends React.Component {


    state = {
        propertyId: "",
        resultsArray: [
            {
                propertyName: "property A",
                _id: "_jdieisnkjne6521"
            },
            {
                propertyName: "property B",
                _id: "_agsgsieisnkfsdfsjh78341"
            },
            {
                propertyName: "property C",
                _id: "_12134535kjnd"
            }
        ]
    }

    componentDidMount(){
        this.populateSelector(this.state.resultsArray);
    }

    //Function to populate the input selector with all properties to allow the user to choose the property to update
    populateSelector = (inputArray) => {
        //function to populate the selector with all options from the database
        
            //input call to function to get propertties

        for (let i = 0; i < inputArray.length; i++) {
            const select = document.getElementById("propertySelector");
            select.options[select.options.length] = new Option(inputArray[i].propertyName, inputArray[i]._id);
        }
    }

    //Function to get properties

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