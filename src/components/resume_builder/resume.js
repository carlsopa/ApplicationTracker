import React, { useState, useEffect } from "react";
import ResumeDisplay from "./resume_display";
import ResumeForm from "./resume_form";

import initResume from "../../data/resume.json";

const Resume = (props) => {
  const [ResumeData, setResumeData] = useState({});
  const [ResumeObjectSet, setResumeObject] = useState(false);
  useEffect(() => {
    const LocalProfile = localStorage.getItem("My-Resume");
    if (LocalProfile) {
      var ParsedData = JSON.parse(LocalProfile);
      if (Object.keys(ParsedData).length != 0) {
        setResumeData(ParsedData);
      } else {
        setResumeData(initResume);
      }
    } else {
      localStorage.setItem("My-Resume", JSON.stringify(initResume));
      setResumeData(initResume);
    }
  }, []);

  return (
    <div>
      <h1>Resume BUilder</h1>
      {
      Object.keys(ResumeData).length>0?
        <ResumeForm Data={ResumeData} Change={props.Change} />:null

      }
      <ResumeDisplay />
    </div>
  );
};
export default Resume;
