// Importing the configureStore function from Redux Toolkit to configure the Redux store for state management
import { configureStore } from "@reduxjs/toolkit";

// Importing the gamePlayReducer for managing the gamePlay slice of the state
import gamePlayReducer from "./gamePlay";

// Importing TypedUseSelectorHook, useDispatch, and useSelector from react-redux for TypeScript support
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Configuring the Redux store using configureStore
const store = configureStore({
  // Combining reducers, in this case, only using the gamePlayReducer
  reducer: {
    gamePlay: gamePlayReducer,
  },
});

// Defining the RootState type by extracting the state type from the store
export type RootState = ReturnType<typeof store.getState>;

// Defining the AppDispatch type by extracting the dispatch type from the store
export type AppDispatch = typeof store.dispatch;

// Creating a custom hook for useSelector with the correct type
export const useAppDispatch: () => AppDispatch = useDispatch;

// Creating a custom hook for useSelector with the correct type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
