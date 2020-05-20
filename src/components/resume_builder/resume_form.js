import React from "react";
import BasicInformation from "./basic";
import ProfileInformation from "./profiles";
import WorkInformation from "./work";

const ResumeForm = (props) => {

  // const accordion = (event) =>{
  //   const NextElement = event.target.nextElementSibling;
  //   if(!event.target.className.includes("display")){
  //     NextElement.style.maxHeight = NextElement.scrollHeight + "px"}
  //   else{
  //     NextElement.style.maxHeight = 0;
  //   }
  // }
  return (
    <div className="accordion">
      <form id="ResumeForm">
        <BasicInformation Data={props.Data['basics']}/>
        <ProfileInformation Data={props.Data['basics']} Change={props.Change}/>
        <WorkInformation Data={props.Data['work']}/>       
      </form>
    </div>
  );
};
export default ResumeForm;
