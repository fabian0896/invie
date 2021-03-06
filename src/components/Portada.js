import React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';


function mapStateToProps(state){
  return {
    logo: state.logoPortada,
    menu: state.menu,
    isAnimated: state.isAnimated
  }
}

class Portada extends React.Component {
  render() {
    return (
      <section id="portada" className={`portada background ${ this.props.isAnimated }`}>
        <header id="header" className="header contenedor">
          <figure className="logotipo">
          <CSSTransitionGroup
          transitionName='pop'
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
            <img key={ this.props.logo } src={this.props.logo} width="186" height="60" alt="Invie logotipo" />
        </CSSTransitionGroup>
          </figure>
          <span className="burguer-button icon-menu" id="burguer-button"></span>
          <nav className="menu" id="menu">
            <ul>
              {
                this.props.menu.map((item, index)=>(
                  <li key={ index }>
                    <a href={ item.href }>{ item.title }</a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </header>
        <CSSTransitionGroup
          transitionName="animationInOut"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >
        {
          !this.props.isAnimated &&
          <div className="contenedor" key="portada">
            <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
            <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
            <a className="button" href="#guitarras">Conoce mas</a>
          </div>
        }
        </CSSTransitionGroup>
      </section>
    )
  }
}

export default connect(mapStateToProps)(Portada);