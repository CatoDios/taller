import React from 'react'

class Buscar extends React.Component {
  addNewFiltro(e) {
    e.preventDefault();
    var nombres = this.nombre.value.toUpperCase();
    var apellidos = this.apellidos.value;
    if(!nombres){
      alert("ingrese un nombre para buscar");
    }else{
      var busqueda = {nombres: nombres, apellidos :apellidos}
      this.props.Busqueda( busqueda);
    }
    
}  
 
  render() {
    return(
      <form onSubmit={(e) => this.addNewFiltro(e)}>
        <h4>Nombres:</h4>
        <input ref={ ( input ) => this.nombre = input } type="text" placeholder="Nombres" />
        <h4>Apellidos:</h4>
        <input ref={ ( input ) => this.apellidos= input } type="text" placeholder="Apellidos" />
        <div className="row center-xs">
        <button  className="waves-effect waves-light btn-large botonazul23 center"type="submit">Buscar<i className="large material-icons left">search</i></button>

        </div>
      </form>
    )
  }
}

export default Buscar