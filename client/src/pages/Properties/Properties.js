import React from "react";
import "./Properties.css";
import PropertyCard from "../../components/PropertyCard";
import API from "../../utils/API";

class Properties extends React.Component {
    
    state = {
        resultsArray: []
    }

    componentDidMount() {
        this.getAllProperties();
    }

    getAllProperties = () => {
        API.getAllProperties()
        .then(res => {
            console.log(res.data);
            this.setState({
                resultsArray: res.data
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="wrapper">
                <h2>Properties Page</h2>
                {this.state.resultsArray.map( property => (
                <PropertyCard 
                    imageLink={"https://via.placeholder.com/300/09f/fff.png"} 
                    key={property._id}
                    propertyName={property.propertyName}
                    summary={property.summary}
                    propertyType={property.propertyType}
                    yearBuilt={property.yearBuilt}
                    strategy={property.strategy}
                    location={property.location}
                    propertySold={property.propertySold}
                    returnOnEquity={property.returnOnEquity}
                    internalRateOfReturn={property.internalRateOfReturn}
                    disposition={property.disposition}
                />
                ))}
            </div>
        )
    }
};

export default Properties;