import React, { useContext } from "react";
import "./styles.css";
import { ModalContext } from "../../contexts";

const ModalBody = () => {
  let { modalHTML } = useContext(ModalContext);
  return <div className="modal-container color-primary">{modalHTML}</div>;
};

export default ModalBody;
