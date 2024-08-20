import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleIncress = () => {
    setValue(value + 1);
  };

  const handleDecress = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      const userConfirmed = window.confirm(
        "You can't go below zero! Do you want to reset the counter?"
      );
      if (userConfirmed) {
        setValue(0);
      }
    }
  };

  const handleReset = () => {
    const userConfirmed = window.confirm("Do You want to reset ");
    if (userConfirmed) {
      setValue(0);
    }
  };

  const handleChange = (event) => {
    const num = Number(event.target.value);
    setInputValue(num);
  };

  const handleClick = () => {
    setValue(value + inputValue);
  };

  return (
    <>
      <h1>My app counter</h1>
      <div className="card">
        <h2>Counter</h2>
        <div className="input-submit">
          <input type="text" onChange={handleChange} />
          <button onClick={handleClick}>submit</button>
        </div>
        <div className="counter">{value}</div>
        <div className="buttons">
          <button onClick={handleIncress}>Increment</button>
          <button onClick={handleDecress}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
