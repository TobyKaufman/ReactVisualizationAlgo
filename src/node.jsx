import { Component, useState } from "react";

export function Square({ endpt }) {
  const [isWall, setIsWall] = useState(false);
  let status = endpt;
  let isStart;

  if (status == 'start') {


  }

  if (status == 'start') {
    let dog;
  }


  function handleClick() {
    setIsWall(!isWall);
  }

  return (
    <button onClick={handleClick} className={{status}}>
      {isWall}
    </button>
  );
}
