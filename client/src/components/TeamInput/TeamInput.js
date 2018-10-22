import React from "react";
import "./TeamInput.css";

//"Dumb" component for input of team member info.

class TeamInput extends React.Component {
    render() {
        return(
            <div>
                <form id="property-form">
                    <div className="form-group">
                        <label>Name (* required *)</label>
                        <input type="text" className="form-control" name="name" placeholder={this.props.name} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Summary (* required *)</label>
                        <input type="text" className="form-control" name="summary" placeholder={this.props.summary} onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Picture (* required *)</label>
                        <input type="text" className="form-control" name="picture" placeholder={this.props.picture} onChange={this.props.handleInputChange} />
                    </div>
        
                    <button className="btn" onClick={this.props.handleFormSubmit}>{this.props.buttonLabel}</button>
                
                </form>
            </div>
        )
    }
};

export default TeamInput;