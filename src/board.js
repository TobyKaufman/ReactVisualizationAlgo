import { Square } from "./node";
import { useState } from "react";

export function Board() {
  let grid = [];
  const [speed, setSpeed] = useState(1);

  
  function genBoard() {
    for (let r = 0; r < 15; r++) {
      let curRow = [];
      for (let c = 0; c < 25; c++) {
        curRow.push({ r, c });
      }
      grid.push(curRow);
    }
    

    return (
      <table id="Board" cellSpacing="0">
        {grid.map((row) => (
          <tr>
            {row.map(() => (
              <Square />
            ))}
            
          </tr>
        )
        )}
  
      </table>
  
    );
  }
  return genBoard();
}
