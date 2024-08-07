import "./styles.css";

import { Square } from "./node";
import { Board } from "./board";

export default function App() {
  return (
    <div className="App">
      <h1>Algorithm Visualizer</h1>
      <h2>Click on the tiles to make walls</h2>
      <h3>Use the dropdown to select the algorithm</h3>
      <h3>Click on the button to start the visualization</h3>
      <div className="Board">
        <Board />
        <div>
          Made by Toby Kaufman
          Github Repo:
        </div>
        
      </div>
    </div>
  );
}
