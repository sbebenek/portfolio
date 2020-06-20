import React from 'react';
import $ from 'jquery';
import PortfolioCard from './portfolio-card';
import CaseStudyCard from './case-study-card';
import 'slick-carousel/slick/slick';

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
            delayCounter += 0; //the rate at which each image is drawn
        }
    }
    componentDidMount() {

        $(".slider").slick({
            centerMode: true,
            centerPadding: '0.05rem',
            dots: true,
            responsive: true
        });


    }

    render() {
        return (
            <div id="portfolio" className="portfolio-holder">
                <div className="portfolio-left sidebar-title">
                    <h2>PORTFOLIO</h2>
                    <p>Here are some of the projects I've worked on</p>
                </div>
                <div className="portfolio-right">
                    <div className="slider-holder">
                        <div className="slider portfolio-card-holder" data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "accessibility": true}'>
                            <PortfolioCard title="Dog Website" techUsed="React, Express, MySQL" imageSrc="screenshots/dogwebsite.png" projectlink="https://sbebenek-dog-website.herokuapp.com/"
                                description="Dog Website is a content management system designed to connect dog shelters and fosterers in the GTA with potential adopters. 
                                Users are able to see a list of dogs up for adoption. Administrators are able to dynamically change the content of the website. This app features a 
                                front-end built with React, a back end RESTful API server built with Express, and a MySQL database." />
                            <PortfolioCard title="Fitness Tracker" techUsed="PHP, MySQL" imageSrc="screenshots/fitnesstracker.png" projectlink="/fitnesstracker"
                                description="FitnessTracker is an all-in-one fitness tracking web app, developed as a web development team project. FitnessTracker’s users are able to track their fitness goals, plan 
                                jogging routes, get healthy meal suggestions, and find fitness events to attend. Using FitnessTracker’s ‘Find a Bro’ feature, users are also 
                                able to find workout partners in their area. FitnessTracker was designed for fitness enthusiasts of all kinds - from serious bodybuilders to 
                                those just thinking about going on their first run. This app was made for anyone who wanted help achieving their fitness dreams." />
                            <PortfolioCard title="MySpotify" techUsed="PHP, JavaScript, jQuery, Spotify API, Seatgeek API"
                                imageSrc="screenshots/myspotify.png" projectlink="/myspotify" description="MySpotify is a web app anyone with a Spotify account can log 
                                into to see their top artists. Using the Spotify API, users can pick from a set of timeframes used to calculate their top artists, and can see who 
                                they’ve been listening to most recently, or over the lifetime of their account. Additionally, the Seatgeek API is used so that users can click on their 
                                favorite artists to see a list of that artist or group’s upcoming shows, along with a link to buy tickets.
                                " />

                            <CaseStudyCard title="GearLog" techUsed="C#, .NET, MS Entity Framework" />

                            <PortfolioCard title="Five Card Draw" techUsed="HTML, CSS, jQuery" imageSrc="screenshots/fivecarddraw.png" projectlink="/fivecarddraw"
                                description="Five Card Draw is a web app where you can play the card game of the same name. Players can draw cards from a deck and swap cards in their hand. Try to get as many suit combinations as possible! 
                                All animations are made with CSS." />
                            <PortfolioCard title="Boat Game" techUsed="JavaScript" imageSrc="screenshots/boatgame.png" projectlink="/boatgame"
                                description="Boat Game is a game developed with JavaScript for a fictional seafood restaurant's contest page. Gain points by dodging rocks and collecting 
                                fish. This game is intentionally impossible to beat, but try to see how far you can get!" />
                        </div>
                    </div>
                    {/*<div className="portfolio-card-holder">
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />

        </div>*/}
                </div>
            </div>
        )
    }
}