import React, { useEffect, useState, useRef } from "react";
import SquareComponent from "./SquareComponent";
import styles from "./Tictactoe.module.css";
const initialState = ["", "", "", "", "", "", "", "", ""];
function Tictactoe() {
  const moves = useRef(0);
  const [gameState, updateGameState] = useState(initialState);
  const [isXChance, updateIsXChance] = useState(false);
  const [winnerMsg, setWinnerMsg] = useState(null);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index] === "" && !winnerMsg) {
      strings[index] = isXChance ? "X" : "O";
      updateGameState(strings);
      updateIsXChance(!isXChance);
      moves.current += 1;
    }
  };
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setWinnerMsg(winner);
      moves.current = 0;
    } else {
      if (moves.current === 9 && winner === null) {
        moves.current = 0;
        setWinnerMsg("Tie");
      }
    }
    //eslint-disable-next-line
  }, [gameState]);
  const checkWinner = () => {
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
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };
  return (
    <div className={styles["tictactoe-header"]}>
      <p className={styles["heading-text"]}>Tic Tac Toe</p>
      {!winnerMsg && (
        <p className={styles["current-player-message"]}>
          {isXChance ? `X's Turn To Play` : `O's Turn To Play`}
        </p>
      )}
      {winnerMsg && (
        <p className={styles["winner-message"]}>
          {winnerMsg === "Tie" ? `Game Tied :S` : `${winnerMsg} Wins!`}
        </p>
      )}
      <div className={styles["row jc-center"]}>
        <SquareComponent
          className={styles["b-bottomRight"]}
          state={gameState[0]}
          onClick={() => onSquareClicked(0)}
        />
        <SquareComponent
          className={styles["b-bottomRight"]}
          state={gameState[1]}
          onClick={() => onSquareClicked(1)}
        />
        <SquareComponent
          className={styles["b-bottom"]}
          state={gameState[2]}
          onClick={() => onSquareClicked(2)}
        />
      </div>
      <div className={styles["row jc-center"]}>
        <SquareComponent
          className={styles["b-bottomRight"]}
          state={gameState[3]}
          onClick={() => onSquareClicked(3)}
        />
        <SquareComponent
          className={styles["b-bottomRight"]}
          state={gameState[4]}
          onClick={() => onSquareClicked(4)}
        />
        <SquareComponent
          className={styles["b-bottom"]}
          state={gameState[5]}
          onClick={() => onSquareClicked(5)}
        />
      </div>
      <div className={styles["row jc-center"]}>
        <SquareComponent
          className={styles["b-right"]}
          state={gameState[6]}
          onClick={() => onSquareClicked(6)}
        />
        <SquareComponent
          className={styles["b-right"]}
          state={gameState[7]}
          onClick={() => onSquareClicked(7)}
        />
        <SquareComponent
          state={gameState[8]}
          onClick={() => onSquareClicked(8)}
        />
      </div>
      <button
        className={styles["clear-button"]}
        onClick={() => {
          updateGameState(initialState);
          setWinnerMsg(null);
        }}
      >
        Clear Game
      </button>
    </div>
  );
}

export default Tictactoe;
