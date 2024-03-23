import { ErrorMessage, Instruction, Question } from "../..";

import "../Form.css";
import useFormContext from "../../../contexts/FormContext/formContext.hook";
import ListInput from "../../Inputs/ListInput/ListInput";
import { useEffect, useState } from "react";
import { roles } from "../../../data/roles.data";

const RoleForm = () => {
  const { formState, formDispatch } = useFormContext();

  const [selectedRole, setSelectedRole] = useState<string>("");

  useEffect(() => {
    formDispatch({
      type: "FILL_ROLE",
      payload: { formData: { role: selectedRole } },
    });
  }, [formDispatch, selectedRole]);

  return (
    <div className="form-container">
      <Question question={`Your role in your company?*`} questionNumber={4} />

      <div className="form-content">
        <Instruction message="We want to understand how you spend your time right now." />

        <ListInput setSelection={setSelectedRole} options={roles} />

        {formState?.error ? (
          <ErrorMessage message={formState?.errorMessage} />
        ) : null}
      </div>
    </div>
  );
};

export default RoleForm;
