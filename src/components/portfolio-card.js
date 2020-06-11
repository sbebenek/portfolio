import React from 'react';

/**
 * This class holds the card containing the portfolio item screenshot, description, and link to the hosted version
 */
export default class ProtfolioCard extends React.Component {
    render() {
        return (
            <div className="portfolio-card">
                <h1 className="mb-3">{this.props.title}</h1>
                <img className="portfolio-screenshot mb-3" src={this.props.imageSrc} alt="website screenshot" />
                <p><em>Technologies Used: {this.props.techUsed}</em></p>
                <p>{this.props.description}</p>
                <a href={this.props.projectlink}><button className="btn btn-outline-light">See Live Demo</button></a>
            </div>
        );
    }
}