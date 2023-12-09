import React from "react";
import "./GameLauncher.scss";
import { ReactComponent as FirstPlayer } from "../../assets/player1.svg";
import { ReactComponent as SecondPlayer } from "../../assets/player2.svg";
import UserPlayer from "../UserPlayer/UserPlayer";
import Button from "../Button/Button";
// import UserPlayer from "../UserPlayer/UserPlayer";

const GameLauncher = () => {
  return (
    <div className="gameLaunch-container">
      <h2>Are you ready to play?</h2>
      <div className="players">
        <UserPlayer playerImage={<FirstPlayer />} player="1" />
        <UserPlayer playerImage={<SecondPlayer />} player="2" />
      </div>
      <div className="play-btn">
        <Button type="button" color="green">
          Let's Play
        </Button>
      </div>
    </div>
  );
};

export default GameLauncher;
