import React, { ReactNode } from "react";
import "./Button.scss";

// Define a TypeScript interface for the Button component props
interface Props {
  children: ReactNode;
  type: "submit" | "button";
  color: "yellow" | "red" | "green" | "white" | "light-blue";
  onClick?: () => void;
  disabled?: boolean;
}

// Reusable Button component that takes Props as its parameter
const Button = (props: Props) => {
  // Destructure props to access individual props
  const { children, type, color, onClick, disabled } = props;

  // Return a button element with dynamic class and properties based on props
  return (
    <button
      className={`btn ${color}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Render the content inside the button */}
      {children}
    </button>
  );
};

export default Button;
