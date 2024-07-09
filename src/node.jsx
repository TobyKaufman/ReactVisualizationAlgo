import { Component, useState } from "react";

export function Square({ endpt }) {
  const [isWall, setIsWall] = useState(false);
  let status = endpt;

  if (status == 'start') {

  }

  if (status == 'start') {
    
  }


  function handleClick() {
    setIsWall(!isWall);
  }

  return (
    <button onClick={handleClick} className={isWall ? 'wall' : 'square'}>
      {isWall}
    </button>
  );
}
