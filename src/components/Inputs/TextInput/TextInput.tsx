import { ChangeEventHandler } from "react";
import classNames from "classnames";

import styles from "./TextInput.module.css";

// declare props types
type ITextInput = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const TextInput = ({ onChange, placeholder = "" }: ITextInput) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className={classNames(styles.text_input)}
    />
  );
};

export default TextInput;
