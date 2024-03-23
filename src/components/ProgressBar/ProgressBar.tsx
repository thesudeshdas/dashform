import "./ProgressBar.css";

// declare props types
type IProgressBarProps = {
  value: number;
};

const ProgressBar = ({ value }: IProgressBarProps) => {
  return (
    <progress
      id="form_progress"
      max={100}
      value={value}
      className="progress-bar"
    ></progress>
  );
};

export default ProgressBar;
