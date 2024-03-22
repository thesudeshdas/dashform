import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <progress
      id="form_progress"
      max={100}
      value={20}
      className="progress-bar"
    ></progress>
  );
};

export default ProgressBar;
