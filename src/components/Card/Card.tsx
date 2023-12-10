import React from "react";
import "./Card.scss";
import { ReactComponent as CardBack } from "../../assets/Card_Back.svg";
import { Card as CardInfo } from "../../interfaces/card";

interface Props {
  info: CardInfo;
  onClick: (card: CardInfo) => void;
}

const Card = (props: Props) => {
  const { onClick, info } = props;

  return (
    <button
      className={`card-container ${info.isRemoved ? "removed" : ""}`}
      onClick={() => onClick(info)}
      disabled={info.isRemoved}
    >
      {/* <div className="card">
        <CardBack />
      </div> */}
      {info.label} {info.color}
      <div className="card">
        {/* <img src={CardSVG as unknown as string} alt="" /> */}
        {/* <CardSVG id={`${color} - ${label}`} title={`${color} - ${label}`} /> */}
        {info.image}
      </div>
    </button>
  );
};

export default Card;
