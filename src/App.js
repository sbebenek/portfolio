import React from 'react';
import './App.css';

import Header from './components/header';
import IntroductionBody from './components/body-introduction';
import TechnologiesBody from './components/body-technologies';
import PortfolioPiecesBody from './components/body-portfolio-pieces';
import Footer from './components/footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      techIsShown: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    //console.log(window.pageYOffset);
    //if the technologies section is in view
    if (window.pageYOffset > 350 && this.state.techIsShown === false) {
      console.log("The technology section has been viewed");
      this.setState({techIsShown: true});
    }
  }




  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <IntroductionBody />
          <TechnologiesBody techIsShown={this.state.techIsShown} />
          <PortfolioPiecesBody />
        </main>
        <Footer />
      </div>
    );
  }
}

