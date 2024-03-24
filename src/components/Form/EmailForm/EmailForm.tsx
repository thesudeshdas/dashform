import { ChangeEvent } from "react";
import { Button, ErrorMessage, Instruction, Question, TextInput } from "../..";
import { LucideCheck } from "../../../assets/icons";

import "../Form.css";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

const EmailForm = () => {
  const { formState, formDispatch } = useFormContext();

  const handleGoNext = () => {
    if (formState?.formData?.email?.length === 0) {
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
    return formDispatch({ type: "GO_NEXT_QUESTION", payload: {} });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    formDispatch({
      type: "CLEAR_ERRORS",
      payload: {},
    });

    formDispatch({
      type: "FILL_EMAIL",
      payload: { formData: { email: event.target.value.trim() } },
    });
  };

  const validateEmail = () =>
    (formState?.formData?.email ?? "")?.length > 0 &&
    (formState?.formData?.email ?? "")
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

  return (
    <div className="form-container">
      <Question
        question={`Email you'd like to register with?*`}
        questionNumber={6}
      />

      <div className="form-content">
        <Instruction message="We will keep all our communications with you through this email. Do check your spam inbox if you can't find our application received email." />

        <TextInput onChange={handleChange} placeholder="name@example.com" />

        {formState?.error ? (
          <ErrorMessage message={formState?.errorMessage} />
        ) : (
          <Button label="OK" icon={<LucideCheck />} onClick={handleGoNext} />
        )}
      </div>
    </div>
  );
};

export default EmailForm;
