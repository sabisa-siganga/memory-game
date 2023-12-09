import React, { ReactNode } from "react";
import "./UserPlayer.scss";

interface Props {
  playerImage: ReactNode;
  player: string;
}

const UserPlayer = (props: Props) => {
  const { playerImage, player } = props;
  return (
    <div className="image-container">
      <div className="playerImg">{playerImage}</div>
      <input
        type="text"
        name="input"
        placeholder={`Name of Player ${player}`}
      />
    </div>
  );
};

export default UserPlayer;
