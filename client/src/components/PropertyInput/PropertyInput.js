import React from "react";
import "./PropertyInput.css";

//Property input component. Acts as a "dumb" element

class PropertyInput extends React.Component {

    cancelFunction = (event) => {
        event.preventDefault();
        window.location.replace("/admin");
    }

    checkNameField= () => {
        if (this.props.highlightRequiredFields && this.props.nameField === "") {
            return "highlight-required form-control short-field";
        } else {
            return "form-control short-field";
        }
    }

    checkSoldField= () => {
        if (this.props.highlightRequiredFields && this.props.soldField === null) {
            return "highlight-required form-control short-field";
        } else {
            return "form-control short-field";
        }
    }


    render() {
        return(
            <div>
                <form id="property-form">
                    <div className="form-group">
                        <label>Property Name (* required *)</label>
                        <input 
                            type="text" 
                            className={this.checkNameField()}
                            name="propertyName" 
                            placeholder={this.props.propertyName} 
                            onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Sold or Current Property (* required *)</label>
                        <select 
                        className={this.checkSoldField()} 
                        name="propertySold" 
                        onChange={this.props.handleInputChange}>
                            <option value="">Please Select</option>
                            <option value="true">Sold</option>
                            <option value="false">Current</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Property Summary</label>
                        <textarea type="text" className="form-control" name="summary" placeholder={this.props.summary} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Property Style</label>
                        <input type="text" className="form-control short-field" name="propertyType" placeholder="Property Type: eg. multi-family" onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Year Built</label>
                        <input type="number" className="form-control very-short-field" name="yearBuilt" placeholder={this.props.yearBuilt} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Strategy</label>
                        <input type="text" className="form-control short-field" name="strategy" placeholder={this.props.strategy} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control short field" name="location" placeholder={this.props.location} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Return on Equity - rentals only (enter as a percent with no percent sign)</label>
                        <input type="number" className="form-control" name="returnOnEquity" placeholder={this.props.returnOnEquity} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Internal Rate of Return - sold properties only (enter as a percent with no percent sign)</label>
                        <input type="number" className="form-control very-short-field" name="internalRateOfReturn" placeholder={this.props.internalRateOfReturn} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Disposition - sold properties only</label>
                        <input type="text" className="form-control short-field" name="disposition" placeholder={this.props.disposition} onChange={this.props.handleInputChange} />
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
        
                    <button className="btn mr-3" onClick={this.props.handleFormSubmit}>{this.props.buttonLabel}</button>
                    <button className="btn" onClick={this.cancelFunction}>Cancel</button>
                </form>
            </div>
        )
    }
};

export default PropertyInput;