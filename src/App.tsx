import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import GameLauncher from "./components/GameLauncher/GameLauncher";
import GameBoard from "./components/GameBoard/GameBoard";

const App = () => {
  const gameStarted = true;

  return (
    <div className="app-container">
      <Header />
      <div className="elipses-container">
        <div className="firstElipse"></div>
        <div className="secondElipse"></div>
        <div className="thirdElipse"></div>
      </div>

      {!gameStarted && <GameLauncher />}
      {gameStarted && <GameBoard />}
    </div>
  );
};

export default App;
