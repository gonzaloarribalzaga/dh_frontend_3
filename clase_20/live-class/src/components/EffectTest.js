import { useState, useEffect } from "react";

function EffectTest() {
  const [counter, setCounter] = useState(0);

  /**
   * Funciones useEffect de ejemplo
   * Vamos a definir algunos useEffects de prueba que solo ejecuten consoles.log
   * y poder entender los momentos en los que se ejecutan
   *
   */

  /**
   * useEffect sin array de dependencias, se ejecuta luego de cada render
   *
   */
  useEffect(() => {
    console.log("useEffect Nº 1 - me ejecuto luego de cada render");

    return () => {
      console.log(
        `función de limpieza useEffect Nº 1 - me ejecuto antes de cada nueva ejecución 
        de la función de efecto o al desmontar el componente`
      );
    };
  });

  /**
   * useEffect con array de dependencias vacío, se ejecuta luego del primer render
   */
  useEffect(() => {
    console.log("useEffect Nº 2 - me ejecuto solo luego del primer render");

    return () => {
      console.log(
        "función de limpieza useEffect Nº 2 - me ejecuto antes de que el componente sea desmontado"
      );
    };
  }, []);

  /**
   * useEffect con array de dependencias, se ejecuta luego del primer render si las dependencias cambiaron
   */
  useEffect(() => {
    console.log(
      "useEffect Nº 3 - me ejecuto luego de cada render si el state counter fue modificado"
    );

    return () => {
      console.log(
        `función de limpieza useEffect Nº 3 - me ejecuto antes de cada nueva ejecución 
        de la función de efecto o al desmontar el componente
        `
      );
    };
  }, [counter]);

  return (
    <div>
      <h2>Counter: {counter}</h2>

      <button
        onClick={() => {
          setCounter((prevCounterValue) => prevCounterValue + 1);
        }}
      >
        Incrementar contador
      </button>
    </div>
  );
}

export default EffectTest;
