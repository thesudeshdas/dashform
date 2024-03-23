import { Dispatch } from "react";

export interface IFormData {
  firstName: string;
  lastName: string;
  industry: string;
}

export interface IFormContextState {
  totalQuestions: number;
  dataProgress: number;
  activeQuestion: number;
  formData: Partial<IFormData>;
  error: boolean;
  errorMessage: string;
}

export interface IFormContext {
  formState: IFormContextState;
  formDispatch: Dispatch<IFormReducerActions>;
}

export interface IFormReducerActions {
  type:
    | "GO_NEXT_QUESTION"
    | "INCREMENT_DATA_PROGRESS"
    | "FILL_FIRST_NAME"
    | "FILL_LAST_NAME"
    | "FILL_INDUSTRY"
    | "VALIDATION_ERROR"
    | "CLEAR_ERRORS";
  payload: Partial<IFormContextState>;
}
