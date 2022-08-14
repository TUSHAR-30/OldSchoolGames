import BackButton from "./BackButton";

const MusicComponent = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <BackButton />
      <iframe
        style={{ margin: "2rem", marginLeft: "10%", borderRadius: "20px" }}
        title="spotify embed"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
        width="80%"
        height="600px"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default MusicComponent;
