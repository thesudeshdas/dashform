import { LucideArrowRight } from "../../assets/icons";

import "./Question.css";

// declare props types
type IQuestionProps = {
  question: string;
  questionNumber: number;
};

const Question = ({ question, questionNumber }: IQuestionProps) => {
  return (
    <div className="question-wrapper">
      <h2 className="question-number">{questionNumber}</h2>

      <div className="question-arrow-container">
        <LucideArrowRight />
      </div>

      <h2 className="question">{question}</h2>
    </div>
  );
};

export default Question;
