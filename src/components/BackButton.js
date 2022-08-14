import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ alignBtn, topMargin }) => {
  const navigate = useNavigate();
  return (
    <Button
      shadow
      color="success"
      size="lg"
      onClick={() => {
        navigate("/");
      }}
      css={{
        alignSelf: `${alignBtn ? alignBtn : "center"}`,
        marginTop: `${topMargin ? topMargin : "2rem"}`,
        fontSize: "1.25rem",
      }}
      auto
    >
      Go Back
    </Button>
  );
};

export default BackButton;
