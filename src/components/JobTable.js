import React from "react";
import JobField from "./JobField";

const JobTable = (props) => {
  return (
    <div className="JobTable">
      {props.application
        ? props.application.map((Data, index) => (
            <JobField
              setBoolean={props.click}
              data={Data}
              index={index}
              click={props.idSet}
              id={index}
              delete={props.delete}
            />
          ))
        : null}
    </div>
  );
};
export default JobTable;
