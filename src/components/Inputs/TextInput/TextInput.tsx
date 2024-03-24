import { ChangeEventHandler } from "react";
import classNames from "classnames";

import styles from "./TextInput.module.css";

// declare props types
type ITextInput = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput = ({ onChange }: ITextInput) => {
  return (
    <input
      type="text"
      placeholder="Type your answer here..."
      onChange={onChange}
      className={classNames(styles.text_input)}
    />
  );
};

export default TextInput;
