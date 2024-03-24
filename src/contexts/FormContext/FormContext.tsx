import { ReactNode, createContext, useReducer } from "react";
import {
  IFormContext,
  IFormContextState,
} from "../../types/formContext/formContext.types";
import authReducer from "./formContext.reducer";

const initialFormContextState: IFormContextState = {
  activeQuestion: 0,
  dataProgress: 0,
  totalQuestions: 8,
  formData: {
    firstName: "",
    lastName: "",
    industry: "",
    role: "",
    goals: [],
    email: "",
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
