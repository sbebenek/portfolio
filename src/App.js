import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      techIsShown: false,
      portfolioIsShown: false
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
    if (window.pageYOffset > 1350 && this.state.portfolioIsShown === false) {
      console.log("The portfolio section has been viewed");
      this.setState({portfolioIsShown: true});
    }
  }




  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <IntroductionBody />
          <TechnologiesBody techIsShown={this.state.techIsShown} />
          <PortfolioPiecesBody portfolioIsShown={this.state.portfolioIsShown} />
        </main>
        <Footer />
      </div>
    );
  }
}

