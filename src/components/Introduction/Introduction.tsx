import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="intro-container">
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

      <button className="btn">I agree</button>
    </div>
  );
};

export default Introduction;
