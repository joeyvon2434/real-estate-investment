import React from "react";
import "./Strategy.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Strategy extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionLeaveTimeout={1500}
                >
                    <h2 className="page-title">Strategy</h2>
                    <p>We have a strategy and what not... just give us your money already.</p>
                    <p>Also... pretend there's a chart here.</p>
                    <img src="#" alt="a chart"></img>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default Strategy;