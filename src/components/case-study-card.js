import React from 'react';

/**
 * This class holds the card containing the portfolio item screenshot, description, and link to the hosted version
 */
export default class ProtfolioCard extends React.Component {
    render() {
        return (
            <div className="portfolio-card">
                <h1>{this.props.title}</h1>
                <img className="portfolio-screenshot mb-3" src="screenshots/gearlog1.png" alt="website screenshot" />
                <p><em>Technologies Used: {this.props.techUsed}</em></p>
                <h2 className="mb-3"><u>Case Study</u></h2>
                <p className="mb-4">
                    GearLog is a content management system that acts as a digital record for musicians, tracking what instruments an artist uses. This app was inspired by the
                    common desire of musicians to know what instruments and equipment their favorite artist uses, so that they can sound exactly like them. This app was built
                    in ASP.NET with C# in the MVC 5 framework.
                </p>
                <img className="portfolio-screenshot mb-4" src="screenshots/gearlog1.png" alt="website screenshot" />

                <p className="mb-4">
                    The initial challenge in GearLog's development was managing how complex the web app could be, versus the time allowed to develop it. The website was initially 
                    intended to track artists who were guitarists and/or bassists, and keep record of what instruments, amplifiers, and effects pedals they use.
                </p>
                <p>The description of the portfolio will go here. I want to fill at least four sentences to fill space.
                         I hope this all fits nicely. This fake project was built with NodeJS, ReactJS, ExpressJS, and MySQL</p>
                {/*<img className="portfolio-screenshot" src="screenshots/example.jpg" alt="website screenshot" />*/}
                <p>Unfortunately due to hosting costs, I am unable to host a live demo of this website.</p>

            </div>
        );
    }
}