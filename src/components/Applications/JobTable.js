import React, { useState, useEffect } from "react";
import JobField from "./JobField";

const JobTable = (props) => {
  const [Category, setCategory] = useState("all");
  const [Status, setStatus] = useState("all");
  const [SortedData, setSortedData] = useState([]);
  const [SortedBoolean, setSortedBoolean] = useState(false);

  useEffect(() => {
    var data = [];

    props.application.map((Applications, index) => {
      if (Category !== "all") {
        setSortedBoolean(true);
        if (Status !== "all") {
          if (
            Applications.category === Category &&
            Applications.status === Status
          ) {
            data.push(Applications);
          }
        } else {
          if (Applications.category === Category) {
            data.push(Applications);
          }
        }
      } else {
        if (Applications.status === Status) {
          setSortedBoolean(true);
          data.push(Applications);
        }
      }
      if (Category === "all" && Status === "all") {
        setSortedBoolean(false);
      }
      setSortedData(data);
    });
  }, [Status, Category]);

  return (
    <div id="SortForm">
      <label htmlFor="CategorySort">Filter by category: </label>
      <select id="CategorySort" onChange={(e) => setCategory(e.target.value)}>
        <option value="all">all</option>
        <option value="Front End Developer">Front-End Developer</option>
        <option value="Back End Developer">Back-End Developer</option>
        <option value="Non-Developer">Other</option>
      </select>
      <label htmlFor="StatusSort">Filter by application status: </label>
      <select id="StatusSort" onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="Applied">Applied</option>
        <option value="Phone interview">Phone interview</option>
        <option value="In-person">In-person interview</option>
        <option value="Declined">Rejected</option>
      </select>
      <div className="JobTable">
        {SortedBoolean
          ? SortedData.map((Data, index) => (
              <JobField
                setBoolean={props.click}
                data={Data}
                index={index}
                click={props.idSet}
                id={index}
                delete={props.delete}
              />
            ))
          : props.application
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
    </div>
  );
};
export default JobTable;
