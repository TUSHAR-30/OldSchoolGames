import { useState } from "react";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage } from "./gameHelpers";

import styles from "./Tetris.module.css";

const Tetris = () => {
  const [dropSpeed, setDropSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  const movePlayer = (dir) => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    // Reset
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = (keyCode) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1); // Move to the left
      } else if (keyCode === 39) {
        movePlayer(1); // Move to the right
      } else if (keyCode === 40) {
        dropPlayer(); // Move down
      }
    }
  };

  return (
    <div
      className={styles["tetris-wrapper"]}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e.keyCode)}
    >
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
          <StartButton callback={startGame} />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
