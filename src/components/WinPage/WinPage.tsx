import React from "react";
import "./WinPage.scss";
import { ReactComponent as WinnerImage } from "../../assets/winner.svg";
import { ReactComponent as WinnerCup } from "../../assets/cup.svg";
import { ReactComponent as PlayerImage1 } from "../../assets/player1.svg";
import { ReactComponent as PlayerImage2 } from "../../assets/player2.svg";
import Button from "../Button/Button";

const WinPage = () => {
  return (
    <div className="winpage-container">
      <div className="win-message">Well Done!</div>
      <div className="winner-name">Player 1</div>
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
            <div className="winner">Player 1</div>
            <div className="score">Score: 32</div>
          </div>

          <div className="second-place">
            <div>
              <PlayerImage1 />
            </div>
            <div className="position">2nd Place</div>
            <div className="winner">Player 2</div>
            <div className="score">Score: 22</div>
          </div>
        </div>
      </div>

      <div className="play-btn">
        <Button type="button" color="light-blue">
          PLAY AGAIN
        </Button>
      </div>
    </div>
  );
};

export default WinPage;
