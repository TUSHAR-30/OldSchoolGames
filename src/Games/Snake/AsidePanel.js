import { Text } from "@nextui-org/react/";
import StartButton from "../../components/StartButton";
import styles from "./AsidePanel.module.css";

const AsidePanel = ({ gameOver, score, startGame }) => {
  return (
    <div className={styles.aside}>
      <Text
        css={{
          fontFamily: "GamePlayed",
          textAlign: "center",
          width: "100%",
          margin: "0.5rem 0 0.5rem 0",
          letterSpacing: "normal",
          lineHeight: "normal",
          color: "white",
        }}
        size="5rem"
      >
        Snake🐍
      </Text>
      {gameOver && <div className={styles["game-over"]}>{`Game Over :(`}</div>}
      <div className={styles.score}>{`Score ${score}`}</div>
      <StartButton
        callback={startGame}
        buttonText={gameOver ? "Replay" : "Start Game"}
      />
    </div>
  );
};

export default AsidePanel;
