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
import { industries } from "../../../data/industries.data";
import { useEffect, useState } from "react";
import useKeyboardNavigation from "../../../hooks/useKeyboardNavigation/useKeyboardNavigation.hook";

const IndustryForm = () => {
  const { formState, formDispatch } = useFormContext();

  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    formState.formData.industry || ""
  );

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
    return formDispatch({ type: "GO_NEXT_QUESTION" });
  };

  const validateIndustry = () =>
    (formState?.formData?.industry ?? "")?.length > 0;

  const handleIndustrySelection = () => {
    setTimeout(() => {
      formDispatch({
        type: "GO_NEXT_QUESTION",
      });
    }, 300);
  };

  useEffect(() => {
    formDispatch({
      type: "FILL_INDUSTRY",
      payload: selectedIndustry,
    });
  }, [formDispatch, selectedIndustry, setSelectedIndustry]);

  useKeyboardNavigation({
    functionToBeExecuted: handleGoNext,
    keyToListen: "Enter",
  });

  return (
    <div className="form-container">
      <Question
        question={`What industry is your company in?*`}
        questionNumber={3}
      />

      <div className="form-content">
        <Instruction message="We will personalize your learning experience accordingly" />

        <SelectInput
          onSelection={handleIndustrySelection}
          defaultValue={selectedIndustry}
          setSelection={setSelectedIndustry}
          options={industries}
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

export default IndustryForm;
