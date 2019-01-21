import React, { Component } from 'react';
import logo from './logo.svg';
import platzi from './platzi-logo.png';
import './invi.css';
import { CSSTransitionGroup } from 'react-transition-group'
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';
import logoPortada from './images/invie.png'
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png'

import cheet from 'cheet.js';


cheet('i n v i e', ()=>{
  console.log("lo lograste!");
});

cheet('g o b a c k', ()=>{
  console.log("regresaste al estado inicial");
})

const data = {
  menu: [
    {
      href: 'index.html',
      title: 'Home'
    },
    {
      href: '#guitarras',
      title: 'Guitarras'
    },
    {
      href: 'precios.html',
      title: 'Precios'
    },
    {
      href: 'hola.html',
      title: 'Dont click me'
    }
  ],
  logoPortada: logoPortada,
  guitarras: [
    {
      image: acustica,
      alt: "Guitarra Invie Acustica",
      name: 'Invie Acustica',
      features:[
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio'
      ]
    },
    {
      image: clasica,
      alt: "Guitarra Invie Classic",
      name: 'Invie Classic',
      features:[
        'Estilo vintage',
        'Liviana',
        'Inicia tu camino como Rockstar'
      ]
    }
  ]


}




class Invi extends Component {
  render() {
    return (
      <section className="Invi">
        {/* Portada*/ }
        <Portada menu={ data.menu } logo={ data.logoPortada }/>
        {/*Gitarras*/ }
        <Guitarras guitarras={ data.guitarras }/>
        {/*Foorer*/ }
        <Footer/>
      </section>
    );
  }
}

export default Invi;
