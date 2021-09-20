import React from "react";

class Greetings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellido: "",
    };
  }

  handleNombreChange = (e) => {
    this.setState({ nombre: e.target.value });
  };

  handleApellidoChange = (e) => {
    this.setState({ apellido: e.target.value });
  };

  render() {
    return (
      <>
        <h2>
          Hola: {this.state.nombre} {this.state.apellido}
        </h2>
        <div>
          <label>Nombre</label>
          <input value={this.state.nombre} onChange={this.handleNombreChange} />
        </div>
        <div>
          <label>Apellido</label>
          <input
            value={this.state.apellido}
            onChange={this.handleApellidoChange}
          />
        </div>
      </>
    );
  }
}

export default Greetings;
