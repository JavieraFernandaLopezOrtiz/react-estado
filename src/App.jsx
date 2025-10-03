import { useState } from "react";
import "./App.css";

function App() {
  // Estado inicial del contador
  const [count, setCount] = useState(0);

  // Funciones para manejar el contador
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div className="app">
      <h1 className="title">Contador con React</h1>

      <div className="counter-box">
        <p className="count">{count}</p>
        <div className="buttons">
          <button className="btn" onClick={incrementCount}>Incrementar</button>
          <button className="btn" onClick={decrementCount}>Decrementar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
