import Tetris from "./Games/Tetris/Tetris";
import MemoryGame from "./Games/MemoryGame/MemoryGame";
import Tictactoe from "./Games/TicTacToe/Tictactoe";
import Snake from "./Games/Snake/Snake";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Tetris /> */}
      {/* <Tictactoe /> */}
      {/* <MemoryGame /> */}
      <Snake />
    </div>
  );
}

export default App;
