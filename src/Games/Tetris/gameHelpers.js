export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  // Create an array of length STAGE_WIDTH where each element is another array of length STAGE_WIDTH
  // Where each element is yet another array having 2 elements 0/1 and "clear"/"merge"
  // 0 indicates that the current cell has no Tetromino, 1 indicates that the cell has a tetromino
  // "clear" indicates that the tetromino should be cleared from that specific cell on the next render
  // "merge" indicates that the tetromino should stay and be displayed on that cell on the next render
  return Array.from(Array(STAGE_WIDTH), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
};
