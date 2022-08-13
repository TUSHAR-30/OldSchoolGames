import { useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage, checkCollision } from "./gameHelpers";

import styles from "./Tetris.module.css";

const Tetris = () => {
  const [dropSpeed, setDropSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // Reset
    setStage(createStage());
    setDropSpeed(1000);
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log("Game Over!");
        setGameOver(true);
        setDropSpeed(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = (keyCode) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropSpeed(1000);
      }
    }
  };

  const dropPlayer = () => {
    setDropSpeed(null);
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
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropSpeed);

  return (
    <div
      className={styles["tetris-wrapper"]}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e.keyCode)}
      onKeyUp={keyUp}
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
