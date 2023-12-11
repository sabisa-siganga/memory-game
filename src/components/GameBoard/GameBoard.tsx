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

  // Custom hook to manage the card deck and removal of cards
  const [cards, removeCards] = useCardDeck();

  // State to track the current play (selected cards)
  const [currentPlay, setCurrentPlay] = useState<CurrentPlay | null>(null);

  // State to track the count of removed cards
  const [removedCardsCount, setRemovedCardsCount] = useState(0);

  // Access the dispatch function from the Redux store using the useAppDispatch hook
  const dispatch = useAppDispatch();

  // Function to check if the game is complete
  function gameComplete() {
    let count = removedCardsCount;

    // Increment the count by 2 (assuming each pair of cards is removed)
    count += 2;

    // Increment the count by 2 (assuming each pair of cards is removed)
    if (cards.length === count) {
      dispatch(endGame());

      return;
    }

    // Update the removed cards count in the state
    setRemovedCardsCount(count);
  }

  // Function to handle a successful card match
  function itsAMatch(firstIndex: number, secondIndex: number) {
    // Dispatch action indicating a card match
    dispatch(cardMatch(true));

    // Set a timeout to dispatch the action indicating the end of the card match animation
    setTimeout(() => {
      dispatch(cardMatch(false));
    }, 3000);

    // Increment the player's score
    dispatch(increment());

    // Removing cards from deck using their indexes
    console.log("remove cards: ", firstIndex, secondIndex);

    // Remove matching cards from the deck
    removeCards(firstIndex, secondIndex);

    // Check if the game is complete after removing the cards
    gameComplete();
  }

  // Function to handle a card click
  function onClick(card: CardInterface, index: number) {
    console.log("current card: ", card, index);

    // add to card to state if there is no card selected
    if (!currentPlay) {
      setCurrentPlay({
        card,
        index,
      });

      return;
    }

    // If the clicked card is the same as the previously selected card, do nothing
    if (currentPlay.index === index) {
      return;
    }

    /**
     * Compare the saved card with the incoming card info.
     * If matching, call itsAMatch action to remove matching cards from the deck.
     * Otherwise, switch players.
     */
    if (
      card.color === currentPlay.card.color &&
      card.label === currentPlay.card.label
    ) {
      itsAMatch(index, currentPlay.index);
    } else {
      dispatch(switchPlayers());
    }

    // Clear the currentPlay (selected cards) state
    setCurrentPlay(null);
  }

  // JSX structure representing the game board
  return (
    <div className="gameboard-container">
      <div className="gameboard">
        {/* PlayerCard component for Player 1 */}
        <PlayerCard
          image={<PlayerImage1 />}
          playerName={currentPlayer.player1.name}
          score={currentPlayer.player1.score}
          buttonColor="green"
          shouldPlay={currentPlayer.player1.shouldPlay}
        />

        {/* Display MatchDisplay component when cards are matching */}
        {currentPlayer.isMatching && <MatchDisplay />}

        {/* Display cards when cards are not matching */}
        {!currentPlayer.isMatching && (
          <div className="cards">
            {/* Map through the cards and render Card components */}
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

        {/* PlayerCard component for Player 2 */}
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
