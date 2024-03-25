import { ChangeEvent } from "react";
import { Button, ErrorMessage, Question, TextInput } from "../..";
import { LucideCheck } from "../../../assets/icons";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

import "../Form.css";
import useKeyboardNavigation from "../../../hooks/useKeyboardNavigation/useKeyboardNavigation.hook";

const FistNameForm = () => {
  const { formState, formDispatch } = useFormContext();

  const handleGoNext = () => {
    if (!validateFirstName()) {
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

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    formDispatch({
      type: "CLEAR_ERRORS",
      payload: {},
    });

    formDispatch({
      type: "FILL_FIRST_NAME",
      payload: { formData: { firstName: event.target.value.trim() } },
    });
  };

  const validateFirstName = () =>
    (formState?.formData?.firstName ?? "")?.length > 0;

  useKeyboardNavigation({
    functionToBeExecuted: handleGoNext,
    keyToListen: "Enter",
  });

  return (
    <div className="form-container">
      <Question question="What's your first name?*" questionNumber={1} />

      <div className="form-content">
        <TextInput
          defaultValue={formState?.formData?.firstName}
          onChange={handleFirstNameChange}
          placeholder="Type your answer here..."
        />

        {formState?.error ? (
          <ErrorMessage message={formState?.errorMessage} />
        ) : (
          <Button
            label="OK"
            icon={<LucideCheck />}
            onClick={handleGoNext}
            keyboardShortcut="Enter ↵"
          />
        )}
      </div>
    </div>
  );
};

export default FistNameForm;
