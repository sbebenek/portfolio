import React from 'react';

/**
 * The website's header
 */
export default class Header extends React.Component {

  render() {
    return (

      <header className="App-header">
        <a href="/">
          <div className="logo-and-title">
            <h1>Sam Bebenek</h1>
            <span><strong>Web Application Developer</strong></span>
          </div>
        </a>
        <nav className="nav-menu">
          <a href="#technologies">Technologies</a>
          <span> &mdash; </span>
          <a href="#portfolio">Portfolio</a>
          <span> &mdash; </span>
          <a href="/blog">Blog</a>
        </nav>
      </header>

    );
  }
}