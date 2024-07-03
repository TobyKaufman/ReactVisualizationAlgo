import "./styles.css";

import { Square } from "./node";
import { Board } from "./board";

export default function App() {
  return (
    <div className="App">
      <h1>Algorithm Visualizer</h1>
      <div className="Board">
        <Board />
        
      </div>
    </div>
  );
}
