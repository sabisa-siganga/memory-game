import React, { useState } from "react";
import "./GameLauncher.scss";
import { ReactComponent as FirstPlayer } from "../../assets/player1.svg";
import { ReactComponent as SecondPlayer } from "../../assets/player2.svg";
import UserPlayer from "../UserPlayer/UserPlayer";
import Button from "../Button/Button";
import { useAppDispatch } from "../../store/store";
import { addPlayerName } from "../../store/gamePlay";

// GameLauncher component for starting the game and collecting player names
const GameLauncher = () => {
  const [player1Value, setPlayer1Value] = useState("");
  const [player2Value, setPlayer2Value] = useState("");

  // Access the dispatch function from the Redux store using the useAppDispatch hook
  const dispatch = useAppDispatch();

  // Event handler for form submission
  const onPlay = (event: React.FormEvent) => {
    event.preventDefault();

    // Dispatch action to add player names to the Redux store
    dispatch(
      addPlayerName({ player1Name: player1Value, player2Name: player2Value })
    );
  };

  // JSX structure representing the game launcher form
  return (
    <div className="gameLaunch-container">
      {/* Display a heading */}
      <h2>Are you ready to play?</h2>

      {/* Form for collecting player names */}
      <form onSubmit={onPlay}>
        {/* Container for player inputs */}
        <div className="players">
          {/* UserPlayer component for Player 1 */}
          <UserPlayer
            playerImage={<FirstPlayer />}
            player="1"
            getPlayerName={(e) => {
              // Callback function to update Player 1's name in the state
              setPlayer1Value(e.target.value);
            }}
            // Value for Player 1's input field
            value={player1Value}
          />

          {/* UserPlayer component for Player 2 */}
          <UserPlayer
            playerImage={<SecondPlayer />}
            player="2"
            getPlayerName={(e) => {
              // Callback function to update Player 2's name in the state
              setPlayer2Value(e.target.value);
            }}
            // Value for Player 2's input field
            value={player2Value}
          />
        </div>

        {/* Container for the "Let's Play" button */}
        <div className="play-btn">
          {/* Button component triggering the form submission */}
          <Button type="submit" color="green">
            Let's Play
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GameLauncher;
