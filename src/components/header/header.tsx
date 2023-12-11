import React from "react";
import "./Header.scss";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { reset, restartGame } from "../../store/gamePlay";

// // Header component represents the header section of the application.
const Header = () => {
  // Retrieve the current game state from the Redux store using the useAppSelector hook.
  const isGameOn = useAppSelector((state) => state.gamePlay.gameState);

  // Access the dispatch function from the Redux store using the useAppDispatch hook.
  const dispatch = useAppDispatch();

  // Return the JSX structure representing the header.
  return (
    <div className="header-container">
      {/* Display the game title. */}
      <h1 className="title">Memory</h1>

      {/* Container for buttons. */}
      <div className="btns-container">
        {/* Display "Restart Game" button only when the game is in the "playing" state. */}
        {isGameOn === "playing" && (
          <Button
            type="button"
            color="yellow"
            onClick={() => {
              // Dispatch the restartGame action when the button is clicked.
              dispatch(restartGame());
            }}
          >
            Restart Game
          </Button>
        )}

        {/* Display "Exit Game" button. Disable it when the game is in the "start" state. */}
        <Button
          type="button"
          color="red"
          onClick={() => {
            // Dispatch the reset action when the button is clicked.
            dispatch(reset());
          }}
          // Disable the button when the game is in the "start" state.
          disabled={isGameOn === "start"}
        >
          Exit Game
        </Button>
      </div>
    </div>
  );
};

export default Header;
