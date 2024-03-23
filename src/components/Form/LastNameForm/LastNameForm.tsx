import { ChangeEvent } from "react";
import { Button, ErrorMessage, Question, TextInput } from "../..";
import { LucideCheck } from "../../../assets/icons";

import "../Form.css";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

const LastNameForm = () => {
  const { formState, formDispatch } = useFormContext();

  const handleGoNext = () => {
    if (!validateLastName()) {
      return formDispatch({
        type: "VALIDATION_ERROR",
        payload: {
          error: true,
          errorMessage: "Please fill this in",
        },
      });
    }
    return formDispatch({ type: "GO_NEXT_QUESTION", payload: {} });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    formDispatch({
      type: "CLEAR_ERRORS",
      payload: {},
    });

    formDispatch({
      type: "FILL_LAST_NAME",
      payload: { formData: { lastName: event.target.value.trim() } },
    });
  };

  const validateLastName = () =>
    (formState?.formData?.lastName ?? "")?.length > 0;

  return (
    <div className="form-container">
      <Question
        question={`and your last name, ${formState?.formData?.firstName}?*`}
        questionNumber={2}
      />

      <div className="form-content">
        <TextInput onChange={handleChange} />

        {formState?.error ? (
          <ErrorMessage message={formState?.errorMessage} />
        ) : (
          <Button label="OK" icon={<LucideCheck />} onClick={handleGoNext} />
        )}
      </div>
    </div>
  );
};

export default LastNameForm;
