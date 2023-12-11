# Memory Card Game

## Overview

This is a memory card game implemented with ReactJS, TypeScript, SASS, Bootstrap, and Redux. The game supports two players who take turns flipping cards and matching pairs. The player with the most cards or the highest score at the end wins.

## Features

- **Shuffled Card Deck**: The card deck is shuffled at the beginning of the game to ensure a random distribution of cards.

- **Turn-Based Gameplay**: Players take turns clicking on the back of the cards to reveal their fronts.

- **Card Matching**: When two cards are turned over, the game checks for a match based on number and color. If they match, the player collects the pair, and the cards are removed from the board.

- **Redux for State Management**: The game state, including scores, is managed using Redux.

- **Scoring System**: The game keeps track of each player's score based on the number of matched pairs using Redux.

- **Modal for Player Names**: The game launcher screen uses a modal to collect player names before starting the game.

## Technologies Used

- **ReactJS**: JavaScript library for building user interfaces.

- **TypeScript**: The codebase is written in TypeScript, which enhances code maintainability by providing self-documenting benefits and type annotations.

- **SASS**: I've used SASS to keep the styling of the game screens' maintainable, organized, and easy to update.

- **Bootstrap**: I utilized Bootstrap to ensure the game screens look great on various devices and screen sizes.

- **Redux**: State management library for managing application state.

  **Reusable Components**: I've created a set of reusable components to enhance code maintainability and reusability throughout the project.

## Installation

1. **Clone the repository:**

   ```bash
   https://github.com/sabisa-siganga/memory-game.git

   ```

2. **Navigate to the project directory:**
   cd memory-card-game

3. **Install dependencies:**
   npm install

4.**Start the development server:**
npm start
