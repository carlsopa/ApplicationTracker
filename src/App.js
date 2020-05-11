import React, { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobTable from "./components/JobTable";
import JobCard from "./components/JobCard";

import "./design/at.css";

function App() {
  const [Applications, setApplications] = useState([]);
  const [JobId, setJobId] = useState("");
  const [CurrentJob, setCurrentJob] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [ModalType, setModalType] = useState("");

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
    Note,
    Url
  ) => {
    event.preventDefault();
    const CurrentDate = new Date();
    const CurrentMonth = CurrentDate.getMonth()+1;
    const CurrentDay = CurrentDate.getDate();
    if (!Applications) {
      setApplications([
        {
          company: Company,
          title: Title,
          category: Category,
          note: Note,
          status: "Applied",
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
          note: Note,
          status: "Applied",
          url: Url,
          update: CurrentMonth + "/" + CurrentDay,
        },
      ]);
    }
  };
  const ModalBoolean = () => {
    setShowModal(true);
  };
  const JobUpdate = (notes,status) =>{
    const ApplicationsCopy= [...Applications];
    console.log(ApplicationsCopy);
    ApplicationsCopy[JobId]["note"] = notes;
    ApplicationsCopy[JobId]["status"] = status;
    setApplications(ApplicationsCopy);
  };
  return (
    <div className="App">
      <header></header>
      <div id="ApplicationTitle">Job Application Tracker</div>
      <button
        onClick={() => {
          ModalBoolean();
          setModalType("form");
        }}
      >
        Submit
      </button>
      {ModalType === "form" ? (
        <JobForm
          reset={setModalType}
          click={NewApplication}
          set={setShowModal}
          modal={ShowModal}
          type={"form"}
        />
      ) : (CurrentJob?(
        <JobCard
          update={JobUpdate}
          job={CurrentJob}
          reset={setModalType}
          set={setShowModal}
          modal={ShowModal}
        />):null
      )}
      <JobTable
        click={ModalBoolean}
        application={Applications}
        idSet={setJobId}
      />
    </div>
  );
}

export default App;
