import React from 'react';
import {  connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

function mapStateToProps(state){
  return {
    guitarras: state.guitarras
  }
}


class Guitarras extends React.Component{
    render(){
        return(
            <section id="guitarras" className="guitarras contenedor">
      <h2>Nuestra guitarras</h2>
      {
        this.props.guitarras.map((guitarra, index)=>(
        <article key={index} className="guitarra">
          <CSSTransitionGroup 
            transitionEnterTimeout={500} 
            transitionLeaveTimeout={500}
            transitionName="flicker" 
            >
            <img className="guitarra-image" key={ guitarra.image } src={ guitarra.image }  alt={ guitarra.alt } width="350"/>
          </CSSTransitionGroup>
          <CSSTransitionGroup
            transitionEnterTimeout={300} 
            transitionLeave={ false }
            transitionName="fade"
          >   
          <div key={ guitarra.name } className="contenedor-guitarra">
            <h3 className="guitarra-name">{ guitarra.name }</h3>
            <ol>
              {
                guitarra.features.map((feature, index)=>(
                  <li key={ index } >{feature}</li>
                ))
              }
            </ol>
          </div>
          </CSSTransitionGroup>  
        </article>
        ))
      }
    </section>
        )
    }
}

export default  connect(mapStateToProps)(Guitarras);