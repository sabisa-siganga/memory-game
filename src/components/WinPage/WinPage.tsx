import React from "react";
import "./WinPage.scss";
import { ReactComponent as WinnerImage } from "../../assets/winner.svg";
import { ReactComponent as WinnerCup } from "../../assets/cup.svg";
import { ReactComponent as PlayerImage1 } from "../../assets/player1.svg";
import { ReactComponent as PlayerImage2 } from "../../assets/player2.svg";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { restartGame } from "../../store/gamePlay";

// WinPage component for displaying the win page with game statistics
const WinPage = () => {
  // Retrieve game statistics from the Redux state
  const gameStats = useAppSelector((state) => state.gamePlay.stats);

  // Access Redux dispatch function
  const dispatch = useAppDispatch();

  // JSX structure representing the win page
  return (
    <div className="winpage-container">
      {/* Display the win message */}
      <div className="win-message">Well Done!</div>

      {/* Display the name of the winner */}
      <div className="winner-name">{gameStats.firstPlace.name}</div>

      {/* Display the image of the winner */}
      <div className="winner-image">
        <WinnerImage />
      </div>
      <div className="winplace-display">
        <div className="winner-cup">
          <WinnerCup />
        </div>

        {/* Display the winner place, cup, and score */}
        <div className="score-display">
          {/* Display details for the first place */}
          <div className="first-place">
            {/* Display the image of the first player */}
            <div>
              <PlayerImage1 />
            </div>
            <div className="position">1st Place</div>
            <div className="winner">{gameStats.firstPlace.name}</div>
            <div className="score">Score: {gameStats.firstPlace.score}</div>
          </div>

          {/* Display details for the second place */}
          <div className="second-place">
            {/* Display the image of the second player */}
            <div>
              <PlayerImage2 />
            </div>
            <div className="position">2nd Place</div>
            <div className="winner">{gameStats.secondPlace.name}</div>
            <div className="score">Score: {gameStats.secondPlace.score}</div>
          </div>
        </div>
      </div>

      {/* Display a button for playing the game again */}
      <div className="play-btn">
        <Button
          type="button"
          color="light-blue"
          onClick={() => {
            // Dispatch the restartGame action when the button is clicked
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
