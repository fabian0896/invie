import React from 'react';
import acustica from '../images/invie-acustica.png';
import clasica from '../images/invie-classic.png'

class Guitarras extends React.Component{
    render(){
        return(
            <section id="guitarras" className="guitarras contenedor">
      <h2>Nuestra guitarras</h2>
      <div className="video-demo-contenedor">
        <div className="video-demo">
          <div className="video-responsive-contenedor">
            <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      {
        this.props.guitarras.map((guitarra, index)=>(
        <article key={index} className="guitarra"> 
          <img className="guitarra-image" src={ guitarra.image }  alt={ guitarra.alt } width="350"/>
          <div className="contenedor-guitarra">
            <h3 className="guitarra-name">{ guitarra.name }</h3>
            <ol>
              {
                guitarra.features.map((feature, index)=>(
                  <li key={ index } >{feature}</li>
                ))
              }
            </ol>
          </div>
        </article>
        ))
      }
    </section>
        )
    }
}

export default Guitarras;