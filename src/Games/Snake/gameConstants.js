const CANVAS_SIZE = [600, 600];
const SNAKE_START = [
  [11, 13],
  [11, 14],
];
const APPLE_START = [11, 7];
const SCALE = 25;
const SPEED = 180;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0], // right
};

export { CANVAS_SIZE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS };
