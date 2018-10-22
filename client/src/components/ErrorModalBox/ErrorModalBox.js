import React from "react";
import "./ErrorModalBox.css";

//Create an error modal with a button to exit the modal
//This modal accepts a function and 3 text fields as inputs from props


class ModalBox extends React.Component {

    render() {
        return (
            <div className="modal-page">
                <div className="modal-box">
                    <h4 className="modal-header">{this.props.modalHeadText}</h4>
                    <p className="modal-body">{this.props.modalText}.</p>
                    <div className="button-wrapper">
                        <button className="btn btn-primary modal-button"
                                onClick={this.props.cancelFunction}
                        >Cancel</button>
                    </div>
                </div>
            </div>
        )
    }

};

export default ModalBox;