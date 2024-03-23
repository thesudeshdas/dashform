import { FistNameForm, IndustryForm, LastNameForm } from "..";
import useFormContext from "../../contexts/FormContext/formContext.hook";
import RoleForm from "../Form/RoleForm/RoleForm";
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

      default:
        return <Introduction />;
    }
  };

  console.log({ formState });

  return (
    <main className="content-wrapper">
      {renderScreen(formState?.activeQuestion)}
    </main>
  );
};

export default Content;
