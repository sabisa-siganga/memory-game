import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import GameLauncher from "./components/GameLauncher/GameLauncher";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="elipses-container">
        <div className="firstElipse"></div>
        <div className="secondElipse"></div>
        <div className="thirdElipse"></div>
      </div>
      <GameLauncher />
    </div>
  );
};

export default App;
