import { Button, ErrorMessage, Instruction, ListInput, Question } from "../..";

import "../Form.css";
import useFormContext from "../../../contexts/FormContext/formContext.hook";
import { useEffect, useState } from "react";
import { roles } from "../../../data/roles.data";
import { LucideCheck } from "../../../assets/icons";
import useKeyboardNavigation from "../../../hooks/useKeyboardNavigation/useKeyboardNavigation.hook";

const RoleForm = () => {
  const { formState, formDispatch } = useFormContext();

  const [selectedRole, setSelectedRole] = useState<string>(
    formState.formData.role || ""
  );

  const handleGoNext = () => {
    if (!validateRole()) {
      return formDispatch({
        type: "VALIDATION_ERROR",
        payload: {
          error: true,
          errorMessage: "Oops! Please make a selection",
        },
      });
    }
    return formDispatch({ type: "GO_NEXT_QUESTION", payload: {} });
  };

  const validateRole = () => (formState?.formData?.role ?? "")?.length > 0;

  const handleRoleSelection = () => {
    setTimeout(() => {
      formDispatch({
        type: "GO_NEXT_QUESTION",
        payload: {},
      });
    }, 300);
  };

  useEffect(() => {
    formDispatch({
      type: "FILL_ROLE",
      payload: { formData: { role: selectedRole } },
    });
  }, [formDispatch, selectedRole]);

  useKeyboardNavigation({
    functionToBeExecuted: handleGoNext,
    keyToListen: "Enter",
  });

  return (
    <div className="form-container">
      <Question question={`Your role in your company?*`} questionNumber={4} />

      <div className="form-content">
        <Instruction message="We want to understand how you spend your time right now." />

        <ListInput
          defaultValue={[selectedRole]}
          setSelection={setSelectedRole}
          onSelection={handleRoleSelection}
          options={roles}
        />

        {formState?.error ? (
          <ErrorMessage message={formState?.errorMessage} />
        ) : (formState.formData.role ?? "").length > 0 ? (
          <Button
            label="OK"
            icon={<LucideCheck />}
            onClick={handleGoNext}
            keyboardShortcut="Enter ↵"
          />
        ) : null}
      </div>
    </div>
  );
};

export default RoleForm;
