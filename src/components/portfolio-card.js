import React from 'react';

/**
 * This class holds the card containing the portfolio item screenshot, description, and link to the hosted version
 */
export default class ProtfolioCard extends React.Component {

    render() {
        let liveButton = <a href={this.props.projectlink}><button className="btn btn-outline-light">See Live Demo</button></a>;
        //if the isLive attribute is set to false, don't print a link button
        if (Boolean(this.props.isLive) !== false)
        {
            liveButton = <p>Live demo coming soon!</p>
        }
        return (
            <div className="portfolio-card">
                <h1 className="mb-3">{this.props.title}</h1>
                <img className="portfolio-screenshot mb-3" src={this.props.imageSrc} alt="website screenshot" />
                <p><em>Technologies Used: {this.props.techUsed}</em></p>
                <p>{this.props.description}</p>
                {liveButton}
            </div>
        );
    }
}