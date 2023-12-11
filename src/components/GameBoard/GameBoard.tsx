import React, { useState } from "react";
import "./GameBoard.scss";
import PlayerCard from "../PlayerCard/PlayerCard";
import { ReactComponent as PlayerImage1 } from "../../assets/player1.svg";
import { ReactComponent as PlayerImage2 } from "../../assets/player2.svg";
import Card from "../Card/Card";
import { Card as CardInterface } from "../../interfaces/card";
import MatchDisplay from "../MatchDisplay/MatchDisplay";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  cardMatch,
  endGame,
  increment,
  switchPlayers,
} from "../../store/gamePlay";
import useCardDeck from "../../hooks/useCardDeck";

// Interface representing the current play state
interface CurrentPlay {
  card: CardInterface; // Information about the selected card
  index: number; // Index of the selected card in the deck
}

// GameBoard component for managing the game board state and interactions
const GameBoard = () => {
  // Retrieve the current player state from the Redux store using the useAppSelector hook
  const currentPlayer = useAppSelector((state) => state.gamePlay);

  const [cards, removeCards] = useCardDeck();
  const [currentPlay, setCurrentPlay] = useState<CurrentPlay | null>(null);
  const [removedCardsCount, setRemovedCardsCount] = useState(0);
  const dispatch = useAppDispatch();

  function gameComplete() {
    let count = removedCardsCount;

    count += 2;

    if (cards.length === count) {
      dispatch(endGame());

      return;
    }

    setRemovedCardsCount(count);
  }

  function itsAMatch(firstIndex: number, secondIndex: number) {
    dispatch(cardMatch(true));

    setTimeout(() => {
      dispatch(cardMatch(false));
    }, 3000);

    dispatch(increment());

    // Removing cards from deck using their indexes
    console.log("remove cards: ", firstIndex, secondIndex);

    removeCards(firstIndex, secondIndex);

    gameComplete();
  }

  function onClick(card: CardInterface, index: number) {
    console.log("current card: ", card, index);

    // If currentPlay is empty means should just add to state
    if (!currentPlay) {
      setCurrentPlay({
        card,
        index,
      });

      return;
    }

    if (currentPlay.index === index) {
      return;
    }

    /**
     * Should compare saved card with the incoming card info, if matching call isMatching action
     * then should remove matching cards from deck
     */
    if (
      card.color === currentPlay.card.color &&
      card.label === currentPlay.card.label
    ) {
      itsAMatch(index, currentPlay.index);
    } else {
      dispatch(switchPlayers());
    }

    setCurrentPlay(null);
  }

  return (
    <div className="gameboard-container">
      <div className="gameboard">
        <PlayerCard
          image={<PlayerImage1 />}
          playerName={currentPlayer.player1.name}
          score={currentPlayer.player1.score}
          buttonColor="green"
          shouldPlay={currentPlayer.player1.shouldPlay}
        />

        {currentPlayer.isMatching && <MatchDisplay />}
        {!currentPlayer.isMatching && (
          <div className="cards">
            {cards.map((card, index) => {
              return (
                <Card
                  key={`card-${index}`}
                  info={card}
                  onClick={(card) => onClick(card, index)}
                  showFront={currentPlay?.index === index}
                  selectedFirstChoice={
                    !!currentPlay && currentPlay?.index !== index
                  }
                />
              );
            })}
          </div>
        )}

        <PlayerCard
          image={<PlayerImage2 />}
          playerName={currentPlayer.player2.name}
          score={currentPlayer.player2.score}
          buttonColor="white"
          shouldPlay={currentPlayer.player2.shouldPlay}
        />
      </div>
    </div>
  );
};

export default GameBoard;
