import { Button, Question, TextInput } from "../..";
import { LucideCheck } from "../../../assets/icons";

import "../Form.css";

const LastNameForm = () => {
  return (
    <div className="form-container">
      <Question question="and your last name, ?*" questionNumber={2} />

      <div className="form-content">
        <TextInput />

        <Button label="OK" icon={<LucideCheck />} />
      </div>
    </div>
  );
};

export default LastNameForm;
