import {
  Button,
  ErrorMessage,
  Instruction,
  Question,
  SelectInput,
} from "../..";
import { LucideCheck } from "../../../assets/icons";

import "../Form.css";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

const IndustryForm = () => {
  const { formState, formDispatch } = useFormContext();

  const handleGoNext = () => {
    if (!validateIndustry()) {
      return formDispatch({
        type: "VALIDATION_ERROR",
        payload: {
          error: true,
          errorMessage: "Oops! Please make a selection",
        },
      });
    }
    return formDispatch({ type: "GO_NEXT_QUESTION", payload: {} });
  };

  const validateIndustry = () =>
    (formState?.formData?.industry ?? "")?.length > 0;

  return (
    <div className="form-container">
      <Question
        question={`What industry is your company in?*`}
        questionNumber={3}
      />

      <div className="form-content">
        <Instruction message="We will personalize your learning experience accordingly" />

        <SelectInput />

        {formState?.error ? (
          <ErrorMessage message={formState?.errorMessage} />
        ) : (
          <Button label="OK" icon={<LucideCheck />} onClick={handleGoNext} />
        )}
      </div>
    </div>
  );
};

export default IndustryForm;
