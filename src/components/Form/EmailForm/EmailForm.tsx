import { ChangeEvent } from "react";
import { Button, ErrorMessage, Instruction, Question, TextInput } from "../..";
import { LucideCheck } from "../../../assets/icons";

import "../Form.css";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

import { useKeyboardNavigation, useScrollNavigation } from "../../../hooks";
import checkStringExistence from "../../../utils/checkStringExistence";
import { emailRegex } from "../../../constants/formValidation.constants";

const EmailForm = () => {
  const { formState, formDispatch } = useFormContext();

  const handleGoBack = () => formDispatch({ type: "GO_PREVIOUS_QUESTION" });

  const handleGoNext = () => {
    if (!checkStringExistence(formState.formData.email ?? "")) {
      return formDispatch({
        type: "VALIDATION_ERROR",
        payload: {
          error: true,
          errorMessage: "Please fill this in",
        },
      });
    } else if (!validateEmail()) {
      return formDispatch({
        type: "VALIDATION_ERROR",
        payload: {
          error: true,
          errorMessage: "Hmm... that email doesn't look right",
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
      type: "FILL_EMAIL",
      payload: event.target.value.trim(),
    });
  };

  const validateEmail = () =>
    (formState?.formData?.email ?? "").toLowerCase().match(emailRegex);

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
        question={`Email you'd like to register with?*`}
        questionNumber={6}
      />

      <div className="form-content">
        <Instruction message="We will keep all our communications with you through this email. Do check your spam inbox if you can't find our application received email." />

        <TextInput
          defaultValue={formState?.formData?.email}
          onChange={handleChange}
          placeholder="name@example.com"
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

export default EmailForm;
