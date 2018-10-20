import React from "react";
import "./Home.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Home extends React.Component {

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
                    <h1 className="main-title page-title">ROH Forward Properties, LLC</h1>
                    <div className="quote">
                        <p>"Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world."</p>
                        <p className="quote-author">-Franklin D. Roosevelt</p>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default Home;