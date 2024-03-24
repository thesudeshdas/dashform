import { ChangeEventHandler } from "react";
import classNames from "classnames";

import styles from "./PhoneInput.module.css";

// declare props types
type IPhoneInput = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const PhoneInput = ({ value, onChange, placeholder = "" }: IPhoneInput) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={classNames(styles.phone_input)}
    />
  );
};

export default PhoneInput;
