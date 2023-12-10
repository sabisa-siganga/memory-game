// scoreSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

interface PlayerNames {
  player1Name: string;
  player2Name: string;
}

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

const initialState: GameState = {
  gameState: "start",
  isMatching: false,
  player1: player,
  player2: player,
  stats: stats,
};

const gamePlaySlice = createSlice({
  name: "gamePlay",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.player1.shouldPlay) {
        state.player1.score += 1;
      } else if (state.player2.shouldPlay) {
        state.player2.score += 1;
      }
    },
    switchPlayers: (state) => {
      if (state.player1.shouldPlay) {
        state.player1.shouldPlay = false;
        state.player2.shouldPlay = true;
      } else if (state.player2.shouldPlay) {
        state.player1.shouldPlay = true;
        state.player2.shouldPlay = false;
      }
    },
    reset: (state) => {
      state.stats = stats;
      state.player1 = initialState.player1;
      state.gameState = initialState.gameState;
      state.player2 = initialState.player2;
    },
    addPlayerName: (state, action: PayloadAction<PlayerNames>) => {
      state.player1.name = action.payload.player1Name;
      state.player2.name = action.payload.player2Name;
      state.gameState = "playing";
      state.player1.shouldPlay = true;
    },
    cardMatch: (state, action: PayloadAction<boolean>) => {
      state.isMatching = action.payload;
    },
    endGame: (state) => {
      let firstPlace;
      let secondPlace;

      if (state.player1.score > state.player2.score) {
        firstPlace = state.player1;
        secondPlace = state.player2;
      } else {
        firstPlace = state.player2;
        secondPlace = state.player1;
      }

      state.stats = {
        firstPlace: {
          name: firstPlace.name,
          score: firstPlace.score,
        },
        secondPlace: {
          name: secondPlace.name,
          score: secondPlace.score,
        },
      };

      state.gameState = "end-game";
    },
    restartGame: (state) => {
      state.stats = stats;
      state.player1.shouldPlay = true;
      state.gameState = "playing";
      state.player1.score = 0;
      state.player2.shouldPlay = false;
      state.player2.score = 0;
    },
  },
});

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
