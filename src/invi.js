import React, { Component } from 'react';
import logo from './logo.svg';
import platzi from './platzi-logo.png';
import './invi.css';
import { CSSTransitionGroup } from 'react-transition-group'
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';


class Invi extends Component {
  render() {
    return (
      <section className="Invi">
        {/* Portada*/ }
        <Portada/>
        {/*Gitarras*/ }
        <Guitarras/>
        {/*Foorer*/ }
        <Footer/>
      </section>
    );
  }
}

export default Invi;
