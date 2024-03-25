import { ChangeEvent } from "react";

import { LucideCheck } from "../../../assets/icons";
import useFormContext from "../../../contexts/FormContext/formContext.hook";
import { useKeyboardNavigation, useScrollNavigation } from "../../../hooks";
import checkStringExistence from "../../../utils/checkStringExistence";
import { Button, ErrorMessage, Question, TextInput } from "../..";

import "../Form.css";

const LastNameForm = () => {
  const { formState, formDispatch } = useFormContext();

  const handleGoBack = () => formDispatch({ type: "GO_PREVIOUS_QUESTION" });

  const handleGoNext = () => {
    if (!checkStringExistence(formState.formData.lastName ?? "")) {
      return formDispatch({
        type: "VALIDATION_ERROR",
        payload: {
          error: true,
          errorMessage: "Please fill this in",
        },
      });
    }
    return formDispatch({ type: "GO_NEXT_QUESTION" });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    formDispatch({
      type: "CLEAR_ERRORS",
    });

    formDispatch({
      type: "FILL_LAST_NAME",
      payload: event.target.value.trim(),
    });
  };

  useKeyboardNavigation({
    functionToBeExecuted: handleGoNext,
    keyToListen: "Enter",
  });

  useScrollNavigation({
    wheelDownFunction: handleGoNext,
    wheelUpFunction: handleGoBack,
  });

  return (
    <div className="form-container">
      <Question
        question={`and your last name, ${formState?.formData?.firstName}?*`}
        questionNumber={2}
      />

      <div className="form-content">
        <TextInput
          defaultValue={formState?.formData?.lastName}
          onChange={handleChange}
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

export default LastNameForm;
