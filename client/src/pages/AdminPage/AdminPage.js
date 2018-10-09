import React from "react";
import "./AdminPage.css";

class AdminPage extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <h2>Admin Page</h2>
                <form>
                    <div className="form-group">
                        <label>Property Name (* required *)</label>
                        <input type="text" className="form-control" name="propertyName" placeholder="Property Name" />
                    </div>
                    <div className="form-group">
                        <label>Sold or Current Property (* required *)</label>
                        <select className="form-control" name="propertySold">
                            <option>Sold</option>
                            <option>Current</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Property Style</label>
                        <input type="text" className="form-control" name="propertyType" placeholder="Property Type: eg. multi-family" />
                    </div>
                    <div className="form-group">
                        <label>Year Built</label>
                        <input type="number" className="form-control" name="yearBuilt" placeholder="Year Built" />
                    </div>
                    <div className="form-group">
                        <label>Strategy</label>
                        <input type="text" className="form-control" name="strategy" placeholder="Strategy: eg. hold or flip" />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" name="propertyLocation" placeholder="Property Location: City, State" />
                    </div>
                    <div className="form-group">
                        <label>Return on Equity - rentals only (enter as a percent with no percent sign)</label>
                        <input type="number" className="form-control" name="returnOnEquity" placeholder="ROE: eg 3.90" />
                    </div>
                    <div className="form-group">
                        <label>Internal Rate of Return - sold properties only (enter as a percent with no percent sign)</label>
                        <input type="number" className="form-control" name="internalRateOfReturn" placeholder="IRR: eg 3.90" />
                    </div>
                    <div className="form-group">
                        <label>Disposition - sold properties only</label>
                        <input type="text" className="form-control" name="disposition" placeholder="Date: e.g. December, 2017" />
                    </div>
                </form>
            </div>
        )
    }
};

export default AdminPage;