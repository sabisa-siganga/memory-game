import { useState, useEffect } from "react";
import { Card } from "../interfaces/card";

// Importing card images for each suit and value
import Clubs2 from "../assets/cards/clubs2.svg";
import Clubs3 from "../assets/cards/clubs3.svg";
import Clubs4 from "../assets/cards/clubs4.svg";
import Clubs5 from "../assets/cards/clubs5.svg";
import Clubs6 from "../assets/cards/clubs6.svg";
import Clubs7 from "../assets/cards/clubs7.svg";
import Clubs8 from "../assets/cards/clubs8.svg";
import Clubs9 from "../assets/cards/clubs9.svg";
import Clubs10 from "../assets/cards/clubs10.svg";
import ClubsJ from "../assets/cards/clubsJ.svg";
import ClubsK from "../assets/cards/clubsK.svg";
import ClubsQ from "../assets/cards/clubsQ.svg";

import Diamond2 from "../assets/cards/diamond2.svg";
import Diamond3 from "../assets/cards/diamond3.svg";
import Diamond4 from "../assets/cards/diamond4.svg";
import Diamond5 from "../assets/cards/diamond5.svg";
import Diamond6 from "../assets/cards/diamond6.svg";
import Diamond7 from "../assets/cards/diamond7.svg";
import Diamond8 from "../assets/cards/diamond8.svg";
import Diamond9 from "../assets/cards/diamond9.svg";
import Diamond10 from "../assets/cards/diamond10.svg";
import DiamondJ from "../assets/cards/diamondJ.svg";
import DiamondK from "../assets/cards/diamondK.svg";
import DiamondQ from "../assets/cards/diamondQ.svg";

import Spade2 from "../assets/cards/spade2.svg";
import Spade3 from "../assets/cards/spade3.svg";
import Spade4 from "../assets/cards/spade4.svg";
import Spade5 from "../assets/cards/spade5.svg";
import Spade6 from "../assets/cards/spade6.svg";
import Spade7 from "../assets/cards/spade7.svg";
import Spade8 from "../assets/cards/spade8.svg";
import Spade9 from "../assets/cards/spade9.svg";
import Spade10 from "../assets/cards/spade10.svg";
import SpadeJ from "../assets/cards/spadeJ.svg";
import SpadeK from "../assets/cards/spadeK.svg";
import SpadeQ from "../assets/cards/spadeQ.svg";

import Heart2 from "../assets/cards/heart2.svg";
import Heart3 from "../assets/cards/heart3.svg";
import Heart4 from "../assets/cards/heart4.svg";
import Heart5 from "../assets/cards/heart5.svg";
import Heart6 from "../assets/cards/heart6.svg";
import Heart7 from "../assets/cards/heart7.svg";
import Heart8 from "../assets/cards/heart8.svg";
import Heart9 from "../assets/cards/heart9.svg";
import Heart10 from "../assets/cards/heart10.svg";
import HeartJ from "../assets/cards/heartJ.svg";
import HeartK from "../assets/cards/heartK.svg";
import HeartQ from "../assets/cards/heartQ.svg";

import Joker1 from "../assets/cards/joker1.svg";
import Joker2 from "../assets/cards/joker2.svg";
import { shuffleDeck } from "../utils/shuffleDeck";

/**
 * useCardDeck is a custom React hook for managing a card deck in a game.
 * It initializes the card deck by shuffling the provided data on mount.
 * The hook returns the current card deck state and a function to mark cards as removed.
 *
 * @param {Array} data - The initial data representing the cards.
 * @returns {Array} - A tuple containing the current card deck state and a function to remove cards.
 */
type CardDeckHook = [
  Card[],
  (firstCardIndex: number, secondCardIndex: number) => void
];

