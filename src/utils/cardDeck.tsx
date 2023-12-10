import { useState, useEffect } from "react";
import { Card } from "../interfaces/card";

import { ReactComponent as Clubs2 } from "../assets/cards/clubs2.svg";
import { ReactComponent as Clubs3 } from "../assets/cards/clubs3.svg";
import { ReactComponent as Clubs4 } from "../assets/cards/clubs4.svg";
import { ReactComponent as Clubs5 } from "../assets/cards/clubs5.svg";
import { ReactComponent as Clubs6 } from "../assets/cards/clubs6.svg";
import { ReactComponent as Clubs7 } from "../assets/cards/clubs7.svg";
import { ReactComponent as Clubs8 } from "../assets/cards/clubs8.svg";
import { ReactComponent as Clubs9 } from "../assets/cards/clubs9.svg";
import { ReactComponent as Clubs10 } from "../assets/cards/clubs10.svg";
import { ReactComponent as ClubsJ } from "../assets/cards/clubsJ.svg";
import { ReactComponent as ClubsK } from "../assets/cards/clubsK.svg";
import { ReactComponent as ClubsQ } from "../assets/cards/clubsQ.svg";

import { ReactComponent as Diamond2 } from "../assets/cards/diamond2.svg";
import { ReactComponent as Diamond3 } from "../assets/cards/diamond3.svg";
import { ReactComponent as Diamond4 } from "../assets/cards/diamond4.svg";
import { ReactComponent as Diamond5 } from "../assets/cards/diamond5.svg";
import { ReactComponent as Diamond6 } from "../assets/cards/diamond6.svg";
import { ReactComponent as Diamond7 } from "../assets/cards/diamond7.svg";
import { ReactComponent as Diamond8 } from "../assets/cards/diamond8.svg";
import { ReactComponent as Diamond9 } from "../assets/cards/diamond9.svg";
import { ReactComponent as Diamond10 } from "../assets/cards/diamond10.svg";
import { ReactComponent as DiamondJ } from "../assets/cards/diamondJ.svg";
import { ReactComponent as DiamondK } from "../assets/cards/diamondK.svg";
import { ReactComponent as DiamondQ } from "../assets/cards/diamondQ.svg";

import { ReactComponent as Spade2 } from "../assets/cards/spade2.svg";
import { ReactComponent as Spade3 } from "../assets/cards/spade3.svg";
import { ReactComponent as Spade4 } from "../assets/cards/spade4.svg";
import { ReactComponent as Spade5 } from "../assets/cards/spade5.svg";
import { ReactComponent as Spade6 } from "../assets/cards/spade6.svg";
import { ReactComponent as Spade7 } from "../assets/cards/spade7.svg";
import { ReactComponent as Spade8 } from "../assets/cards/spade8.svg";
import { ReactComponent as Spade9 } from "../assets/cards/spade9.svg";
import { ReactComponent as Spade10 } from "../assets/cards/spade10.svg";
import { ReactComponent as SpadeJ } from "../assets/cards/spadeJ.svg";
import { ReactComponent as SpadeK } from "../assets/cards/spadeK.svg";
import { ReactComponent as SpadeQ } from "../assets/cards/spadeQ.svg";

import { ReactComponent as Heart2 } from "../assets/cards/heart2.svg";
import { ReactComponent as Heart3 } from "../assets/cards/heart3.svg";
import { ReactComponent as Heart4 } from "../assets/cards/heart4.svg";
import { ReactComponent as Heart5 } from "../assets/cards/heart5.svg";
import { ReactComponent as Heart6 } from "../assets/cards/heart6.svg";
import { ReactComponent as Heart7 } from "../assets/cards/heart7.svg";
import { ReactComponent as Heart8 } from "../assets/cards/heart8.svg";
import { ReactComponent as Heart9 } from "../assets/cards/heart9.svg";
import { ReactComponent as Heart10 } from "../assets/cards/heart10.svg";
import { ReactComponent as HeartJ } from "../assets/cards/heartJ.svg";
import { ReactComponent as HeartK } from "../assets/cards/heartK.svg";
import { ReactComponent as HeartQ } from "../assets/cards/heartQ.svg";

import { ReactComponent as Joker1 } from "../assets/cards/joker1.svg";
import { ReactComponent as Joker2 } from "../assets/cards/joker2.svg";
import { shuffleDeck } from "./shuffleDeck";

type CardDeckHook = [
  Card[],
  (firstCardIndex: number, secondCardIndex: number) => void
];

