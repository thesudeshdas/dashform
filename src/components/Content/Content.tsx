import { FistNameForm, LastNameForm } from "..";
import useFormContext from "../../contexts/FormContext/formContext.hook";
import Introduction from "../Introduction/Introduction";
import "./Content.css";

const Content = () => {
  const { formState } = useFormContext();

  console.log({ formState });

  const renderScreen = (activeQuestion: number) => {
    switch (activeQuestion) {
      case 0:
        return <Introduction />;

      case 1:
        return <FistNameForm />;

      case 2:
        return <LastNameForm />;

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
