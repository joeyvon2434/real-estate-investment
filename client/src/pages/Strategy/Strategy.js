import React from "react";
import "./Strategy.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Strategy extends React.Component {

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
                    <h2 className="page-title">Strategy</h2>
                    <article className="article-section">

                        <p>Interested investors, please <a className="investor-link" href="/contact">click here.</a></p>
                        <h4 className="article-title">We seek to acquire properties/assets with the following attributes:</h4>
                        <ul>
                            <li>10-20 unit value add or stabilized multifamily</li>
                            <li>Duplexes. Triplexes, Fourplexes</li>
                            <li>Single Family homes with a rehab element</li>
                            <li>Condominiums</li>
                            <li>Retail strip centers</li>
                            <li>Net leased retail</li>
                        </ul>

                        <h4 className="article-title">Correlation of Population Growth and Median Sales Price</h4>
                        <p>Population by metropolitan statistical area (MSA) was looked at over the period starting from 2010 through 2017. The compound annual growth rate (CAGR) over this period was calculated as it provided enough data points since the 2008 mortgage crisis to create a meaningful trend. This yielded a less volatile CAGR over the eight year period, compared to taking the latest one-year change in growth. Further analysis of yearly population by MSA showed that the main drivers of growth were tied to job opportunities.</p>
                        <p>2017 median sales price data of residential single family homes by MSA was gathered to plot against the population CAGR: 2010-17.</p>
                        <p>The resulting chart indicates a strong positive correlation between the population growth (2010-17) and the 2017 median sales price. This means that one would expect a cheaper sales price in a given MSA if the population growth has been negative and a higher sales price in a given MSA if the population growth has been positive.</p>
                        <p>The data provided above helps narrow the scope of researching which MSA's provide the best opportunity to invest in for single family properties. By comparing population growth rates and median sales prices, rental properties and value-added properties within particular MSA's can be identified and pursued.</p>
                        <p>Further analysis is needed to evaluate the attractiveness of the MSA's above. These analyses consist of median sales price growth rates, home ownership percentages, permits issued by unit type and associated growth rates.</p>
                        <img src="#" alt="a chart"></img>

                        <p>Investors and interested brokers, please feel free to  <a className="investor-link" href="/contact">contact us here.</a></p>
                        
                    </article>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default Strategy;