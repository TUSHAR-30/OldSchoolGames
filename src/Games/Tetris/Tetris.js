import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage } from "./gameHelpers";

import styles from "./Tetris.module.css";

const Tetris = () => {
  return (
    <div className={styles["tetris-wrapper"]}>
      <div className={styles.tetris}>
        <Stage stage={createStage()} />
        <aside className={styles["aside-container"]}>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
