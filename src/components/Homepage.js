import { Grid, Text, Container, Button } from "@nextui-org/react";
import GameCard from "./GameCard";

import { games } from "../helpers/gamesData";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 20 });
  }, []);
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
          // data-aos="zoom-in"
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
          // data-aos="fade-up"
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
              navigate(`/${gameObj.routeLink}`);
            }}
            key={gameObj.title}
            xs={12}
            sm={6}
            md={4}
            justify="center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <GameCard cardImg={gameObj.image} cardText={gameObj.title} />
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default Homepage;
