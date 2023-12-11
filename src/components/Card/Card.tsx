import React, { useEffect, useRef, useState } from "react";
import "./Card.scss";
import { ReactComponent as CardBack } from "../../assets/Card_Back.svg";
import { Card as CardInfo } from "../../interfaces/card";

interface Props {
  info: CardInfo;
  onClick: (card: CardInfo) => void;
  showFront: boolean;
  selectedFirstChoice: boolean;
}

const Card = (props: Props) => {
  const { onClick, info, showFront, selectedFirstChoice } = props;

  const [showSecondCardFront, setShowSecondCardFront] = useState(false);

  useEffect(() => {
    if (!selectedFirstChoice) {
      setShowSecondCardFront(false);
    }
  }, [selectedFirstChoice]);

  const onFlip = () => {
    if (selectedFirstChoice) {
      setShowSecondCardFront(true);

      setTimeout(() => {
        onClick(info);
      }, 1000);
    } else {
      setShowSecondCardFront(false);

      onClick(info);
    }
  };

  function showCardFront() {
    return showFront || (selectedFirstChoice && showSecondCardFront);
  }

  return (
    <button
      className={`card-container ${info.isRemoved ? "removed" : ""}`}
      onClick={() => onFlip()}
      disabled={info.isRemoved}
    >
      <div className={`card ${showCardFront() ? "turn" : ""}`}>
        <div className="show-back">
          <CardBack />
        </div>
        <div className="show-front">
          <img src={info.image} alt="" />
        </div>
      </div>
    </button>
  );
};

export default Card;