// Create an array of card objects
function useCardDeck(): CardDeckHook {
  const [cardDeck, setCardDeck] = useState<Card[]>([]);

  useEffect(() => {
    const data = [
      { image: <Clubs2 />, color: "black", isRemoved: false, label: 2 },
      { image: <Clubs3 />, color: "black", isRemoved: false, label: 3 },
      { image: <Clubs4 />, color: "black", isRemoved: false, label: 4 },
      { image: <Clubs5 />, color: "black", isRemoved: false, label: 5 },
      { image: <Clubs6 />, color: "black", isRemoved: false, label: 6 },
      { image: <Clubs7 />, color: "black", isRemoved: false, label: 7 },
      { image: <Clubs8 />, color: "black", isRemoved: false, label: 8 },
      { image: <Clubs9 />, color: "black", isRemoved: false, label: 9 },
      { image: <Clubs10 />, color: "black", isRemoved: false, label: 10 },
      { image: <ClubsJ />, color: "black", isRemoved: false, label: "J" },
      { image: <ClubsQ />, color: "black", isRemoved: false, label: "Q" },
      { image: <ClubsK />, color: "black", isRemoved: false, label: "K" },

      // Diamond
      { image: <Diamond2 />, color: "red", isRemoved: false, label: 2 },
      { image: <Diamond3 />, color: "red", isRemoved: false, label: 3 },
      { image: <Diamond4 />, color: "red", isRemoved: false, label: 4 },
      { image: <Diamond5 />, color: "red", isRemoved: false, label: 5 },
      { image: <Diamond6 />, color: "red", isRemoved: false, label: 6 },
      { image: <Diamond7 />, color: "red", isRemoved: false, label: 7 },
      { image: <Diamond8 />, color: "red", isRemoved: false, label: 8 },
      { image: <Diamond9 />, color: "red", isRemoved: false, label: 9 },
      { image: <Diamond10 />, color: "red", isRemoved: false, label: 10 },
      { image: <DiamondJ />, color: "red", isRemoved: false, label: "J" },
      { image: <DiamondQ />, color: "red", isRemoved: false, label: "Q" },
      { image: <DiamondK />, color: "red", isRemoved: false, label: "K" },

      // Spades
      { image: <Spade2 />, color: "black", isRemoved: false, label: 2 },
      { image: <Spade3 />, color: "black", isRemoved: false, label: 3 },
      { image: <Spade4 />, color: "black", isRemoved: false, label: 4 },
      { image: <Spade5 />, color: "black", isRemoved: false, label: 5 },
      { image: <Spade6 />, color: "black", isRemoved: false, label: 6 },
      { image: <Spade7 />, color: "black", isRemoved: false, label: 7 },
      { image: <Spade8 />, color: "black", isRemoved: false, label: 8 },
      { image: <Spade9 />, color: "black", isRemoved: false, label: 9 },
      { image: <Spade10 />, color: "black", isRemoved: false, label: 10 },
      { image: <SpadeJ />, color: "black", isRemoved: false, label: "J" },
      { image: <SpadeQ />, color: "black", isRemoved: false, label: "Q" },
      { image: <SpadeK />, color: "black", isRemoved: false, label: "K" },

      // Hearts
      { image: <Heart2 />, color: "red", isRemoved: false, label: 2 },
      { image: <Heart3 />, color: "red", isRemoved: false, label: 3 },
      { image: <Heart4 />, color: "red", isRemoved: false, label: 4 },
      { image: <Heart5 />, color: "red", isRemoved: false, label: 5 },
      { image: <Heart6 />, color: "red", isRemoved: false, label: 6 },
      { image: <Heart7 />, color: "red", isRemoved: false, label: 7 },
      { image: <Heart8 />, color: "red", isRemoved: false, label: 8 },
      { image: <Heart9 />, color: "red", isRemoved: false, label: 9 },
      { image: <Heart10 />, color: "red", isRemoved: false, label: 10 },
      { image: <HeartJ />, color: "red", isRemoved: false, label: "J" },
      { image: <HeartQ />, color: "red", isRemoved: false, label: "Q" },
      { image: <HeartK />, color: "red", isRemoved: false, label: "K" },

      // Jokers
      { image: <Joker1 />, color: "black", isRemoved: false, label: "joker" },
      { image: <Joker2 />, color: "red", isRemoved: false, label: "joker" },
    ];

    setCardDeck(shuffleDeck(data));
  }, []);

  const removeCards = (firstCardIndex: number, secondCardIndex: number) => {
    const updateDeck = cardDeck.map((deck, index) => {
      if (firstCardIndex === index || secondCardIndex === index) {
        deck.isRemoved = true;
      }

      return deck;
    });

    setCardDeck(updateDeck);
  };

  return [cardDeck, removeCards];
}

export default useCardDeck;
