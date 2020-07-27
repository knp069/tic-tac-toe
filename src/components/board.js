import React from "react";
import { Square } from "./square";

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      xWin: 0,
      oWin: 0,
    };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    let winner = calculateWinner(squares);
    let winnerFound = false;
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    winner = calculateWinner(squares);
    if (!winnerFound && winner) {
      winnerFound = true;
      if (winner === "X") this.setState({ xWin: this.state.xWin + 1 });
      else if (winner === "O") this.setState({ oWin: this.state.oWin + 1 });
    }
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  resetBoard() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }

  resetScore() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      xWin: 0,
      oWin: 0,
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    let xWIn, oWin;

    xWIn = "X Winning : " + this.state.xWin;
    oWin = "O Winning : " + this.state.oWin;
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="score-board">
          <div> {xWIn}</div>
          <div> {oWin}</div>
        </div>
        <div className="game-info">
          <button onClick={() => this.resetScore()}> reset </button>
          <button onClick={() => this.resetBoard()}> new game</button>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
