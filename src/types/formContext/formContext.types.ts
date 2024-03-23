import { Dispatch } from "react";

export interface IFormContextState {
  activeQuestion: number;
}

export interface IFormContext {
  formState: IFormContextState;
  formDispatch: Dispatch<IFormReducerActions>;
}

export interface IFormReducerActions {
  type: "GO_NEXT_QUESTION";
  payload: Partial<IFormContextState>;
}
