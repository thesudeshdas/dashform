import { Button, ErrorMessage, ListInput, Question } from "../..";

import "../Form.css";
import useFormContext from "../../../contexts/FormContext/formContext.hook";

import { useEffect, useState } from "react";
import { founderGoals, nonFounderGoals } from "../../../data/goals.data";
import { LucideCheck } from "../../../assets/icons";

const GoalsForm = () => {
  const { formState, formDispatch } = useFormContext();

  const [selectedGoals, setSelectedGoals] = useState<string[]>(
    formState.formData.goals || []
  );

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
    return formDispatch({ type: "GO_NEXT_QUESTION", payload: {} });
  };

  const validateGoals = () => (formState?.formData?.goals ?? [])?.length === 2;

  useEffect(() => {
    formDispatch({
      type: "FILL_GOALS",
      payload: { formData: { goals: selectedGoals } },
    });
  }, [formDispatch, selectedGoals]);

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
          <Button label="OK" icon={<LucideCheck />} onClick={handleGoNext} />
        )}
      </div>
    </div>
  );
};

export default GoalsForm;
