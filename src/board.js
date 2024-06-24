import { Square } from "./node";
import { useState } from "react";

export function Board() {
  let swag;
  const [speed, setSpeed] = useState(1);

  function generateBoard() {
    let outStr = "";

    for (let r = 0; r < 7; r++) {
      let rowHTML = `<tr id="${r}">`;
      for (let c = 0; c < 10; c++) {
        let nodeID = `${r}_${c}`;
      }
    }
  }
}
