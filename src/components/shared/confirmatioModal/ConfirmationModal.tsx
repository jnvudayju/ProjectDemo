import React, { useState } from "react";
import "./style.scss";
import CrossLogo from "../../../assets/icons/close-cross.svg";

const ConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`modal ${isOpen ? "is-open" : ""}`}>
      <div className="cross">
        <div className="cross-logo">
          <img src={CrossLogo} />
        </div>
      </div>
      <div className="modal-content">
        <h2>Are you sure?</h2>
        <button className="danger">Yes, Delete</button>
        <button className="primary" onClick={closeModal}>
          No, keep it
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
