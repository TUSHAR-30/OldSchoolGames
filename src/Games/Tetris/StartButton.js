import styles from "./StartButton.module.css";

const StartButton = ({ callback }) => {
  return (
    <button className={styles["start-button"]} onClick={callback}>
      Start Game
    </button>
  );
};

export default StartButton;
