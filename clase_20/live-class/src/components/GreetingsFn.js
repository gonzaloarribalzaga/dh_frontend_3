import { useState, useEffect } from "react";

function GreetingsFn(props) {
  const [nombre, setNombre] = useState("Juan Carlos");
  const [apellido, setApellido] = useState("Batman");
  const [time, setTime] = useState(new Date());

  function handleNombreChange(e) {
    setNombre(e.target.value);
  }

  function handleApellidoChange(e) {
    setApellido(e.target.value);
  }

  /**
   *
   * función de efecto para cambiar el titulo de la app, se ejecuta luego del primer render y luego de
   * cada render siguiente si cambia alguna de sus dependencias (nombre o apellido)
   *
   */
  useEffect(() => {
    document.title = `${apellido}, ${nombre}`;
    /**
     *
     * Pasamos como segundo parámetro un array de dependecias las cuales determinarán cuando ejecutar
     * dicha función de effect en este caso se ejecuta si nombre o apellido es ejecutado
     *
     */
  }, [nombre, apellido]);

  /**
   *
   * función de efecto que se ejecuta crea un interval que cambia el estado
   * de time cada un segundo, define una función de limpieza que se ejecuta
   * antes de desmontar el componente
   *
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    /**
     * Función de limpieza de useEffect, esta función se ejectua antes de la próxima ejecución
     * de la función de efecto, en este caso, como dicho useEffect se ejecuta solamente luego
     * del primer render, la función de limpieza solo se ejecuta antes de desmotar el componente
     *
     */
    return () => {
      clearInterval(interval);
    };

    /**
     * como pasamos un array vacío de dependencias solo se ejecuta la
     * función de efecto luego del primer render
     */
  }, []);

  return (
    <>
      <h2>
        Hola: {nombre} {apellido}
      </h2>
      <h2>Time: {time.toLocaleTimeString()}</h2>
      <div>
        <label>Nombre</label>
        <input value={nombre} onChange={handleNombreChange} />
      </div>
      <div>
        <label>Apellido</label>
        <input value={apellido} onChange={handleApellidoChange} />
      </div>
    </>
  );
}

export default GreetingsFn;
