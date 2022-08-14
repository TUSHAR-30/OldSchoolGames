import { useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import { useGameStatus } from "../../hooks/useGameStatus";
import { Text, Container } from "@nextui-org/react/";
import Stage from "./Stage";
import Display from "./Display";
import BackButton from "../../components/BackButton";
import StartButton from "../../components/StartButton";
import { createStage, checkCollision } from "./gameHelpers";

import styles from "./Tetris.module.css";

const Tetris = () => {
  const [dropSpeed, setDropSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const controlStyles = {
    alignSelf: "center",
    margin: "0.1rem 0 0 0",
    lineHeight: "normal",
    color: "white",
  };

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // Reset
    setStage(createStage());
    setDropSpeed(800);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDropSpeed(800 / (level + 1) + 200);
    }
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
        setDropSpeed(800 / (level + 1) + 200);
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
      onKeyUp={(e) => keyUp(e.keyCode)}
    >
      <div className={styles.tetris}>
        <Stage stage={stage} />
        <aside className={styles["aside-container"]}>
          <BackButton topMargin={"1rem"} />
          <Text
            css={{
              fontFamily: "GamePlayed",
              alignSelf: "center",
              margin: "0.5rem 0 0.5rem 0",
              lineHeight: "normal",
              color: "white",
            }}
            size="5rem"
          >
            Tetris
          </Text>
          <Container
            css={{
              padding: "0.2rem 1rem",
              border: "1px solid #ccc",
              borderRadius: "20px",
              width: "fit-content",
              backdropFilter: "blur(10px)",
            }}
          >
            <Text css={controlStyles} size="1.25rem">
              Left and Right Arrow Key to move horizontally
            </Text>
            <Text css={controlStyles} size="1.25rem">
              Down Arrow Key to drop faster
            </Text>
            <Text css={controlStyles} size="1.25rem">
              Up Arrow Key to rotate Tetromino
            </Text>
          </Container>
          {gameOver ? (
            <Display text="Game Over" gameOver={gameOver} />
          ) : (
            <div>
              <Display text={`Score ${score}`} />
              <Display text={`Rows ${rows}`} />
              <Display text={`Level ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} buttonText="Start Game" />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
