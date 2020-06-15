import React from 'react';

/**
 * The body for the landing page, in between the header and the technology descripions
 */
export default class BodyIntroduction extends React.Component {
    render() {
        return (
            <div className="introduction-holder">
                <div className="introduction-container">
                    {/*generative art will go here*/}
                    <canvas></canvas>
                    <div className="introduction-text">
                        <img src="sambebenekportrait.jpg" className="portrait"/>
                        <p>Hello, my name is Sam Bebenek. I am a full-stack web developer from Ontario, Canada.</p>
                        <div>
                            <a href="https://www.linkedin.com/in/sam-bebenek-487a12159/" target="_blank"title="Sam Bebenek's LinkedIn page. Opens in a new tab"><img src="linkedin-logo.png" alt="linkedin logo" className="socialMediaIcon"/></a>
                            <a href="https://github.com/sbebenek" target="_blank" title="Sam Bebenek's GitHub account. Opens in a new tab"><img src="github-logo.png" alt="github logo" className="socialMediaIcon"/></a>
                        </div>
                        </div>
                </div>
            </div>
        )
    }
}