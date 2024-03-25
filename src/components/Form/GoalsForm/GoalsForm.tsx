import { Button, ErrorMessage, ListInput, Question } from "../..";

import "../Form.css";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

import { useEffect, useState } from "react";
import { founderGoals, nonFounderGoals } from "../../../data/goals.data";
import { LucideCheck } from "../../../assets/icons";
import { useKeyboardNavigation, useScrollNavigation } from "../../../hooks";

const GoalsForm = () => {
  const { formState, formDispatch } = useFormContext();

  const [selectedGoals, setSelectedGoals] = useState<string[]>(
    formState.formData.goals || []
  );

  const handleGoBack = () => formDispatch({ type: "GO_PREVIOUS_QUESTION" });

  const handleGoNext = () => {
    if (!validateGoals()) {
      return formDispatch({
        type: "VALIDATION_ERROR",
        payload: {
          error: true,
          errorMessage:
            (formState?.formData?.goals ?? [])?.length === 0
              ? "Oops! Please make a selection"
              : "Please select more choices",
        },
      });
    }
    return formDispatch({ type: "GO_NEXT_QUESTION" });
  };

  const validateGoals = () => (formState?.formData?.goals ?? [])?.length === 2;

  useEffect(() => {
    formDispatch({
      type: "FILL_GOALS",
      payload: selectedGoals,
    });
  }, [formDispatch, selectedGoals]);

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
        question={`${formState?.formData?.firstName}, what's your professional goal for the next 12 months?*`}
        questionNumber={4}
      />

      <div className="form-content">
        <ListInput
          setSelection={setSelectedGoals}
          options={
            formState?.formData?.role === "Founder or CXO"
              ? founderGoals
              : nonFounderGoals
          }
          multiSelection
          maxSelections={2}
          defaultValue={selectedGoals}
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

export default GoalsForm;
