import { useState } from "react";
import "./App.css";

function App() {
  //style
  const counter = {
    fontSize: "76px",
  };
  const minus = {
    backgroundColor: "red",
    fontSize: "22px",
    borderRadius: "5px",
    border: "none",
    margin: "5px",
  };
  const plus = {
    backgroundColor: "#4CAF50",
    fontSize: "22px",
    borderRadius: "5px",
    border: "none",
    margin: "5px",
  };
  //useState Hook
  const [count, setCount] = useState(0);
  const minusCount = () => {
    setCount(count - 1);
  };
  const plusCount = () => {
    setCount(count +1);
  };
  return (
    <div className="App">
      <div>
        <h2>Counter</h2>
        <h1 style={counter}>{count}</h1>
        <button style={minus} onClick={minusCount}>
          - Minus
        </button>
        <button style={plus} onClick={plusCount}>
          Plus +
        </button>
      </div>
    </div>
  );
}

export default App;
