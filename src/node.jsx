import { Component, useState } from "react";

export default class Node extends Component {
  render() {
    return (
      <button className="square" onMouseDown={handleClick}>
        {txt}
      </button>
    );
  }
}
