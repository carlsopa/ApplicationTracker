import React from "react";
import JobField from "./JobField";

const JobTable = (props) => {
  //props.application?props.application.map((data)=>(console).log(data)):null
  return (
    <div class="JobTable">
      {props.application
        ? props.application.map((Data, index) => (
            <JobField
            setBoolean={props.click}
              data={Data}
              index={index}
              click={props.idSet}
              id={index}
            />
          ))
        : null}
    </div>
  );
};
export default JobTable;
