import { Button, SplashScreen } from "..";
import useFormContext from "../../contexts/FormContext/formContext.hook";
import { useKeyboardNavigation, useScrollNavigation } from "../../hooks";
import "./Introduction.css";

const Introduction = () => {
  const { formState, formDispatch } = useFormContext();

  const handleStart = () => {
    formDispatch({ type: "GO_NEXT_QUESTION" });
  };

  useKeyboardNavigation({
    functionToBeExecuted: handleStart,
    keyToListen: "Enter",
  });

  useScrollNavigation({
    wheelDownFunction: handleStart,
  });

  return (
    <div className="intro-container">
      {!formState?.formLoaded && <SplashScreen />}

      <h2 className="intro-heading">Up-skilling requires time commitment</h2>
      <p className="intro-instruction">
        The GrowthX experience is designed by keeping in mind the working hours
        founders & full time operators typically work in.
      </p>

      <p className="intro-instruction">You will spend</p>

      <ul>
        <li>6 hours/week for the first 5 weeks</li>
        <li>15 hours/week for the last 3 weeks</li>
      </ul>

      <Button
        label="I agree"
        onClick={handleStart}
        keyboardShortcut="Enter ↵"
      />
    </div>
  );
};

export default Introduction;
