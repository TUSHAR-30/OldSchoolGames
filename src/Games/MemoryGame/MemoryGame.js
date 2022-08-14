import React from "react";
import Cards from "./Cards";
import BackButton from "../../components/BackButton";
import StartButton from "../../components/StartButton";
import { Container } from "@nextui-org/react/";
import styles from "./MemoryGame.module.css";

function MemoryGame() {
  return (
    <>
      <BackButton topRight={true} />
      <div className={styles.body}>
        <div>
          <h1 className={styles.heading}>Memory Game</h1>
          <Cards />
          <Container
            display="flex"
            justify="center"
            css={{ width: "100%", margin: "2rem 0" }}
          >
            <StartButton
              callback={() => console.log("Button Clicked")}
              buttonText="New Game"
            />
          </Container>
        </div>
      </div>
    </>
  );
}

export default MemoryGame;
