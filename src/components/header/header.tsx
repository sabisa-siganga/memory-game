import React from "react";
import "./header.scss";
import Buttons from "../buttons/buttons";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="title">Memory</h1>
      <Buttons />
    </div>
  );
};

export default Header;
