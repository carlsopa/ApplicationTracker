import React, {useState,useEffect} from "react";

const JobField = (props) => {
  const [active,setActive] = useState(false);
  console.log(props.index);
  const ClickEvent=(event)=>{
    props.setBoolean();
    console.log(event.target.className)
    setActive(true)
    props.click(props.id)
    console.log(event.target)
  }
  useEffect(()=>{
    console.log(this)
  },[active])
  return (
    <div className={active ? "Active PreviewCard":"PreviewCard"} onClick={(e) => ClickEvent(e)}>
      <div id="PreviewCardData">
        <div id="RowCompany">{props.data["company"]}</div>
        <div id="RowStatus">Review</div>
        <div id="RowUpdated">{props.data["update"]}</div>
      </div>
    </div>
  );
};
export default JobField;
