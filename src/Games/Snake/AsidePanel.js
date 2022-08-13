import styles from "./AsidePanel.module.css";

const AsidePanel = ({ gameOver, score, startGame }) => {
  return (
    <div className={styles.aside}>
      <h2>Snake 🐍</h2>
      {gameOver && <div className={styles["game-over"]}>{`Game Over :(`}</div>}
      <div className={styles.score}>{`Score ${score}`}</div>
      <button className={styles["start-button"]} onClick={startGame}>
        {gameOver ? "Replay" : "Start Game"}
      </button>
    </div>
  );
};

export default AsidePanel;
