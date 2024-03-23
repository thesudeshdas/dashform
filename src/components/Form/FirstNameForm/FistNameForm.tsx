import { Button, Question, TextInput } from "../..";
import { LucideArrowRight } from "../../../assets/icons";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

import "../Form.css";

const FistNameForm = () => {
  const { formDispatch } = useFormContext();

  const handleGoNext = () => {
    formDispatch({ type: "GO_NEXT_QUESTION", payload: {} });
  };

  return (
    <div className="form-container">
      <Question question="What's your first name?*" questionNumber={1} />

      <div className="form-content">
        <TextInput />

        <Button label="OK" icon={<LucideArrowRight />} onClick={handleGoNext} />
      </div>
    </div>
  );
};

export default FistNameForm;
