import React, { ReactNode } from "react";
import "./Button.scss";

interface Props {
  children: ReactNode;
  type: "submit" | "button";
  color: "yellow" | "red" | "green" | "white" | "light-blue";
}

const Button = (props: Props) => {
  const { children, type, color } = props;
  return (
    <button className={`btn ${color}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
