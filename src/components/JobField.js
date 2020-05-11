import React, { useState, useEffect } from "react";

const JobField = (props) => {
  const [active, setActive] = useState(false);
  const ClickEvent = (event) => {
    props.setBoolean();
    setActive(true);
    props.click(props.id);
  };
  return (
    <div
      className={active ? "Active PreviewCard" : "PreviewCard"}
      onClick={(e) => ClickEvent(e)}
    >
      <div id="PreviewCardData">
        <div class="company" id="RowCompany">{props.data["company"]}</div>
        <div id="RowStatus">Review</div>
        <div class="update" id="RowUpdated">{props.data["update"]}</div>
      </div>
    </div>
  );
};
export default JobField;
