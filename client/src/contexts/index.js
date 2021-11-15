import React from "react";
import _ from "lodash";

import { YouProvider } from "./you-context";
import { FormProvider } from "./form-context";
import { ModalProvider } from "./modal-context";

export { YouContext } from "./you-context";
export { FormContext } from "./form-context";
export { ModalContext } from './modal-context'

export function ContextProvider({ children }) {
  return (
    <YouProvider>
      <FormProvider>
        <ModalProvider>
        {children}
        </ModalProvider>
      </FormProvider>
    </YouProvider>
  );
}
