import React from "react";
import "./ErrorModalBox.css";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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