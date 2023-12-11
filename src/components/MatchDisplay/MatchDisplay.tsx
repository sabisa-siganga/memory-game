import React from "react";
import "./MatchDisplay.scss";
import { ReactComponent as MatchOutcome } from "../../assets/match.svg";

// MatchDisplay component for rendering the match outcome display
const MatchDisplay = () => {
  return (
    <div className="display-match">
      {/* Render the MatchOutcome component to display the match outcome */}
      <MatchOutcome />
    </div>
  );
};

export default MatchDisplay;
