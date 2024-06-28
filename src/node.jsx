import { Component, useState } from "react";

export function Square() {
  const [isWall, setIsWall] = useState(false);

  function handleClick() {
    setIsWall(!isWall);
  }

  return (
    <button onClick={handleClick} className={isWall ? 'wall' : 'square'}>
      {isWall}
    </button>
  );
}
