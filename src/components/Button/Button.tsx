import { MouseEventHandler, ReactNode } from "react";
import "./Button.css";

// declare props types
type IButtonProps = {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  keyboardShortcut?: string;
};

const Button = ({ onClick, label, icon, keyboardShortcut }: IButtonProps) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={onClick}>
        {label}

        {icon}
      </button>

      {keyboardShortcut && (
        <label>
          press <span>{keyboardShortcut}</span>
        </label>
      )}
    </div>
  );
};

export default Button;
