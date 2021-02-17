import React from "react";
import _ from "lodash";

import { YouProvider } from "./you-context";
import { FormProvider } from "./form-context";

export { YouContext } from "./you-context";
export { FormContext } from "./form-context";

export function ContextProvider({ children }) {
  return (
    <YouProvider>
      <FormProvider>{children}</FormProvider>
    </YouProvider>
  );
}
