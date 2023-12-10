import React, { ReactNode } from "react";
import "./PlayerCard.scss";
import Button from "../Button/Button";

interface Props {
  image: ReactNode;
  playerName: string;
  score: number;
  shouldPlay: boolean;
  buttonColor: "green" | "white";
}
const PlayerCard = (props: Props) => {
  const { image, playerName, score, shouldPlay, buttonColor } = props;
  return (
    <div className="playercard-container">
      <div className="player-container">
        <div className="player-image">{image}</div>
        <p className="player-name">{playerName}</p>
        <p className="score">{`Score: ${score}`}</p>
      </div>

      {shouldPlay && (
        <Button type="button" color={buttonColor}>
          It's your turn
        </Button>
      )}
    </div>
  );
};

export default PlayerCard;
