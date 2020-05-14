import React from "react";
import JobPieChart from "./JobChart";

const Dashboard = (props) => {
  console.log(props.applications);
  var count = 0;
  var Status = [
    { Category: "Applied", value: 0 },
    { Category: "Moved forward", value: 0 },
    { Category: "Rejected", value: 0 },
  ];
  var Categories = [
    { Category: "Front End Developer", value: 0 },
    { Category: "Back End Developer", value: 0 },
    { Category: "Non-Developer", value: 0 },
  ];

  props.applications.map((job, index) => {
    const month = job["update"].split("/")[0];
    if (parseInt(month) === new Date().getMonth() + 1) {
      count = count + 1;
    }
    Categories.map((data, index) => {
      if (data["Category"] == job["category"]) {
        data["value"] += 1;
      }
    });
    console.log(job["status"]);
    if (job["status"] == "Applied") {
      Status[0]["value"] += 1;
    } else if (job["status"] == "Declined") {
      Status[2]["value"] += 1;
    } else {
      Status[1]["value"] += 1;
    }
    
  });const setSlide=()=>{
      props.setslide(true);
    }
  return (
    <div id={props.slide?"SlideDown":"Dashboard"}>
      <div id="MobileDashboardHero" onClick={setSlide()}>Click to expand</div>
      <div id="Totals">
        <div id="MonthTotal">This month you have applied to: {count} jobs</div>
        <div id="TotalTotal">
          In total you have applied to: {props.applications.length} jobs
        </div>
      </div>
      <div id="CategoryGraph">
        {Categories.map((data, index) => (
          <div>
            You have applied to {data["value"]} {data["Category"]} positions
          </div>
        ))}
        {/* <JobPieChart data={Categories} height={200} width={200} inner={20} outer={100}/> */}
      </div>
      <div id="StatusGraph">
        You are waiting to hear from {Status[0]["value"]} Companies.
        <br />
        You are in the interview process with {Status[1]["value"]} Companies.
        <br />
        You have or have been rejected by {Status[2]["value"]} Companies.
      </div>
      <div id="TitleGraph"></div>
    </div>
  );
};
export default Dashboard;
