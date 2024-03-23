import "./Instruction.css";

// declare props types
type IInstructionProps = {
  message: string;
};

const Instruction = ({ message }: IInstructionProps) => {
  return <p className="instruction">{message}</p>;
};

export default Instruction;
