import React, { useState, useEffect } from "react";

const JobField = (props) => {
  const [active, setActive] = useState(false);
  const ClickEvent = (event) => {
    props.setBoolean();
    
    props.click(props.id);
  };
  return (

      <div class="PreviewCard" onClick={(e) => ClickEvent(e)}>
        <div class="company" id="RowCompany">{props.data["company"]}</div>
        <div id="RowStatus">Review</div>
        <div class="update" id="RowUpdated">{props.data["update"]}</div>
      </div>

  );
};
export default JobField;
