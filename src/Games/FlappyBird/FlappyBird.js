import styled from "styled-components";
import React, { useEffect, useState } from "react";
const BIRD_SIZE = 20;
const GAME_WIDTH = 600;
const GAME_HEIGHT = 500;
const GRAVITY = 3;
const JUMP_HEIGHT = 90;
const OBSTACLE_WIDTH = 60;
const OBSTACLE_GAP = 200;
function FlappyBird() {
  const [birdPostion, setBirdPosition] = useState(250);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(100);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
  const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight;
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
        <Bird size={BIRD_SIZE} top={birdPostion} />
      </GameBox>
    </Div>
  );
}

export default FlappyBird;

const Bird = styled.div`
  position: absolute;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const GameBox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: blue;
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
