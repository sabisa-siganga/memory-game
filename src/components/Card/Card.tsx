import React, { useEffect, useRef, useState } from "react";
import "./Card.scss";
import { ReactComponent as CardBack } from "../../assets/Card_Back.svg";
import { Card as CardInfo } from "../../interfaces/card";

// Props interface for Card component
interface Props {
  info: CardInfo;
  onClick: (card: CardInfo) => void;
  showFront: boolean;
  selectedFirstChoice: boolean;
}

// Card component representing a clickable card in the gam
const Card = (props: Props) => {
  const { onClick, info, showFront, selectedFirstChoice } = props;

  // State to manage the visibility of the front of the second card in a pair
  const [showSecondCardFront, setShowSecondCardFront] = useState(false);

  // State to manage the visibility of the front of the second card in a pair
  useEffect(() => {
    if (!selectedFirstChoice) {
      setShowSecondCardFront(false);
    }
  }, [selectedFirstChoice]);

  // Function to handle card flipping logic
  const onFlip = () => {
    // If this card is the first choice, show the front of the second card after a delay
    if (selectedFirstChoice) {
      setShowSecondCardFront(true);

      // Execute the onClick callback after a delay
      setTimeout(() => {
        onClick(info);
      }, 1000);
    } else {
      // If this card is not the first choice, simply flip and execute the onClick callback
      setShowSecondCardFront(false);

      onClick(info);
    }
  };

  // Function to determine whether to show the front of the card
  function showCardFront() {
    return showFront || (selectedFirstChoice && showSecondCardFront);
  }

  // JSX structure representing the card
  return (
    <button
      className={`card-container ${info.isRemoved ? "removed" : ""}`}
      onClick={() => onFlip()}
      disabled={info.isRemoved}
    >
      <div className={`card ${showCardFront() ? "turn" : ""}`}>
        {/* Back of the card */}
        <div className="show-back">
          <CardBack />
        </div>
        {/* Front of the card */}
        <div className="show-front">
          <img src={info.image} alt="" />
        </div>
      </div>
    </button>
  );
};

export default Card;
