import React from "react";
import Actions from "../Actions";
import notepad from "../../Assets/notepad.png";
import "./contact.css";
import Alert from "../Alert";
import { RiAlertFill } from "react-icons/ri";

export default function Contact() {
  const [messageContent, setMessageContent] = React.useState({
    name: "*Untitled",
    email: "",
    message: "",
  });
  const [alert, setAlert] = React.useState(false);

  return (
    <>
      {alert && <Alert />}
      <div className="contact">
        <div className="contact__header">
          <div className="start">
            <img src={notepad} alt="" />
            <span>{messageContent.name + " - Notepad"}</span>
          </div>
          <div className="end">
            <Actions />
          </div>
        </div>
        <div className="contact__content">
          <form action="" autoComplete="off">
            <div className="form__item">
              <label htmlFor="">Name: </label>
              <input
                type="text"
                onChange={(e) => {
                  setMessageContent({
                    ...messageContent,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form__item">
              <label htmlFor="">Email: </label>
              <input
                type="email"
                autoComplete="off"
                onChange={(e) => {
                  setMessageContent({
                    ...messageContent,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form__item">
              <label htmlFor="">Message: </label>
              <input
                type="text"
                onChange={(e) => {
                  setMessageContent({
                    ...messageContent,
                    message: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form__item">
              <span
                onClick={() => {
                  if (
                    messageContent.name === "*Untitled" ||
                    messageContent.email === "" ||
                    messageContent.message === ""
                  )
                    setAlert(true);
                  else setAlert(false);
                }}
              >
                send
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
