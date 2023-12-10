import React from "react";
import "./MatchDisplay.scss";
import { ReactComponent as MatchOutcome } from "../../assets/match.svg";

const MatchDisplay = () => {
  return (
    <div className="display-match">
      <MatchOutcome />
    </div>
  );
};

export default MatchDisplay;
