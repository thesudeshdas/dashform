import "./Question.css";

// declare props types
type IQuestionProps = {
  question: string;
  instruction?: string;
};

const Question = ({ question, instruction }: IQuestionProps) => {
  return (
    <div>
      <h2 className="question">{question}</h2>
      <p className="instruction">{instruction}</p>
    </div>
  );
};

export default Question;
