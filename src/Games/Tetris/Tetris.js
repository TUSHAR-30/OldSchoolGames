import { useState } from "react";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import styles from "./Tetris.module.css";

const Tetris = () => {
  const [dropSpeed, setDropSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  return (
    <div className={styles["tetris-wrapper"]}>
      <div className={styles.tetris}>
        <Stage stage={stage} />
        <aside className={styles["aside-container"]}>
          {gameOver ? (
            <Display text="Game Over" gameOver={gameOver} />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
