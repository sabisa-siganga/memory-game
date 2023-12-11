import React, { ReactNode, useState } from "react";
import "./UserPlayer.scss";
import FormModal from "../FormModal/FormModal";

// Interface defining the props expected by the UserPlayer component
interface Props {
  playerImage: ReactNode;
  player: string;
  getPlayerName: (event: string) => void;
  value: string;
}

// UserPlayer component for rendering a user input section with a player image and name input field
const UserPlayer = (props: Props) => {
  // Destructure props to access individual properties
  const { playerImage, player, getPlayerName, value } = props;

  // State to manage the visibility of the modal
  const [show, setShow] = useState(false);

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Function to show the modal
  const handleShow = () => setShow(true);

  const handleSave = (inputValue: string) => {
    // Call the  callback to get the player name
    getPlayerName(inputValue);
    handleClose();
  };

  // JSX structure representing the user input section
  return (
    <div className="image-container">
      {/* Display the player image */}
      <div className="playerImg">{playerImage}</div>

      {/* Input field for entering the player name */}
      <input
        type="text"
        name="input"
        placeholder={`Name of Player ${player}`}
        onClick={handleShow}
        value={value}
        required
      />

      {/* Render FormModal component with props */}
      <FormModal show={show} close={handleClose} onSave={handleSave} />
    </div>
  );
};

export default UserPlayer;
