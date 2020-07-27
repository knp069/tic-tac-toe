import React from "react";
import { Board } from "./board";

export class Game extends React.Component {
  render() {
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      </div>
    );
  }
}
