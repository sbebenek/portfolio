import React from 'react';

/**
 * The portfolio pieces section in the body, below the technologies section. This section will contain images and links to all my portfolio pieces
 */
export default class BodyPortfolioPieces extends React.Component {
    render() {
        return (
            <div id="portfolio" className="portfolio-holder">
                <div className="portfolio-left sidebar-title">
                    <h2>PORTFOLIO</h2>
                    <p>Here are some of the projects I've worked on.</p>
                </div>
                <div className="portfolio-right">
                    Here is a list of all my portfolio pieces
                </div>
            </div>
        )
    }
}