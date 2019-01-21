import React from 'react';
import logo from '../images/invie-white.png'

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
      <div className="contenedor">
        <div className="contacto">
          <img src={ logo } alt="logotipo blanco"/>
          <a href="tel:+573024456678"><strong>Telefono</strong> <span>3024456678</span></a>
          <a href="mailto:contacto@invie.com"><strong>E-mail</strong> <span>contacto@invie.com</span></a>
        </div>
        <form className="formulario">
          <div className="col1">
            <label htmlfor="nombre">Nombre</label>
            <input type="text" required id="nombre" name="nombre"/>
            <label htmlfor="email">E-mail</label>
            <input type="email" required id="email" name="email"/>
            <div className="sexo">
              <label htmlfor="mujer">
                <input type="radio" id="mujer"  defaultChecked name="sexo" value="mujer"/> mujer
              </label>
              <label htmlfor="hombre">
                <input type="radio" id="hombre" name="sexo" value="hombre"/> hombre
              </label>
            </div>
            <div className="intereses">
              <label htmlfor="cotizacion">
                <input type="checkbox" defaultChecked id="cotizacion" name="intereses" value="cotizacion"/> Cotización
              </label>
              <label htmlfor="reclamos">
                <input type="checkbox" id="reclamos" name="intereses" value="reclamos"/> Reclamos
              </label>
              <label htmlfor="comentarios">
                <input type="checkbox" id="comentarios" name="intereses" value="comantarios"/> Comentarios
              </label>
              <label htmlfor="otros">
                <input type="checkbox" id="otros" name="intereses" value="otros"/> Otros
              </label>
            </div>
          </div>
          <div className="col2">
            <label htmlfor="comentarios">Comentarios</label>
            <textarea name="comantarios" id="comentarios" cols="30" rows="7"></textarea>
            <input type="submit" value="Enviar" className="button"/>
          </div>
        </form>
      </div>
    </footer>
        )
    }
}


export default Footer;