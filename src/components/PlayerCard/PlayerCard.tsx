import React, { ReactNode } from "react";
import "./PlayerCard.scss";
import Button from "../Button/Button";

// Interface defining the props expected by the PlayerCard component
interface Props {
  image: ReactNode;
  playerName: string;
  score: number;
  shouldPlay: boolean;
  buttonColor: "green" | "white";
}

// PlayerCard component for displaying player information
const PlayerCard = (props: Props) => {
  // Destructure props to access individual properties
  const { image, playerName, score, shouldPlay, buttonColor } = props;

  // JSX structure representing the player card
  return (
    <div className="playercard-container">
      <div className="player-container">
        {/* Display the player image */}
        <div className="player-image">{image}</div>

        {/* Display the player name */}
        <p className="player-name">{playerName}</p>

        {/* Display the player score */}
        <p className="score">{`Score: ${score}`}</p>
      </div>

      {/* Display a button if it's the player's turn */}
      {shouldPlay && (
        <Button type="button" color={buttonColor}>
          It's your turn
        </Button>
      )}
    </div>
  );
};

export default PlayerCard;
