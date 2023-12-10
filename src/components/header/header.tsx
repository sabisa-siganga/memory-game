import React from "react";
import "./Header.scss";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { reset, restartGame } from "../../store/gamePlay";

const Header = () => {
  const isGameOn = useAppSelector((state) => state.gamePlay.gameState);
  const dispatch = useAppDispatch();
  return (
    <div className="header-container">
      <h1 className="title">Memory</h1>
      <div className="btns-container">
        {isGameOn === "playing" && (
          <Button
            type="button"
            color="yellow"
            onClick={() => {
              dispatch(restartGame());
            }}
          >
            Restart Game
          </Button>
        )}

        <Button
          type="button"
          color="red"
          onClick={() => {
            dispatch(reset());
          }}
          disabled={isGameOn === "start"}
        >
          Exit Game
        </Button>
      </div>
    </div>
  );
};

export default Header;
