import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      mensaje: "",
    };
    this.comprobar = this.comprobar.bind(this);
  }
  comprobar = (event) => {
    let val = event.target.value;
    let err = "";
    console.log(val);
    if (val.length < 3) {
      err = "Tienes que escribir minimo 3 caracteres";
      this.setState({ mensaje: err });
    } else {
      err = "";
      this.setState({ mensaje: err });
    }
  };
  render() {
    return (
      <div>
        ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        <h1>ESTO ES EL FORM</h1>
        <input type="text" name="nombre" onChange={this.comprobar} />
        <p>{this.state.mensaje}</p>
        <br />
        ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      </div>
    );
  }
}

export default Form;
