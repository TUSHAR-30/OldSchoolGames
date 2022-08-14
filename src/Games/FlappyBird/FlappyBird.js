import styled from "styled-components";
import React, { useEffect, useState } from "react";
import bird from "./flappy.png";
const BIRD_SIZE = 30;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 3;
const JUMP_HEIGHT = 70;
const OBSTACLE_WIDTH = 60;
const OBSTACLE_GAP = 170;
function FlappyBird() {
  const [birdPostion, setBirdPosition] = useState(250);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(100);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
  const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight;
  const [score, setScore] = useState(-1);
  useEffect(() => {
    let timeId;
    if (gameHasStarted && birdPostion < GAME_HEIGHT - BIRD_SIZE) {
      timeId = setInterval(() => {
        setBirdPosition((birdPostion) => birdPostion + GRAVITY);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [birdPostion, gameHasStarted]);

  useEffect(() => {
    let obstacleId;
    if (gameHasStarted && obstacleLeft >= -OBSTACLE_WIDTH) {
      obstacleId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 5);
      }, 24);
      return () => {
        clearInterval(obstacleId);
      };
    } else {
      setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
      setObstacleHeight(
        Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP))
      );
      setScore((score) => score + 1);
    }
  }, [gameHasStarted, obstacleLeft]);
  useEffect(() => {
    const hasCollideWithTopObstacle =
      birdPostion >= 0 && birdPostion < obstacleHeight;
    const hasCollideWithBottomObstacle =
      birdPostion <= 540 && birdPostion >= 540 - bottomObstacleHeight;
    if (
      obstacleLeft >= 0 &&
      obstacleLeft <= OBSTACLE_WIDTH &&
      (hasCollideWithTopObstacle || hasCollideWithBottomObstacle)
    ) {
      setGameHasStarted(false);
      setScore(-2);
    }
  }, [birdPostion, obstacleHeight, bottomObstacleHeight, obstacleLeft]);
  const handleClick = () => {
    let newBirdPosition = birdPostion - JUMP_HEIGHT;
    if (!gameHasStarted) {
      setGameHasStarted(true);
    }
    if (newBirdPosition < 50) {
      setBirdPosition(50);
    } else {
      setBirdPosition(newBirdPosition);
    }
  };
  return (
    <Div onClick={handleClick}>
      <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
        <Obstacle
          top={0}
          width={OBSTACLE_WIDTH}
          height={obstacleHeight}
          left={obstacleLeft}
        />
        <Obstacle
          top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
          width={OBSTACLE_WIDTH}
          height={bottomObstacleHeight}
          left={obstacleLeft}
        />
        <Bird size={BIRD_SIZE} top={birdPostion} src={bird} />
      </GameBox>
      <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "35px" }}>
        {score}
      </span>
    </Div>
  );
}

export default FlappyBird;

const Bird = styled.img`
  position: absolute;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height=100vh;
   & span {
    color: white;
    font-size: 24px;
    position: absolute;
  }
`;
const GameBox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: #2956f5;
  overflow: hidden;
  margin: 50px;
`;
const Obstacle = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  background-color: green;
`;
