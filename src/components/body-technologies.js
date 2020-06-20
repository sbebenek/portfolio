import React from 'react';

import TechImage from './tech-image';

/**
 * The technologies section in the body, below the introduction section. This section will list all the technologies I know
 * 
 */
export default class BodyTechnologies extends React.Component {
    constructor(props) {
        super(props);
        
    }

    //TODO: below method has be deprecated, look up memoization techniques
    componentWillReceiveProps(newProps) {
        if (newProps.techIsShown !== this.props.techIsShown) {
            this.drawImages();
        }
    }

    drawImages() {
        console.log("technology component is drawing the images...");
        let undrawnImages = document.getElementsByClassName("tech-image");
        let delayCounter = 0.0;
        let animationString = "";
        for (let element of undrawnImages) {
            animationString = "animation: imageAppear 0.5s ease-out " + delayCounter + "s forwards 1;";
            element.setAttribute("style", animationString);
            delayCounter += 0.1; //the rate at which each image is drawn
        }
    }



    render() {
        return (
            <div id="technologies" className="technologies-holder">
                <div className="technologies-right sidebar-title">
                    <h2>TECHNOLOGIES</h2>
                    <p>Here are some of the languages and technologies I've worked with</p>
                    <p><small>This website was built using React!</small></p>
                </div>
                <div className="technologies-left">
                    
                    <div className="logo-holder">
                        <TechImage src="tech-logos/html5.png" alt="html5 logo" />
                        <TechImage src="tech-logos/css.png" alt="css logo" />
                        <TechImage src="tech-logos/javascript.png" alt="javascript logo" />
                        <TechImage src="tech-logos/node.png" alt="node logo" />
                        <TechImage src="tech-logos/react.png" alt="react logo" />
                        <TechImage src="tech-logos/vue.png" alt="vue logo" />
                        <TechImage src="tech-logos/jquery.png" alt="jquery logo" />
                        <TechImage src="tech-logos/php.png" alt="php logo" />
                        <TechImage src="tech-logos/c-sharp.png" alt="c sharp logo" />
                        <TechImage src="tech-logos/asp-net.png" alt="asp.net logo" />
                        <TechImage src="tech-logos/mysql.png" alt="mysql logo" />
                        <TechImage src="tech-logos/bootstrap.png" alt="bootstrap logo" />
                        <TechImage src="tech-logos/java.png" alt="java logo" />
                        <TechImage src="tech-logos/wordpress.png" alt="wordpress logo" />
                        <TechImage src="tech-logos/github.png" alt="github logo" />
                        <TechImage src="tech-logos/unity.png" alt="unity logo" />
                        <TechImage src="tech-logos/unreal.png" alt="unreal engine 4 logo" />
                        <TechImage src="tech-logos/vive.png" alt="htc vive logo" />
                    </div>
                </div>
                
            </div>
        )
    }
}