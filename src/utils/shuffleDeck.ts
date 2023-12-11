import { Card } from "../interfaces/card";

/**
 * Shuffles the provided deck of cards using the Fisher-Yates shuffle algorithm.
 *
 * @param {Card[]} deck - The array representing the deck of cards to be shuffled.
 * @returns {Card[]} - The shuffled deck of cards.
 */
export const shuffleDeck = (deck: Card[]) => {
  const shuffledDeck = [...deck];

  // Loop through the array in reverse order
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    // Generate a random index within the remaining unshuffled portion of the array
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at the current index and the randomly chosen index
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }

  // Return the shuffled deck
  return shuffledDeck;
};
