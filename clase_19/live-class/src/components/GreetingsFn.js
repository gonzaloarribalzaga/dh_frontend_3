import { useState } from "react";

function GreetingsFn(props) {
  const [nombre, setNombre] = useState("Juan Carlos");
  const [apellido, setApellido] = useState("Batman");
  const [user, setUser] = useState({ id: 1, name: "mario", edad: "38" });

  function handleNombreChange(e) {
    setNombre(e.target.value);
  }

  function handleApellidoChange(e) {
    setApellido(e.target.value);
  }

  return (
    <>
      <h2>
        Hola: {nombre} {apellido}
      </h2>
      <h3>name: {user.name}</h3>
      <h3>edad: {user.edad}</h3>
      <div>
        <label>Nombre</label>
        <input value={nombre} onChange={handleNombreChange} />
      </div>
      <div>
        <label>Apellido</label>
        <input value={apellido} onChange={handleApellidoChange} />
      </div>
      <button
        onClick={() => {
          setUser({ ...user, name: "luigi" });
        }}
      >
        cambiar nombre
      </button>
    </>
  );
}

export default GreetingsFn;
