import { useState } from "react";
import { createStage } from "../Games/Tetris/gameHelpers";

export const useStage = () => {
  const [stage, setStage] = useState(createStage());
  return [stage, setStage];
};
