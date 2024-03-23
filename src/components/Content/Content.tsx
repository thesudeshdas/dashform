import {
  FistNameForm,
  GoalsForm,
  IndustryForm,
  LastNameForm,
  RoleForm,
} from "..";
import useFormContext from "../../contexts/FormContext/formContext.hook";
import Introduction from "../Introduction/Introduction";
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

      default:
        return <Introduction />;
    }
  };

  return (
    <main className="content-wrapper">
      {renderScreen(formState?.activeQuestion)}
    </main>
  );
};

export default Content;
