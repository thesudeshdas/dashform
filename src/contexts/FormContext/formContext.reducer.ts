import {
  IFormContextState,
  IFormReducerActions,
} from "../../types/formContext/formContext.types";

const authReducer = (
  state: IFormContextState,
  action: IFormReducerActions
): IFormContextState => {
  const { payload, type }: IFormReducerActions = action;

  switch (type) {
    case "GO_NEXT_QUESTION":
      return { ...state, activeQuestion: state.activeQuestion + 1 };

    case "FILL_FIRST_NAME":
      return {
        ...state,
        formData: {
          ...state.formData,
          firstName: payload?.formData?.firstName,
        },
        dataProgress:
          payload?.formData?.firstName &&
          payload?.formData?.firstName?.length > 0
            ? 1
            : 0,
      };

    case "FILL_LAST_NAME":
      return {
        ...state,
        formData: {
          ...state.formData,
          lastName: payload?.formData?.lastName,
        },
        dataProgress:
          payload?.formData?.lastName && payload?.formData?.lastName?.length > 0
            ? 2
            : 1,
      };

    case "FILL_INDUSTRY":
      return {
        ...state,
        formData: {
          ...state.formData,
          industry: payload?.formData?.industry,
        },
        dataProgress:
          payload?.formData?.industry && payload?.formData?.industry?.length > 0
            ? 3
            : 2,
      };

    case "FILL_ROLE":
      return {
        ...state,
        formData: {
          ...state.formData,
          role: payload?.formData?.role,
        },
        dataProgress:
          payload?.formData?.role && payload?.formData?.role?.length > 0
            ? 4
            : 3,
      };

    case "FILL_GOALS":
      return {
        ...state,
        formData: {
          ...state.formData,
          goals: payload?.formData?.goals,
        },
        dataProgress:
          payload?.formData?.goals && payload?.formData?.goals?.length > 0
            ? 5
            : 4,
      };

    case "FILL_EMAIL":
      return {
        ...state,
        formData: {
          ...state.formData,
          email: payload?.formData?.email,
        },
        dataProgress:
          payload?.formData?.email && payload?.formData?.email?.length > 0
            ? 6
            : 5,
      };

    case "FILL_PHONE":
      return {
        ...state,
        formData: {
          ...state.formData,
          phone: payload?.formData?.phone,
        },
        dataProgress:
          payload?.formData?.phone && payload?.formData?.phone?.length > 0
            ? 7
            : 6,
      };

    case "VALIDATION_ERROR":
      return {
        ...state,
        error: payload?.error || true,
        errorMessage: payload?.errorMessage || "Validation Error",
      };

    case "CLEAR_ERRORS":
      return { ...state, error: false, errorMessage: "" };

    default:
      return state;
  }
};

export default authReducer;