// Create an array of card objects
function useCardDeck(): CardDeckHook {
  // State to hold the card deck
  const [cardDeck, setCardDeck] = useState<Card[]>([]);

  // Shuffle the initial card deck data when the component mounts
  useEffect(() => {
    const data = [
      { image: Clubs2, color: "black", isRemoved: false, label: 2 },
      { image: Clubs3, color: "black", isRemoved: false, label: 3 },
      { image: Clubs4, color: "black", isRemoved: false, label: 4 },
      { image: Clubs5, color: "black", isRemoved: false, label: 5 },
      { image: Clubs6, color: "black", isRemoved: false, label: 6 },
      { image: Clubs7, color: "black", isRemoved: false, label: 7 },
      { image: Clubs8, color: "black", isRemoved: false, label: 8 },
      { image: Clubs9, color: "black", isRemoved: false, label: 9 },
      { image: Clubs10, color: "black", isRemoved: false, label: 10 },
      { image: ClubsJ, color: "black", isRemoved: false, label: "J" },
      { image: ClubsQ, color: "black", isRemoved: false, label: "Q" },
      { image: ClubsK, color: "black", isRemoved: false, label: "K" },

      // Diamond
      { image: Diamond2, color: "red", isRemoved: false, label: 2 },
      { image: Diamond3, color: "red", isRemoved: false, label: 3 },
      { image: Diamond4, color: "red", isRemoved: false, label: 4 },
      { image: Diamond5, color: "red", isRemoved: false, label: 5 },
      { image: Diamond6, color: "red", isRemoved: false, label: 6 },
      { image: Diamond7, color: "red", isRemoved: false, label: 7 },
      { image: Diamond8, color: "red", isRemoved: false, label: 8 },
      { image: Diamond9, color: "red", isRemoved: false, label: 9 },
      { image: Diamond10, color: "red", isRemoved: false, label: 10 },
      { image: DiamondJ, color: "red", isRemoved: false, label: "J" },
      { image: DiamondQ, color: "red", isRemoved: false, label: "Q" },
      { image: DiamondK, color: "red", isRemoved: false, label: "K" },

      // Spades
      { image: Spade2, color: "black", isRemoved: false, label: 2 },
      { image: Spade3, color: "black", isRemoved: false, label: 3 },
      { image: Spade4, color: "black", isRemoved: false, label: 4 },
      { image: Spade5, color: "black", isRemoved: false, label: 5 },
      { image: Spade6, color: "black", isRemoved: false, label: 6 },
      { image: Spade7, color: "black", isRemoved: false, label: 7 },
      { image: Spade8, color: "black", isRemoved: false, label: 8 },
      { image: Spade9, color: "black", isRemoved: false, label: 9 },
      { image: Spade10, color: "black", isRemoved: false, label: 10 },
      { image: SpadeJ, color: "black", isRemoved: false, label: "J" },
      { image: SpadeQ, color: "black", isRemoved: false, label: "Q" },
      { image: SpadeK, color: "black", isRemoved: false, label: "K" },

      // Hearts
      { image: Heart2, color: "red", isRemoved: false, label: 2 },
      { image: Heart3, color: "red", isRemoved: false, label: 3 },
      { image: Heart4, color: "red", isRemoved: false, label: 4 },
      { image: Heart5, color: "red", isRemoved: false, label: 5 },
      { image: Heart6, color: "red", isRemoved: false, label: 6 },
      { image: Heart7, color: "red", isRemoved: false, label: 7 },
      { image: Heart8, color: "red", isRemoved: false, label: 8 },
      { image: Heart9, color: "red", isRemoved: false, label: 9 },
      { image: Heart10, color: "red", isRemoved: false, label: 10 },
      { image: HeartJ, color: "red", isRemoved: false, label: "J" },
      { image: HeartQ, color: "red", isRemoved: false, label: "Q" },
      { image: HeartK, color: "red", isRemoved: false, label: "K" },

      // Jokers
      { image: Joker1, color: "black", isRemoved: false, label: "joker" },
      { image: Joker2, color: "red", isRemoved: false, label: "joker" },
    ];

    // set the shuffled deck as the state for cardDeck.
    setCardDeck(shuffleDeck(data));
  }, []);

  // Function to remove cards from the deck based on their index.
  const removeCards = (firstCardIndex: number, secondCardIndex: number) => {
    // Create a new deck by mapping over the current deck.
    const updateDeck = cardDeck.map((deck, index) => {
      // If the index matches either of the selected cards, mark it as removed.
      if (firstCardIndex === index || secondCardIndex === index) {
        deck.isRemoved = true;
      }

      return deck;
    });

    // Update the cardDeck state with the modified deck that has removed cards.
    setCardDeck(updateDeck);
  };

  // Return the current card deck state and the function to remove cards
  // as a tuple for use in the component.
  return [cardDeck, removeCards];
}

export default useCardDeck;
