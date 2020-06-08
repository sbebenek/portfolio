import React from 'react';

import PortfolioCard from './portfolio-card';

/**
 * The portfolio pieces section in the body, below the technologies section. This section will contain images and links to all my portfolio pieces
 */
export default class BodyPortfolioPieces extends React.Component {
    //TODO: below method has be deprecated, look up memoization techniques
    componentWillReceiveProps(newProps) {
        if (newProps.portfolioIsShown !== this.props.portfolioIsShown) {
            this.drawImages();
        }
    }

    drawImages() {
        console.log("portfolio component is drawing the cards...");
        let undrawnImages = document.getElementsByClassName("portfolio-card");
        let delayCounter = 0.0;
        let animationString = "";
        for (let element of undrawnImages) {
            animationString = "animation: portfolioAppear 0.5s ease-out " + delayCounter + "s forwards 1;";
            element.setAttribute("style", animationString);
            delayCounter += 0.3; //the rate at which each image is drawn
        }
    }

    render() {
        return (
            <div id="portfolio" className="portfolio-holder">
                <div className="portfolio-left sidebar-title">
                    <h2>PORTFOLIO</h2>
                    <p>Here are some of the projects I've worked on.</p>
                </div>
                <div className="portfolio-right">
                    <div className="portfolio-card-holder">
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />

                    </div>
                </div>
            </div>
        )
    }
}