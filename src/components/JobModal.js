import React from "react";

const JobModal = (props) => {
    console.log("Modal")
    const ModalClose = (event) => {
        event.preventDefault();
        console.log(event.target["className"]);
        console.log(document.getElementsByClassName("Display modal"))
        if(event.target["className"] == "Display modal"){
            props.set(false);
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
