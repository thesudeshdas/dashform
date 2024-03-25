import { Dispatch } from "react";

export interface IFormData {
  firstName: string;
  lastName: string;
  industry: string;
  role: string;
  goals: string[];
  email: string;
  phone: string;
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

export interface IGoNextQuestionAction {
  type: "GO_NEXT_QUESTION";
  payload?: null;
}

export interface IGoPreviousQuestionAction {
  type: "GO_PREVIOUS_QUESTION";
  payload?: null;
}

export interface IValidationErrorAction {
  type: "VALIDATION_ERROR";
  payload: {
    error: boolean;
    errorMessage: string;
  };
}

export interface IClearErrorsAction {
  type: "CLEAR_ERRORS";
  payload?: null;
}

export interface IResetFormAction {
  type: "RESET_FORM";
  payload?: null;
}

export interface IStringFieldAction {
  type:
    | "FILL_FIRST_NAME"
    | "FILL_LAST_NAME"
    | "FILL_INDUSTRY"
    | "FILL_ROLE"
    | "FILL_EMAIL"
    | "FILL_PHONE";
  payload: string;
}

export interface IStringArrayFieldAction {
  type: "FILL_GOALS";
  payload: string[];
}

export type IFormReducerActions =
  | IGoNextQuestionAction
  | IGoPreviousQuestionAction
  | IValidationErrorAction
  | IClearErrorsAction
  | IResetFormAction
  | IStringFieldAction
  | IStringArrayFieldAction;
