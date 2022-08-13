import React from "react";
import SquareComponent from "./SquareComponent";
import styles from "./Tictactoe.module.css";
function Tictactoe() {
  return (
    <div className={styles["tictactoe-header"]}>
      <p className={styles["heading-text"]}>Tic Tac Toe</p>
      <div className={styles["row jc-center"]}>
        <SquareComponent className={styles["b-bottomRight"]} />
        <SquareComponent className={styles["b-bottomRight"]} />
        <SquareComponent className={styles["b-bottom"]} />
      </div>
      <div className={styles["row jc-center"]}>
        <SquareComponent className={styles["b-bottomRight"]} />
        <SquareComponent className={styles["b-bottomRight"]} />
        <SquareComponent className={styles["b-bottom"]} />
      </div>
      <div className={styles["row jc-center"]}>
        <SquareComponent className={styles["b-right"]} />
        <SquareComponent className={styles["b-right"]} />
        <SquareComponent />
      </div>
      <button className={styles["clear-button"]}>Clear Game</button>
    </div>
  );
}

export default Tictactoe;
