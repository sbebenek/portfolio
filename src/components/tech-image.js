import React from 'react';
import PropTypes from 'prop-types';

/**
 * An image container for the tech images. Images sourced from https://seeklogo.com/
 */
export default class TechImage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tech-image-holder">
                <img className="tech-image" src={this.props.src} alt={this.props.alt}/>
            </div>
        )
    }
}

TechImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}