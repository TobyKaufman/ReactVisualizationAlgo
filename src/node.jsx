import { Component, useState } from "react";

export function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setNum(value + 1);
  }

  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}
