import { useState } from "react";
import { calculateWinner } from "./TicTacToe.methods";
import Square from "./Square/Square";
import "./TicTacToe.css";

export default function TicTacToe() {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const winner = calculateWinner(squares);
  const status = !!winner
    ? `The winner is ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleClick(i: number) {
    return () => {
      if (squares[i] !== null || calculateWinner(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      nextSquares[i] = xIsNext ? "X" : "O";
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    };
  }

  return (
    <div className="board">
      <text className="status-text">{status}</text>
      <div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={handleClick(0)} />
          <Square value={squares[1]} onSquareClick={handleClick(1)} />
          <Square value={squares[2]} onSquareClick={handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={handleClick(3)} />
          <Square value={squares[4]} onSquareClick={handleClick(4)} />
          <Square value={squares[5]} onSquareClick={handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={handleClick(6)} />
          <Square value={squares[7]} onSquareClick={handleClick(7)} />
          <Square value={squares[8]} onSquareClick={handleClick(8)} />
        </div>
      </div>
    </div>
  );
}
