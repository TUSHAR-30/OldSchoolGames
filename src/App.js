import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Required for NextUI to work correctly
import { NextUIProvider } from "@nextui-org/react";
import MusicComponent from "./components/MusicComponent";

// Games
import Tetris from "./Games/Tetris/Tetris";
import MemoryGame from "./Games/MemoryGame/MemoryGame";
import Tictactoe from "./Games/TicTacToe/Tictactoe";
import Snake from "./Games/Snake/Snake";
import FlappyBird from "./Games/FlappyBird/FlappyBird";
import "./App.css";

function App() {
  return (
    <Router>
      <NextUIProvider>
        <div className="App">
          <Routes>
            <Route
              exact
              path="/music"
              element={<MusicComponent></MusicComponent>}
            ></Route>
            <Route exact path="/tetris" element={<Tetris></Tetris>}></Route>
            <Route
              exact
              path="/memorygame"
              element={<MemoryGame></MemoryGame>}
            ></Route>
            <Route
              exact
              path="/tictactoe"
              element={<Tictactoe></Tictactoe>}
            ></Route>
            <Route exact path="/snake" element={<Snake></Snake>}></Route>
            <Route
              exact
              path="/flappybird"
              element={<FlappyBird></FlappyBird>}
            ></Route>
            <Route exact path="/" element={<Homepage></Homepage>}></Route>
            {/* <Homepage /> */}
          </Routes>
        </div>
      </NextUIProvider>
    </Router>
  );
}

export default App;
