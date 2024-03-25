import { useEffect } from "react";

import useFormContext from "../../contexts/FormContext/formContext.hook";
import { saveInLocal } from "../../utils/saveInLocal";
import {
  EmailForm,
  FistNameForm,
  FormCompletion,
  GoalsForm,
  IndustryForm,
  Introduction,
  LastNameForm,
  PhoneForm,
  RoleForm,
} from "..";

import "./Content.css";

const Content = () => {
  const { formState } = useFormContext();

  const renderScreen = (activeQuestion: number) => {
    switch (activeQuestion) {
      case 0:
        return <Introduction />;

      case 1:
        return <FistNameForm />;

      case 2:
        return <LastNameForm />;

      case 3:
        return <IndustryForm />;

      case 4:
        return <RoleForm />;

      case 5:
        return <GoalsForm />;

      case 6:
        return <EmailForm />;

      case 7:
        return <PhoneForm />;

      case 8:
        return <FormCompletion />;

      default:
        return <Introduction />;
    }
  };

  useEffect(() => {
    saveInLocal(formState.formData);
  }, [formState?.formData]);

  return (
    <main className="content-wrapper">
      {renderScreen(formState?.activeQuestion)}
    </main>
  );
};

export default Content;
