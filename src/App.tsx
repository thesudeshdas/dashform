import { Content, ProgressBar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ProgressBar />

      <img src="/growthX-logo.png" alt="GrowthX" className="brand-logo" />

      <Content />

      <a
        href="https://www.typeform.com/explore/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="btn btn-powered-by">
          Powered by <strong> Typeform</strong>
        </button>
      </a>
    </div>
  );
}

export default App;
