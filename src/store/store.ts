// importing the configureStore from reduxjs toolkit to configure the store in order to store the state
import { configureStore } from "@reduxjs/toolkit";
import gamePlayReducer from "./gamePlay";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    gamePlay: gamePlayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
