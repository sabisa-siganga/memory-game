import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import GameLauncher from "./components/GameLauncher/GameLauncher";
import GameBoard from "./components/GameBoard/GameBoard";
import { useAppSelector } from "./store/store";
import WinPage from "./components/WinPage/WinPage";

const App = () => {
  const gameState = useAppSelector((state) => state.gamePlay.gameState);
  console.log(gameState);

  return (
    <div className="app-container">
      {gameState !== "end-game" && <Header />}

      <div className="elipses-container">
        <div className="firstElipse"></div>
        <div className="secondElipse"></div>
        <div className="thirdElipse"></div>
      </div>

      {gameState === "start" && <GameLauncher />}
      {gameState === "playing" && <GameBoard />}
      {gameState === "end-game" && <WinPage />}
    </div>
  );
};

export default App;
