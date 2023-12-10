import React, { ReactNode } from "react";
import "./UserPlayer.scss";

interface Props {
  playerImage: ReactNode;
  player: string;
  getPlayerName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const UserPlayer = (props: Props) => {
  const { playerImage, player, getPlayerName, value } = props;
  return (
    <div className="image-container">
      <div className="playerImg">{playerImage}</div>
      <input
        type="text"
        name="input"
        placeholder={`Name of Player ${player}`}
        onChange={(event) => {
          getPlayerName(event);
        }}
        value={value}
        required
      />
    </div>
  );
};

export default UserPlayer;
