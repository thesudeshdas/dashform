import { Content, ProgressBar } from "./components";
import "./App.css";
import useFormContext from "./contexts/FormContext/formContext.hook";

function App() {
  const { formState } = useFormContext();

  return (
    <div className="app">
      <ProgressBar
        value={(formState.dataProgress / formState?.totalQuestions) * 100}
      />

      <img src="/growthX-logo.png" alt="GrowthX" className="brand-logo" />

      <Content />

      <a
        href="https://www.typeform.com/explore/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="btn btn-powered-by">
          <span> Powered by</span> <strong> Typeform</strong>
        </button>
      </a>
    </div>
  );
}

export default App;
