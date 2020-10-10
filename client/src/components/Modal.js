import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={` ${showHideClassName}`}>
      <section className="ui container modal-main">
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
        <button className="ui button primary" onClick={handleClose}>
          close
        </button>
      </section>
    </div>
  );
};

export default Modal;
