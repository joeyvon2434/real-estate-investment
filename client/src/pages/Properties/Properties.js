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
            this.setState({
                resultsArray: res.data
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="wrapper">
                <h2 className="page-title">Properties Page</h2>
                {this.state.resultsArray.map( property => (
                <PropertyCard 
                    pic1={property.pic1} 
                    pic2={property.pic2} 
                    pic3={property.pic3} 
                    pic4={property.pic4} 
                    pic5={property.pic5} 
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