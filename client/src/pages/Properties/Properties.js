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
                />
            </div>
        )
    }
};

export default Properties;