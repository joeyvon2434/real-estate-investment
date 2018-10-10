import React from "react";
import "./Properties.css";
import PropertyCard from "../../components/PropertyCard";

class Properties extends React.Component {
    
    render() {
        return(
            <div className="wrapper">
                Properties Page
                <PropertyCard 
                    imageLink={"https://via.placeholder.com/300/09f/fff.png"} 
                    propertyName={"Placeholder Property"}
                    summary={"A multi family complex with 4 identical units with 3 bedrooms and 2 baths."}
                    propertyType={"Multi-family"}
                    yearBuilt={1998}
                    strategy={"Flip / Renovation"}
                    location={"Houston, TX"}
                    propertySold={true}
                    returnOnEquity={3.9}
                    internalRateOfReturn={4.7}
                    disposition={"December, 2017"}
                />
            </div>
        )
    }
};

export default Properties;