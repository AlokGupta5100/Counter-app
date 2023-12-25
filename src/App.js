import React, { useState } from "react";

const App = () => {
  //let counter = 16;
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    // console.log("clicked:", counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    // console.log("clicked:", counter);
    setCounter(counter - 1);
  };

  return (
    <>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <br />

      <button onClick={removeValue}> Remove value : {counter}</button>
    </>
  );
};

export default App;
