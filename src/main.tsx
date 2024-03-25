import React from "react";
import ReactDOM from "react-dom/client";

import FormContextProvider from "./contexts/FormContext/FormContext.tsx";
import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </React.StrictMode>
);
