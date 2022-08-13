import { Grid, Text, Container, Button } from "@nextui-org/react";
import GameCard from "./GameCard";
import MusicComponent from "./MusicComponent";

// Games
import Tetris from "../Games/Tetris/Tetris";
import MemoryGame from "../Games/MemoryGame/MemoryGame";
import Tictactoe from "../Games/TicTacToe/Tictactoe";
import Snake from "../Games/Snake/Snake";
import FlappyBird from "../Games/FlappyBird/FlappyBird";

import { games } from "../helpers/gamesData";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container display="flex" alignItems="center" justify="center">
        <Text
          css={{
            fontFamily: "GamePlayed",
            textAlign: "center",
            lineHeight: "normal",
            textGradient: "45deg, $purple800 -20%, $blue600 100%",
          }}
          size="6rem"
        >
          Board No More
        </Text>
        <Button
          shadow
          color="success"
          size="xl"
          onClick={() => {
            navigate("/music");
          }}
          css={{
            alignSelf: "center",
            justifySelf: "flex-end",
            fontSize: "1.5rem",
          }}
          auto
        >
          Play Music
        </Button>
      </Container>
      <Grid.Container gap={3} justify="center">
        {games.map((gameObj) => (
          <Grid
            onClick={() => {
              navigate(`/${gameObj.title}`);
            }}
            key={gameObj.title}
            xs={12}
            sm={6}
            md={4}
            justify="center"
          >
            <GameCard cardImg={gameObj.image} cardText={gameObj.title} />
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default Homepage;
