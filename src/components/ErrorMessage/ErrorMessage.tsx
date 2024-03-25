import { BxError } from "../../assets/icons";

import "./ErrorMessage.css";

// declare props types
type IErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: IErrorMessageProps) => {
  return (
    <div className="error-container">
      <BxError />

      {message}
    </div>
  );
};

export default ErrorMessage;
