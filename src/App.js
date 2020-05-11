import React, { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobTable from "./components/JobTable";
import JobCard from "./components/JobCard";
import JobModal from "./components/JobModal";

import "./design/at.css";

function App() {
  const [Applications, setApplications] = useState([]);
  const [JobId, setJobId] = useState("");
  const [CurrentJob, setCurrentJob] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  useEffect(() => {
    const LocalData = localStorage.getItem("My-Application");
    if (LocalData) {
      setApplications(JSON.parse(LocalData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("My-Application", JSON.stringify(Applications));
  }, [Applications]);
  useEffect(() => {
    setCurrentJob(Applications[JobId]);
  }, [JobId]);
  const NewApplication = (
    event,
    Company,
    Title,
    Category,
    Description,
    Url
  ) => {
    event.preventDefault();
    const CurrentDate = new Date();
    const CurrentMonth = CurrentDate.getMonth();
    const CurrentDay = CurrentDate.getDay();
    if (!Applications) {
      setApplications([
        {
          company: Company,
          title: Title,
          category: Category,
          description: Description,
          url: Url,
          update: CurrentMonth + "/" + CurrentDay,
        },
      ]);
    } else {
      setApplications((Applications) => [
        ...Applications,
        {
          company: Company,
          title: Title,
          category: Category,
          description: Description,
          url: Url,
          update: CurrentMonth + "/" + CurrentDay,
        },
      ]);
    }
    console.log(Applications);
  };
  const ModalBoolean = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
      <header></header>
      <div id="ApplicationTitle">Job Application Tracker</div>
      <button onClick={ModalBoolean}>Submit</button>
      <JobForm click={NewApplication} set={setShowModal} modal={ShowModal} />
      <JobTable
        click={ModalBoolean}
        application={Applications}
        idSet={setJobId}
      />
      <JobCard job={CurrentJob} set={setShowModal} modal={ShowModal} />
    </div>
  );
}

export default App;
