import React from 'react';

/**
 * This class holds the card containing the portfolio item screenshot, description, and link to the hosted version
 */
export default class ProtfolioCard extends React.Component {
    render() {
        return (
            <div className="portfolio-card">
                <img className="portfolio-screenshot" src="screenshots/example.jpg" alt="website screenshot" />
                <p>The description of the portfolio will go here. I want to fill at least four sentences to fill space.
                         I hope this all fits nicely. This fake project was built with NodeJS, ReactJS, ExpressJS, and MySQL</p>
                <button className="btn btn-outline-light btn-sm">See Live Demo</button>
            </div>
        );
    }
}