import React from "react";
import "./Home.css";

class Home extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <h1 className="home-title">ROH Forward Properties, LLC</h1>
                <div className="quote">
                <p>Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.</p>
                <p>-Franklin D. Roosevelt</p>
                </div>
            </div>
        )
    }
};

export default Home;