import React from "react";

const JobField = (props) => {
  const ClickEvent = (event) => {
    if(event.target.id==="DeleteX"){
      props.delete(props.id)
      console.log("Good");
    } else {
    props.setBoolean();
    props.click(props.id);}
  };
  return (
    <div
      className={
        
        props.data["status"] === "Declined"
          ? "PreviewCard declined"
          : props.data["status"] === "Job offered"
          ? "PreviewCard offered"
          : props.data["status"] ==="Applied"
          ?"PreviewCard"
          : "PreviewCard processing"
      }
      onClick={(e) => ClickEvent(e)}
    ><span id="DeleteX" >X</span>
      <div className="company" id="RowCompany">
        {props.data["company"]}
      </div>
      <div id="RowStatus">{props.data["status"]}</div>
      <div className="update" id="RowUpdated">
        {props.data["update"]}
      </div>
    </div>
  );
};
export default JobField;
