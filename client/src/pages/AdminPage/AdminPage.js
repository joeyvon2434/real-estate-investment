import React from "react";
import "./AdminPage.css";

class AdminPage extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <h2>Admin Page</h2>
                
                <p>What would you like to do?</p>
                <br></br>
                <a href="/admin/make-new-property">Make a New Property</a>
                <br></br>
                <a href="/admin/update-or-delete-property">Update or Delete a Property</a>

            </div>
        )
    }
};

export default AdminPage;