import React from "react";

class Greetings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "Carlitos",
      apellido: "Tevez",
      time: new Date(),
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);

    document.title = `${this.state.apellido}, ${this.state.nombre}`;
  }

  componentDidUpdate() {
    document.title = `${this.state.apellido}, ${this.state.nombre}`;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
        <h2>Time: {this.state.time.toLocaleTimeString()}</h2>
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
