import { Button } from "@nextui-org/react";

const StartButton = ({ callback, buttonText, marginUp }) => {
  return (
    <Button
      shadow
      color="primary"
      size="xl"
      onClick={callback}
      css={{
        alignSelf: "center",
        marginTop: `${marginUp ? marginUp : ""}`,
        fontSize: "1.5rem",
      }}
      auto
    >
      {buttonText}
    </Button>
  );
};

export default StartButton;
