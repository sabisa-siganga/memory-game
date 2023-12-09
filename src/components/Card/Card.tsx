import React from "react";
import "./Card.scss";
import { ReactComponent as CardBack } from "../../assets/Card_Back.svg";
import { Card as CardInfo } from "../../interfaces/card";

const Card = (props: CardInfo) => {
  const { image, color, label } = props;

  return (
    <div className="card-container">
      {/* <div className="card">
        <CardBack />
      </div> */}
      <div className="card">
        {/* <img src={CardSVG as unknown as string} alt="" /> */}
        {/* <CardSVG id={`${color} - ${label}`} title={`${color} - ${label}`} /> */}
        {image}
      </div>
    </div>
  );
};

export default Card;
