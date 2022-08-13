export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  // Create an array of length STAGE_WIDTH where each element is another array of length STAGE_WIDTH
  // Where each element is yet another array having 2 elements 0/1 and "clear"/"merge"
  // 0 indicates that the current cell has no Tetromino, 1 indicates that the cell has a tetromino
  // "clear" indicates that the tetromino should be cleared from that specific cell on the next render
  // "merge" indicates that the tetromino should stay and be displayed on that cell on the next render
  return Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
};

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1) {
      // Check if current cell is containing a tetromino
      if (player.tetromino[y][x] !== 0) {
        if (
          // Check if our move is inside the game's bounds
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
