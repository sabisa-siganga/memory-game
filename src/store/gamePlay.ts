// scoreSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface for player names used in the addPlayerName action
export interface GameState {
  gameState: "start" | "playing" | "end-game";
  isMatching: boolean;
  player1: {
    score: number;
    name: string;
    shouldPlay: boolean;
  };
  player2: {
    score: number;
    name: string;
    shouldPlay: boolean;
  };
  stats: {
    firstPlace: {
      score: number;
      name: string;
    };
    secondPlace: {
      score: number;
      name: string;
    };
  };
}

// Interface for player names used in the addPlayerName action
interface PlayerNames {
  player1Name: string;
  player2Name: string;
}

// Initial state for the game
const player = {
  score: 0,
  name: "",
  shouldPlay: false,
};
const stats = {
  firstPlace: {
    score: 0,
    name: "",
  },
  secondPlace: {
    score: 0,
    name: "",
  },
};

// Define the initial state for the game
const initialState: GameState = {
  gameState: "start",
  isMatching: false,
  player1: player,
  player2: player,
  stats: stats,
};

// Create a slice of the Redux store for gamePlay
const gamePlaySlice = createSlice({
  name: "gamePlay",
  initialState,
  reducers: {
    // Action to increment the score based on the player's turn
    increment: (state) => {
      if (state.player1.shouldPlay) {
        // If it's player 1's turn, increment player 1's score
        state.player1.score += 1;
      } else if (state.player2.shouldPlay) {
        // If it's player 2's turn, increment player 2's score
        state.player2.score += 1;
      }
    },

    // Action to switch players' turns
    switchPlayers: (state) => {
      // If it's player 1's turn, switch to player 2
      if (state.player1.shouldPlay) {
        state.player1.shouldPlay = false;
        state.player2.shouldPlay = true;

        // If it's player 2's turn, switch to player 1
      } else if (state.player2.shouldPlay) {
        state.player1.shouldPlay = true;
        state.player2.shouldPlay = false;
      }
    },

    // Action to reset the game state
    reset: (state) => {
      // Reset game state to initial values
      state.stats = stats;
      state.player1 = initialState.player1;
      state.gameState = initialState.gameState;
      state.player2 = initialState.player2;
    },

    // Action to add player names and start the game
    addPlayerName: (state, action: PayloadAction<PlayerNames>) => {
      // Set player names, start playing, and set the initial turn to player 1
      state.player1.name = action.payload.player1Name;
      state.player2.name = action.payload.player2Name;
      state.gameState = "playing";
      state.player1.shouldPlay = true;
    },

    // Action to set the card matching status
    cardMatch: (state, action: PayloadAction<boolean>) => {
      state.isMatching = action.payload;
    },

    // Action to end the game and determine the winner
    endGame: (state) => {
      // Variables to store the first and second-place players
      let firstPlace;
      let secondPlace;

      // Determine the winner based on scores
      if (state.player1.score > state.player2.score) {
        // If player 1 has a higher score, assign player 1 as the first-place winner
        firstPlace = state.player1;
        // Assign player 2 as the second-place winner
        secondPlace = state.player2;
      } else {
        // If player 2 has an equal or higher score, assign player 2 as the first-place winner
        firstPlace = state.player2;
        // Assign player 1 as the second-place winner
        secondPlace = state.player1;
      }

      // Update the stats with the winner's information
      state.stats = {
        // Create an object for the first-place winner
        firstPlace: {
          name: firstPlace.name,
          score: firstPlace.score,
        },
        // Create an object for the second-place winner
        secondPlace: {
          name: secondPlace.name,
          score: secondPlace.score,
        },
      };

      // Set the game state to "end-game"
      state.gameState = "end-game";
    },

    // Action to restart the game
    restartGame: (state) => {
      // Reset game statistics
      state.stats = stats;

      // Initialize player 1 to play and set game state to "playing"
      state.player1.shouldPlay = true;
      state.gameState = "playing";
      state.player1.score = 0;

      // Reset player scores to 0
      state.player2.shouldPlay = false;
      state.player2.score = 0;
    },
  },
});

// exporting actions
export const {
  increment,
  reset,
  addPlayerName,
  cardMatch,
  endGame,
  switchPlayers,
  restartGame,
} = gamePlaySlice.actions;
export default gamePlaySlice.reducer;
