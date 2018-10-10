import React from "react";
import "./PropertyInput.css";

class PropertyInput extends React.Component {
    render() {
        return(
            <div>
                <h2>Admin Page</h2>
                <form>
                    <div className="form-group">
                        <label>Property Name (* required *)</label>
                        <input type="text" className="form-control" name="propertyName" placeholder={this.props.propertyName} />
                    </div>
                    <div className="form-group">
                        <label>Sold or Current Property (* required *)</label>
                        <select className="form-control" name="propertySold">
                            <option value="">Please Select</option>
                            <option value="true">Sold</option>
                            <option value="false">Current</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Property Style</label>
                        <input type="text" className="form-control" name="propertyType" placeholder="Property Type: eg. multi-family" />
                    </div>
                    <div className="form-group">
                        <label>Year Built</label>
                        <input type="number" className="form-control" name="yearBuilt" placeholder={this.props.yearBuilt} />
                    </div>
                    <div className="form-group">
                        <label>Strategy</label>
                        <input type="text" className="form-control" name="strategy" placeholder={this.props.strategy} />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" name="propertyLocation" placeholder={this.props.location} />
                    </div>
                    <div className="form-group">
                        <label>Return on Equity - rentals only (enter as a percent with no percent sign)</label>
                        <input type="number" className="form-control" name="returnOnEquity" placeholder={this.props.returnOnEquity} />
                    </div>
                    <div className="form-group">
                        <label>Internal Rate of Return - sold properties only (enter as a percent with no percent sign)</label>
                        <input type="number" className="form-control" name="internalRateOfReturn" placeholder={this.props.internalRateOfReturn} />
                    </div>
                    <div className="form-group">
                        <label>Disposition - sold properties only</label>
                        <input type="text" className="form-control" name="disposition" placeholder={this.props.disposition} />
                    </div>
        
                    <button className="btn btn-primary">{this.props.buttonLabel}</button>
                
                </form>
            </div>
        )
    }
};

export default PropertyInput;