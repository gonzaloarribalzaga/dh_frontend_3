import { useState } from "react";
import GreetingsFn from "./components/GreetingsFn";
import EffectTest from "./components/EffectTest";

function App() {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <div className="App">
      {/* <Greetings /> */}
      {showComponents && (
        <>
          <div
            style={{
              margin: "25px",
              marginBottom: "50px",
              border: "1px solid black",
              padding: "25px",
            }}
          >
            <h2>Greeting component</h2>
            <GreetingsFn />
          </div>

          <div
            style={{
              margin: "25px",
              border: "1px solid black",
              padding: "25px",
            }}
          >
            <h2>Effect test component</h2>
            <EffectTest />
          </div>
        </>
      )}

      <button
        onClick={() => {
          setShowComponents(!showComponents);
        }}
      >
        Toggle Greeting
      </button>
    </div>
  );
}

export default App;
