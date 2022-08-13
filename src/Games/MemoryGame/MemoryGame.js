import React from "react";
import Cards from "./Cards";
import styles from "./MemoryGame.module.css";
function MemoryGame() {
  return (
    <>
      <div className={styles.body}>
        <div>
          <h1 className={styles.heading}>Memory Game</h1>
          <Cards />
        </div>
      </div>
    </>
  );
}

export default MemoryGame;
