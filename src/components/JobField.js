import React from "react";

const JobField = (props) => {
  const ClickEvent = (event) => {
    props.setBoolean();
    
    props.click(props.id);
  };
  return (

      <div className="PreviewCard" onClick={(e) => ClickEvent(e)}>
        <div className="company" id="RowCompany">{props.data["company"]}</div>
        <div id="RowStatus">{props.data["status"]}</div>
        <div className="update" id="RowUpdated">{props.data["update"]}</div>
      </div>

  );
};
export default JobField;
