import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      shadow
      color="success"
      size="xl"
      onClick={() => {
        navigate("/");
      }}
      css={{
        alignSelf: "center",
        marginTop: "2rem",
        fontSize: "1.5rem",
      }}
      auto
    >
      Go Back
    </Button>
  );
};

export default BackButton;
