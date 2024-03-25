import {
  IFormContextState,
  IFormReducerActions,
} from "../../types/formContext/formContext.types";

const authReducer = (
  state: IFormContextState,
  { payload, type }: IFormReducerActions
): IFormContextState => {
  switch (type) {
    case "GO_NEXT_QUESTION":
      return { ...state, activeQuestion: state.activeQuestion + 1 };

    case "VALIDATION_ERROR":
      return {
        ...state,
        error: payload.error,
        errorMessage: payload.errorMessage,
      };

    case "CLEAR_ERRORS":
      return { ...state, error: false, errorMessage: "" };

    case "RESET_FORM":
      return {
        activeQuestion: 8,
        dataProgress: 7,
        totalQuestions: 7,
        formData: {
          firstName: "",
          lastName: "",
          industry: "",
          role: "",
          goals: [],
          email: "",
          phone: "",
        },
        error: false,
        errorMessage: "",
      };

    case "FILL_FIRST_NAME":
      return {
        ...state,
        formData: {
          ...state.formData,
          firstName: payload,
        },
        dataProgress: payload.length > 0 ? 1 : 0,
      };

    case "FILL_LAST_NAME":
      return {
        ...state,
        formData: {
          ...state.formData,
          lastName: payload,
        },
        dataProgress: payload.length > 0 ? 2 : 1,
      };

    case "FILL_INDUSTRY":
      return {
        ...state,
        formData: {
          ...state.formData,
          industry: payload,
        },
        dataProgress: payload.length > 0 ? 3 : 2,
      };

    case "FILL_ROLE":
      return {
        ...state,
        formData: {
          ...state.formData,
          role: payload,
        },
        dataProgress: payload.length > 0 ? 4 : 3,
      };

    case "FILL_GOALS":
      return {
        ...state,
        formData: {
          ...state.formData,
          goals: payload,
        },
        dataProgress: payload.length > 0 ? 5 : 4,
      };

    case "FILL_EMAIL":
      return {
        ...state,
        formData: {
          ...state.formData,
          email: payload,
        },
        dataProgress: payload.length > 0 ? 6 : 5,
      };

    case "FILL_PHONE":
      return {
        ...state,
        formData: {
          ...state.formData,
          phone: payload,
        },
        dataProgress: payload.length > 0 ? 7 : 6,
      };

    default:
      return state;
  }
};

export default authReducer;
