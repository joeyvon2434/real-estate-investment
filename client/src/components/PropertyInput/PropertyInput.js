import React from "react";
import "./PropertyInput.css";

class PropertyInput extends React.Component {
    render() {
        return(
            <div>
                <h2>Admin Page</h2>
                <form id="property-form">
                    <div className="form-group">
                        <label>Property Name (* required *)</label>
                        <input type="text" className="form-control" name="propertyName" placeholder={this.props.propertyName} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Sold or Current Property (* required *)</label>
                        <select className="form-control" name="propertySold" onChange={this.props.handleInputChange}>
                            <option value="">Please Select</option>
                            <option value="true">Sold</option>
                            <option value="false">Current</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Property Summary</label>
                        <input type="text" className="form-control" name="summary" placeholder={this.props.summary} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Property Style</label>
                        <input type="text" className="form-control" name="propertyType" placeholder="Property Type: eg. multi-family" onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Year Built</label>
                        <input type="number" className="form-control" name="yearBuilt" placeholder={this.props.yearBuilt} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Strategy</label>
                        <input type="text" className="form-control" name="strategy" placeholder={this.props.strategy} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" name="location" placeholder={this.props.location} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Return on Equity - rentals only (enter as a percent with no percent sign)</label>
                        <input type="number" className="form-control" name="returnOnEquity" placeholder={this.props.returnOnEquity} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Internal Rate of Return - sold properties only (enter as a percent with no percent sign)</label>
                        <input type="number" className="form-control" name="internalRateOfReturn" placeholder={this.props.internalRateOfReturn} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Disposition - sold properties only</label>
                        <input type="text" className="form-control" name="disposition" placeholder={this.props.disposition} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Property pictures</label>
                        <input type="text" className="form-control" name="pic1" placeholder={this.props.pic1} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="pic2" placeholder={this.props.pic2} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        
                        <input type="text" className="form-control" name="pic3" placeholder={this.props.pic3} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        
                        <input type="text" className="form-control" name="pic4" placeholder={this.props.pic4} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        
                        <input type="text" className="form-control" name="pic5" placeholder={this.props.pic5} onChange={this.props.handleInputChange} />
                    </div>
        
                    <button className="btn btn-primary" onClick={this.props.handleFormSubmit}>{this.props.buttonLabel}</button>
                
                </form>
            </div>
        )
    }
};

export default PropertyInput;