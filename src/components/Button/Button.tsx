import React, { ReactNode } from "react";
import "./Button.scss";

interface Props {
  children: ReactNode;
  type: "submit" | "button";
  color: "yellow" | "red" | "green" | "white" | "light-blue";
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: Props) => {
  const { children, type, color, onClick, disabled } = props;
  return (
    <button
      className={`btn ${color}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
