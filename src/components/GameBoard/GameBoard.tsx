import React, { useEffect, useState } from "react";
import "./GameBoard.scss";
import PlayerCard from "../PlayerCard/PlayerCard";
import { ReactComponent as PlayerImage1 } from "../../assets/player1.svg";
import { ReactComponent as PlayerImage2 } from "../../assets/player2.svg";
import Card from "../Card/Card";
import cardDeck from "../../utils/cardDeck";
import { Card as CardInterface } from "../../interfaces/card";
import { shuffleDeck } from "../../utils/shuffleDeck";
import MatchDisplay from "../MatchDisplay/MatchDisplay";

const GameBoard = () => {
  // const [cards, setCards] = useState<CardInterface[]>([]);
  const [isMatch, setIsMatch] = useState(false);
  const cards = cardDeck();

  useEffect(() => {
    console.log(cardDeck);

    // setCards(cardDeck);
  }, []);

  return (
    <div className="gameboard-container">
      <div className="gameboard">
        <PlayerCard
          image={<PlayerImage1 />}
          playerName="1"
          score={10}
          buttonColor="green"
          shouldPlay
        />
        {isMatch && <MatchDisplay />}
        {!isMatch && (
          <div className="cards">
            {cards.map((card, index) => {
              return (
                <Card
                  key={`card-${index}`}
                  image={card.image}
                  color={card.color}
                  label={card.label}
                />
              );
            })}
          </div>
        )}
        <PlayerCard
          image={<PlayerImage2 />}
          playerName="2"
          score={10}
          buttonColor="white"
          shouldPlay={false}
        />
      </div>
    </div>
  );
};

export default GameBoard;
