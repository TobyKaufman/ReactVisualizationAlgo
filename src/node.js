import { useState } from "react";

export function Square() {
  const [text, setText] = useState(0);
  const [wall, setWall] = useState(false);
  function handleClick() {
    setText(text + 1);
  }
  const txt = text.toString();

  return (
    <button className="square" onMouseDown={handleClick}>
      {txt}
    </button>
  );
}
