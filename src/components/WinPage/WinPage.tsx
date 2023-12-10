import React from "react";
import "./WinPage.scss";
import { ReactComponent as WinnerImage } from "../../assets/winner.svg";
import { ReactComponent as WinnerCup } from "../../assets/cup.svg";
import { ReactComponent as PlayerImage1 } from "../../assets/player1.svg";
import { ReactComponent as PlayerImage2 } from "../../assets/player2.svg";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { restartGame } from "../../store/gamePlay";

const WinPage = () => {
  const gameStats = useAppSelector((state) => state.gamePlay.stats);
  const dispatch = useAppDispatch();

  return (
    <div className="winpage-container">
      <div className="win-message">Well Done!</div>
      <div className="winner-name">{gameStats.firstPlace.name}</div>
      <div className="winner-image">
        <WinnerImage />
      </div>
      <div className="winplace-display">
        <div className="winner-cup">
          <WinnerCup />
        </div>
        <div className="score-display">
          <div className="first-place">
            <div>
              <PlayerImage1 />
            </div>
            <div className="position">1st Place</div>
            <div className="winner">{gameStats.firstPlace.name}</div>
            <div className="score">Score: {gameStats.firstPlace.score}</div>
          </div>

          <div className="second-place">
            <div>
              <PlayerImage2 />
            </div>
            <div className="position">2nd Place</div>
            <div className="winner">{gameStats.secondPlace.name}</div>
            <div className="score">Score: {gameStats.secondPlace.score}</div>
          </div>
        </div>
      </div>

      <div className="play-btn">
        <Button
          type="button"
          color="light-blue"
          onClick={() => {
            dispatch(restartGame());
          }}
        >
          PLAY AGAIN
        </Button>
      </div>
    </div>
  );
};

export default WinPage;
