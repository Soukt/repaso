import React, { Component } from "react";

export class ComponentePrueba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.edad,
    };
  }

  render() {
    return (
      <div>
        ***********************
        <h1>{this.state.age}</h1>
        <h1>el nombre es: {this.props.user.nombre}</h1>
        <h2>La edad {this.state.age}</h2>
        ************************
      </div>
    );
  }
}

export default ComponentePrueba;
