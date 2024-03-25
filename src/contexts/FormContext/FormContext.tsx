import { ReactNode, createContext, useReducer } from "react";
import {
  IFormContext,
  IFormContextState,
} from "../../types/formContext/formContext.types";
import authReducer from "./formContext.reducer";

const localFormData = JSON.parse(localStorage.getItem("formData") || "{}");

const initialFormContextState: IFormContextState = {
  activeQuestion: 0,
  dataProgress: 0,
  totalQuestions: 7,
  formData: {
    firstName: localFormData.firstName || "",
    lastName: localFormData.lastName || "",
    industry: localFormData.industry || "",
    role: localFormData.role || "",
    goals: localFormData.goals || [],
    email: localFormData.email || "",
    phone: localFormData.phone || "",
  },
  error: false,
  errorMessage: "",
};

export const FormContext = createContext<IFormContext>({
  formState: initialFormContextState,
  formDispatch: () => {},
});

function FormContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialFormContextState);

  return (
    <FormContext.Provider value={{ formState: state, formDispatch: dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
