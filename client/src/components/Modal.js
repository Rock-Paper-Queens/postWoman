import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return createPortal(
    <div className={`${showHideClassName}`} onClick={handleClose}>
      <section
        className="ui container modal-main"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Settings</h3>
        <div className="field">
          <label>User Name</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" tabIndex="0" className="hidden" />
            <label>Dark Mode</label>
          </div>
        </div>
        <button className="ui button red" onClick={handleClose}>
          Close
        </button>
        <button className="ui button primary" onClick={handleClose}>
          Submit
        </button>
      </section>
    </div>,
    document.querySelector("#setting")
  );
};

export default Modal;
