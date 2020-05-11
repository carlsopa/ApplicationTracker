import React from "react";

const JobField = (props) => {
  const ClickEvent = (event) => {
    props.setBoolean();
    
    props.click(props.id);
  };
  return (

      <div className={props.data["status"]==="Declined"?"PreviewCard declined":props.data["status"]!=="Applied"?"PreviewCard processing":"PreviewCard"} onClick={(e) => ClickEvent(e)}>
        <div className="company" id="RowCompany">{props.data["company"]}</div>
        <div id="RowStatus">{props.data["status"]}</div>
        <div className="update" id="RowUpdated">{props.data["update"]}</div>
      </div>

  );
};
export default JobField;
