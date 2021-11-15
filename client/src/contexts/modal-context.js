import React, { createContext, useState } from "react";
import _ from "lodash";
import CloseIcon from '@material-ui/icons/Close';
import {  IconButton } from "@material-ui/core";

export const ModalContext = createContext(null);

export function ModalProvider({ children }) {

  const [modal, setModal] = useState(false)
  const [modalHTML, setHTML] = useState(
    <div>
      <div style={{marginLeft: "auto", width: "fit-content"}}>
        <IconButton onClick={() => setModal(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <h3>Congratulations!</h3>
      <p>Your consultation request has been submitted</p>
      <p>Please expect an email about this within the next 7 business-days</p>
    </div>
  )

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        modalHTML
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
