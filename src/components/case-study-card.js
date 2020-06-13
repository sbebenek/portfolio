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
                    common desire of musicians to know what instruments and equipment their favorite artist uses, so that they know what equipment to get to sound exactly like them. This app was built
                    in ASP.NET with C# in the MVC 5 framework.
                </p>
                <img className="portfolio-screenshot mb-4" src="screenshots/gearlog3.png" alt="website screenshot" />

                <p className="mb-4">
                    The initial challenge in GearLog's development was managing how complex the web app could be within the given timeline. The website was initially 
                    intended to track artists who were guitarists and/or bassists, what bands they were in, and keep record of what instruments, amplifiers, and effects pedals 
                    they use. This was intended 
                    because, as a musician personally, these are the tools one would need in order to sound exactly like their favorite artist. However, this was scaled back to 
                    only artists, bands, and instruments, due to time constraints. That way, the effort could be focused on creating an effective interface to clearly and cleanly 
                    display all the information needed.
                </p>
                <img className="portfolio-screenshot mb-4" src="screenshots/gearlog4.png" alt="website screenshot" />
                <p className="mb-4">
                    It was decided that the focus of the website would be on the Artist's Details page, due to the intention of the website being a place where musicians could go 
                    to find out what equipment their favorite artist used. This page would display the artist's image, a link to their band's page, and a list of their instruments. 
                    Users are able to click on an instrument and have that instrument's image and specifications displayed using AJAX, so that the content is filled 
                    dynamically and without needing the page to reload. With this interface, users are able to have all desired information shown on the page at one time, without 
                    having to scroll up or down. In order to organize this information efficiently, the Bootstrap framework was used to style the website.
                </p>
                <img className="portfolio-screenshot mb-4" src="screenshots/gearlog2.png" alt="website screenshot" />
                <p className="mb-4">The last and perhaps greatest challenge was trying to host the GearLog ASP.NET project on Amazon Web Services. It was discovered that AWS does 
                not easily allow for file writing permissions to be set in ASP.NET projects, and that GearLog's image uploading features couldn't be easily implemented. 
                After technical difficulties in uploading GearLog to a free tier of hosting and with no affordable alternatives, it was unfortunately decided to not host the 
                GearLog website at this time.</p>
            </div>
        );
    }
}