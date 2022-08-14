import { Text } from "@nextui-org/react/";
import BackButton from "./BackButton";

const MusicComponent = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <BackButton topRight={true} topMargin="1rem" />
      <Text
        css={{
          fontFamily: "GamePlayed",
          alignSelf: "center",
          margin: "0.5rem 0 0.5rem 0",
          lineHeight: "normal",
          color: "white",
        }}
        size="4rem"
      >
        Music Player
      </Text>
      <iframe
        style={{ margin: "1rem 2rem 2rem 10%", borderRadius: "20px" }}
        title="spotify embed"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
        width="80%"
        height="500px"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default MusicComponent;
