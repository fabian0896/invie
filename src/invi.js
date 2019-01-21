import React, { Component } from 'react';
import './invi.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';







/* const data = {
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


} */




class Invi extends Component {
  render() {
    return (
      <section className="Invi">
        {/* Portada*/ }
        <Portada />
        {/*Gitarras*/ }
        <Guitarras/>
        {/*Foorer*/ }
        <Footer/>
      </section>
    );
  }
}

export default Invi;
