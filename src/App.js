import Homepage from "./components/Homepage";

// Required for NextUI to work correctly
import { NextUIProvider } from "@nextui-org/react";
import FlappyBird from "./Games/FlappyBird/FlappyBird";
import "./App.css";

function App() {
  return (
    // <NextUIProvider>
    <div className="App">
      {/* <Homepage /> */}
      <FlappyBird />
    </div>
    // </NextUIProvider>
  );
}

export default App;
