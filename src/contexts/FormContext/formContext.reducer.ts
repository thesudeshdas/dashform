import {
  IFormContextState,
  IFormReducerActions,
} from "../../types/formContext/formContext.types";

const authReducer = (
  state: IFormContextState,
  action: IFormReducerActions
): IFormContextState => {
  const { type }: IFormReducerActions = action;

  switch (type) {
    case "GO_NEXT_QUESTION":
      return { ...state, activeQuestion: state.activeQuestion + 1 };

    default:
      return state;
  }
};

export default authReducer;
