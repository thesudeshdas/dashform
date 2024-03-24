import { ChangeEvent, useState } from "react";
import { Button, ErrorMessage, Instruction, PhoneInput, Question } from "../..";

import "../Form.css";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

const PhoneForm = () => {
  const { formState, formDispatch } = useFormContext();

  const [phone, setPhone] = useState<string>(formState.formData.phone || "");

  const handleGoNext = () => {
    if (formState?.formData?.phone?.length === 0) {
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
    return formDispatch({ type: "GO_NEXT_QUESTION", payload: {} });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (/^\d+$/.test(event.target.value) === false) {
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
      payload: {},
    });

    setPhone(event.target.value);

    formDispatch({
      type: "FILL_PHONE",
      payload: { formData: { phone: event.target.value.trim() } },
    });
  };

  const validatePhone = () => (formState?.formData?.phone ?? "")?.length > 0;

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
          <Button label="Submit" onClick={handleGoNext} />
        )}
      </div>
    </div>
  );
};

export default PhoneForm;
