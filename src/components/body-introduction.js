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
                        <img src="sambebenekportrait.jpg" />
                        <p>Hello, my name is Sam Bebenek. I am a web developer from Ontario, Canada.</p>
                        </div>
                </div>
            </div>
        )
    }
}