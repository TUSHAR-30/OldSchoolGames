import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ alignBtn, topMargin, topRight }) => {
  const navigate = useNavigate();

  const topRightStyles = topRight
    ? { position: "absolute", right: "0.6rem" }
    : {};

  const styles = {
    alignSelf: `${alignBtn ? alignBtn : "center"}`,
    marginTop: `${topMargin ? topMargin : "1rem"}`,
    fontSize: "1.25rem",
    ...topRightStyles,
  };

  return (
    <Button
      shadow
      color="success"
      size="lg"
      onClick={() => {
        navigate("/");
      }}
      css={styles}
      auto
    >
      Go Back
    </Button>
  );
};

export default BackButton;
