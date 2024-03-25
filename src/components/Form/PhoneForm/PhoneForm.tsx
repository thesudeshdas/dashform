import { ChangeEvent, useState } from "react";
import { Button, ErrorMessage, Instruction, PhoneInput, Question } from "../..";

import "../Form.css";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

import { useKeyboardNavigation, useScrollNavigation } from "../../../hooks";
import { phoneRegex } from "../../../constants/formValidation.constants";
import checkStringExistence from "../../../utils/checkStringExistence";

const PhoneForm = () => {
  const { formState, formDispatch } = useFormContext();

  const [phone, setPhone] = useState<string>(formState.formData.phone || "");

  const handleGoBack = () => formDispatch({ type: "GO_PREVIOUS_QUESTION" });

  const handleGoNext = () => {
    if (!checkStringExistence(formState.formData.phone ?? "")) {
      return formDispatch({
        type: "VALIDATION_ERROR",
        payload: {
          error: true,
          errorMessage: "Please fill this in",
        },
      });
    } else if (!validatePhone()) {
      return formDispatch({
        type: "VALIDATION_ERROR",
        payload: {
          error: true,
          errorMessage: "Hmm... that phone number doesn't look right",
        },
      });
    }

    formDispatch({ type: "GO_NEXT_QUESTION" });

    return formDispatch({ type: "RESET_FORM" });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (phoneRegex.test(event.target.value) === false) {
      return formDispatch({
        type: "VALIDATION_ERROR",
        payload: {
          error: true,
          errorMessage: "Numbers only please",
        },
      });
    }

    formDispatch({
      type: "CLEAR_ERRORS",
    });

    setPhone(event.target.value);

    formDispatch({
      type: "FILL_PHONE",
      payload: event.target.value.trim(),
    });
  };

  const validatePhone = () =>
    (formState?.formData?.phone ?? "")?.length > 4 &&
    (formState?.formData?.phone ?? "")?.length < 15;

  useKeyboardNavigation({
    functionToBeExecuted: handleGoNext,
    keyToListen: "Enter",
    useControl: true,
  });

  useScrollNavigation({
    wheelDownFunction: handleGoNext,
    wheelUpFunction: handleGoBack,
  });

  return (
    <div className="form-container">
      <Question question={`Your phone number.*`} questionNumber={7} />

      <div className="form-content">
        <Instruction message="We won't call you unless it is absolutely required to process your application." />

        <PhoneInput
          value={phone}
          onChange={handleChange}
          placeholder="08123456789"
        />

        {formState?.error ? (
          <ErrorMessage message={formState?.errorMessage} />
        ) : (
          <Button
            label="Submit"
            onClick={handleGoNext}
            keyboardShortcut="Ctrl + Enter ↵"
          />
        )}
      </div>
    </div>
  );
};

export default PhoneForm;
