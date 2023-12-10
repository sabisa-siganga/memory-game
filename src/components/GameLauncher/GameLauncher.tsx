import React, { useState } from "react";
import "./GameLauncher.scss";
import { ReactComponent as FirstPlayer } from "../../assets/player1.svg";
import { ReactComponent as SecondPlayer } from "../../assets/player2.svg";
import UserPlayer from "../UserPlayer/UserPlayer";
import Button from "../Button/Button";
import { useAppDispatch } from "../../store/store";
import { addPlayerName } from "../../store/gamePlay";

const GameLauncher = () => {
  const [player1Value, setPlayer1Value] = useState("");
  const [player2Value, setPlayer2Value] = useState("");

  const dispatch = useAppDispatch();

  const onPlay = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      addPlayerName({ player1Name: player1Value, player2Name: player2Value })
    );
  };
  return (
    <div className="gameLaunch-container">
      <h2>Are you ready to play?</h2>
      <form onSubmit={onPlay}>
        <div className="players">
          <UserPlayer
            playerImage={<FirstPlayer />}
            player="1"
            getPlayerName={(e) => {
              setPlayer1Value(e.target.value);
            }}
            value={player1Value}
          />
          <UserPlayer
            playerImage={<SecondPlayer />}
            player="2"
            getPlayerName={(e) => {
              setPlayer2Value(e.target.value);
            }}
            value={player2Value}
          />
        </div>
        <div className="play-btn">
          <Button type="submit" color="green">
            Let's Play
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GameLauncher;
