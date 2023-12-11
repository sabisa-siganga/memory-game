import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import GameLauncher from "./components/GameLauncher/GameLauncher";
import GameBoard from "./components/GameBoard/GameBoard";
import { useAppSelector } from "./store/store";
import WinPage from "./components/WinPage/WinPage";

// Main application container for the memory card game app
const App = () => {
  // Retrieve the game state from the Redux store using the useAppSelector hook.
  const gameState = useAppSelector((state) => state.gamePlay.gameState);

  // Return the JSX structure representing the main application layout.
  return (
    <div className="app-container">
      {/* Display the Header component if the game is not in the "end-game" state. */}
      {gameState !== "end-game" && <Header />}

      {/* Ellipses container for decorative visual elements. */}
      <div className="elipses-container">
        <div className="firstElipse"></div>
        <div className="secondElipse"></div>
        <div className="thirdElipse"></div>
      </div>

      {/* Display the GameLauncher component when the game is in the "start" state. */}
      {gameState === "start" && <GameLauncher />}

      {/* Display the GameBoard component when the game is in the "playing" state. */}
      {gameState === "playing" && <GameBoard />}

      {/* Display the WinPage component when the game is in the "end-game" state. */}
      {gameState === "end-game" && <WinPage />}
    </div>
  );
};

export default App;
