import styled from "styled-components";
import React, { useEffect, useState } from "react";
const BIRD_SIZE = 20;
const GAME_WIDTH = 1000;
const GAME_HEIGHT = 500;
const GRAVITY = 3;
function FlappyBird() {
  const [birdPostion, setBirdPosition] = useState(250);
  useEffect(() => {
    let timeId;
    if (birdPostion < GAME_HEIGHT - BIRD_SIZE) {
      timeId = setInterval(() => {
        setBirdPosition((birdPostion) => birdPostion + GRAVITY);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    };
  });
  return (
    <Div>
      <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
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
