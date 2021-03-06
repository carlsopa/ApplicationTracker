import React, { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobTable from "./components/JobTable";
import JobCard from "./components/JobCard";
import Dashboard from "./components/JobDashboard";

import "./design/at.css";
import init from "./data/FakeData.json"

function App() {
  const [Applications, setApplications] = useState([]);
  const [JobId, setJobId] = useState("");
  const [CurrentJob, setCurrentJob] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [ModalType, setModalType] = useState("");
  const [ShowData, setShowData] = useState(false);


  useEffect(() => {
    const LocalData = localStorage.getItem("My-Application");
    console.log(typeof(LocalData))
    if (LocalData) {
      const ParsedData = JSON.parse(LocalData);
     if(ParsedData!=[]) {
             setApplications(ParsedData);
     } else {
             setApplications(init);

     }

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
  const JobDelete = (id)=>{
    console.log(id);
    const ApplicationsCopy = [...Applications]
    console.log(ApplicationsCopy)
    ApplicationsCopy.splice(id,1);
    console.log(ApplicationsCopy);
    setApplications(ApplicationsCopy);
  }
  return (
    <div className="App">
      <header></header>
      <div id="ApplicationTitle">Job Application Tracker</div>
      <span id="NewButton"
        onClick={() => {
          ModalBoolean();
          setModalType("form");
        }}
      >
        Log a new job application
      </span>
      {Applications.length>0?<Dashboard slide={ShowData} setslide={setShowData} applications={Applications}/>:null}
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
        delete={JobDelete}
      />
      <div>
        You can access the code repo for this project at: <a target="_blank" href="https://github.com/carlsopa/ApplicationTracker">Application Tracker</a>
      </div>
    </div>
  );
}

export default App;
