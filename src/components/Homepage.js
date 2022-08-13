import { Grid } from "@nextui-org/react";
import GameCard from "./GameCard";

// Games
import Tetris from "../Games/Tetris/Tetris";
import MemoryGame from "../Games/MemoryGame/MemoryGame";
import Tictactoe from "../Games/TicTacToe/Tictactoe";
import Snake from "../Games/Snake/Snake";

import { games } from "../helpers/gamesData";

const Homepage = () => {
  return (
    <Grid.Container
      css={{
        background: "linear-gradient(to right, #6A82FB, #FC5C7D)",
      }}
      gap={3}
      justify="center"
    >
      {games.map((gameObj) => (
        <Grid
          onClick={() => console.log(console.log(gameObj.title))}
          key={gameObj.title}
          xs={12}
          sm={4}
          justify="center"
        >
          <GameCard cardImg={gameObj.image} cardText={gameObj.title} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Homepage;
