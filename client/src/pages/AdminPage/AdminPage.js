import React from "react";
import "./AdminPage.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


class AdminPage extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={1500}
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionLeaveTimeout={1500}
                >
                    <h2 className="page-title">Admin Page</h2>
                    <div className="admin-menu">
                    <p className="admin-menu-title">What would you like to do?</p>
                    <br></br>
                    <a className="admin-link" href="/admin/make-new-property">Make a New Property</a>
                    <br></br>
                    <a className="admin-link" href="/admin/update-or-delete-property">Update or Delete a Property</a>
                    <br></br>
                    <a className="admin-link" href="/admin/add-a-team-member">Add a Team Member</a>
                    <br></br>
                    <a className="admin-link" href="/admin/update-or-delete-team-member">Update or Delete Team Member</a>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default AdminPage;