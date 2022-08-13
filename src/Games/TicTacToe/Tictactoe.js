import React, { useState } from "react";
import SquareComponent from "./SquareComponent";
import styles from "./Tictactoe.module.css";
const initialState = ["", "", "", "", "", "", "", "", ""];
function Tictactoe() {
  const [gameState, updateGameState] = useState(initialState);
  const [isXChance, updateIsXChance] = useState(false);
  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "O";
    updateGameState(strings);
    updateIsXChance(!isXChance);
  };
  return (
    <div className={styles["tictactoe-header"]}>
      <p className={styles["heading-text"]}>Tic Tac Toe</p>
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
        onClick={() => updateGameState(initialState)}
      >
        Clear Game
      </button>
    </div>
  );
}

export default Tictactoe;
