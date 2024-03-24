import { IFormData } from "../types/formContext/formContext.types";

export const saveInLocal = (formData: Partial<IFormData>) => {
  localStorage.setItem("formData", JSON.stringify(formData));
};
