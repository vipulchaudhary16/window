import React from "react";
import { RiCloseLine } from "react-icons/ri";

export default function Alert({ message, title, icon }) {
  return (
    <div className="error-dialog">
      <div className="top-bar">
        <p>{title}</p>
        <RiCloseLine className="close-icon" />
      </div>
      <div className="alert__body">
        <div className="alert__icon">{icon}</div>
        <p>{message}</p>
      </div>
      <div className="alert-footer">
        <button>Ok</button>
      </div>
    </div>
  );
}
