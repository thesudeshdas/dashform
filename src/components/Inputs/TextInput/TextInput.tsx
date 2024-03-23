import { ChangeEventHandler } from "react";
import "../Inputs.css";

// declare props types
type ITextInput = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput = ({ onChange }: ITextInput) => {
  return (
    <label>
      <input
        type="text"
        placeholder="Type your answer here..."
        onChange={onChange}
      />
    </label>
  );
};

export default TextInput;
