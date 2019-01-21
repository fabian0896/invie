import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animations.css';
import Invi from './invi';
import * as serviceWorker from './serviceWorker';
import cheet from 'cheet.js';


import logoPortada from './images/invie.png'
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png'
import esterA from './images/easter-a.png'
import esterB from './images/easter-b.png'
import platziLogo from './platzi-logo.png';

import { Provider } from 'react-redux';
import { createStore } from 'redux';





const data = {
    isAnimated: false,
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

function reducer(state, action){
    switch(action.type){
        case 'UPDATE_PROPS':{
            const newProps = action.payload.props;
            return { ...state, ...newProps }
        }
        default:
            return state;
           
    }
}

const store = createStore(reducer, data)


const ester = {
  logoPortada: platziLogo,
  isAnimated: 'is-animated', 
   menu: [],
    guitarras: [
        {
          image: esterA,
          alt: "Guitarra padre de familia",
          name: 'Invie Familiar',
          features:[
            'Lista para copiar a los simpsons',
            'Aire puro',
            'Chistes malos'
          ]
        },
        {
          image: esterB,
          alt: "Guitarra de anime",
          name: 'Invie Anime',
          features:[
            'Estilo vintage',
            'Liviana',
            'Inicia tu camino como Rockstar'
          ]
        }
      ]
}

cheet('i n v i e', ()=>{
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload:{
            props: ester
        }
    });
});
  
cheet('b a c k', ()=>{
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload:{
            props: data
        }
    });
});

ReactDOM.render( 
<Provider store={ store }>
    <Invi />
</Provider> , 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
