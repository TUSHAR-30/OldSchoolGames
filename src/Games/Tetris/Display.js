import styles from "./Display.module.css";

const Display = ({ gameOver, text }) => {
  const displayFontColor = gameOver ? "red" : "#999";

  return (
    <div
      className={styles["display-container"]}
      style={{ color: displayFontColor }}
    >
      {text}
    </div>
  );
};

export default Display;
