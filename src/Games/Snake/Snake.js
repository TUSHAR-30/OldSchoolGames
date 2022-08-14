import { useState, useEffect, useRef } from "react";
import { useInterval } from "../../hooks/useInterval";
import BackButton from "../../components/BackButton";

import AsidePanel from "./AsidePanel";

import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "./gameConstants";

import styles from "./Snake.module.css";

const Snake = () => {
  const canvasRef = useRef();

  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setScore(0);
    setGameOver(false);
  };

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) => {
    if (keyCode >= 37 && keyCode <= 40) {
      setDir((prevDir) => {
        const newDir = DIRECTIONS[keyCode];
        // Dont allow 180 degree turns as it causes the snake to collide
        if (
          (prevDir[0] === newDir[0] && prevDir[1] === -newDir[1]) ||
          (prevDir[0] === -newDir[0] && prevDir[1] === newDir[1])
        ) {
          return prevDir;
        }
        return newDir;
      });
    }
  };

  const createApple = () => {
    return apple.map((_, i) =>
      Math.floor((Math.random() * CANVAS_SIZE[i]) / SCALE)
    );
  };

  const checkCollision = (piece, completeSnake = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    ) {
      return true;
    }

    for (const part of completeSnake) {
      if (piece[0] === part[0] && piece[1] === part[1]) {
        return true;
      }
    }

    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(createApple);
      setSpeed((prev) => {
        if (prev > 100) {
          return prev - 10;
        } else if (prev > 50) {
          return prev - 7;
        } else if (prev > 5) {
          return prev - 5;
        }
        return prev;
      });
      setScore((prevScore) => prevScore + 10);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) {
      endGame();
    }
    if (!checkAppleCollision(snakeCopy)) {
      snakeCopy.pop();
    }
    setSnake(snakeCopy);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    context.fillStyle = "green";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "red";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  useInterval(gameLoop, speed);

  return (
    <div
      className={styles["snake-wrapper"]}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => moveSnake(e)}
    >
      <BackButton topMargin="1rem" topRight={true} />
      <div className={styles["snake-container"]}>
        <canvas
          style={{ border: "3px solid #999" }}
          ref={canvasRef}
          width={`${CANVAS_SIZE[0]}px`}
          height={`${CANVAS_SIZE[1]}px`}
        />
        <AsidePanel gameOver={gameOver} score={score} startGame={startGame} />
      </div>
    </div>
  );
};

export default Snake;
