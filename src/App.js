import "./styles.css";

import { Square } from "./node";
import { Board } from "./board";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="Board">
        <Board />
        
      </div>
    </div>
  );
}
