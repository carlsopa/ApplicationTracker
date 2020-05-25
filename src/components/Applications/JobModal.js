import React from "react";

const JobModal = (props) => {
  const ModalClose = (event) => {
    event.preventDefault();
    if (event.target["className"] === "Display modal") {
      props.set(false);
      props.reset(null);
    }
  };
  return (
    <div
      className={props.modal ? "Display modal" : "modal"}
      onClick={(e) => ModalClose(e)}
    >
      <div className="modal-content">{props.children}</div>
    </div>
  );
};
export default JobModal;
