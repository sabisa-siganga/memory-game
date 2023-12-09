import React from "react";
import "./Header.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="title">Memory</h1>
      <div className="btns-container">
        <Button type="button" color="yellow">
          Restart Game
        </Button>
        <Button type="button" color="red">
          Exit Game
        </Button>
      </div>
    </div>
  );
};

export default Header;
