import React from "react";
import "./TeamInput.css";

//"Dumb" component for input of team member info.

class TeamInput extends React.Component {


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

    checkSummaryField= () => {
        if (this.props.highlightRequiredFields && this.props.summaryField === "") {
            return "highlight-required form-control";
        } else {
            return "form-control";
        }
    }

    checkPictureField= () => {
        if (this.props.highlightRequiredFields && this.props.pictureField === "") {
            return "highlight-required form-control";
        } else {
            return "form-control";
        }
    }


    render() {
        return(
            <div>
                <form id="team-form">
                    <div className="form-group">
                        <label>Name (* required *)</label>
                        <input 
                            type="text" 
                            className={this.checkNameField()}
                            name="name" placeholder={this.props.name} 
                            onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Summary (* required *)</label>
                        <textarea 
                            type="text" 
                            className={this.checkSummaryField()}
                            name="summary" 
                            placeholder={this.props.summary} 
                            onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Picture (* required *)</label>
                        <input 
                            type="text" 
                            className={this.checkPictureField()}
                            name="picture"
                            placeholder={this.props.picture} 
                            onChange={this.props.handleInputChange} />
                    </div>
        
                    <button className="btn mr-3" onClick={this.props.handleFormSubmit}>{this.props.buttonLabel}</button>
                    <button className="btn" onClick={this.cancelFunction}>Cancel</button>
                </form>
            </div>
        )
    }
};

export default TeamInput;