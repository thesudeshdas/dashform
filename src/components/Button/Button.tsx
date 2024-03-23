import { MouseEventHandler, ReactNode } from "react";
import "./Button.css";

// declare props types
type IButtonProps = {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
};

const Button = ({ onClick, label, icon }: IButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}

      {icon}
    </button>
  );
};

export default Button;
