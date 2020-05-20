import React, { useState, useEffect } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import JobForm from "./components/JobForm";
import JobTable from "./components/JobTable";
import JobCard from "./components/JobCard";
import Dashboard from "./components/JobDashboard";
import ResumeBuilder from "./components/resume_builder/resume";

import "./design/at.css";
import init from "./data/FakeData.json";
import initResume from "./data/resume.json";

function App() {
  const [Applications, setApplications] = useState([]);
  const [Resume, setResume] = useState({});
  const [JobId, setJobId] = useState("");
  const [CurrentJob, setCurrentJob] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [ModalType, setModalType] = useState("");
  const [ShowData, setShowData] = useState(false);

  useEffect(() => {
     const LocalData = localStorage.getItem("My-Application");
     const LocalProfile = localStorage.getItem("My-Resume");
     if(LocalData){
       var ParsedData = JSON.parse(LocalData);
       if(ParsedData.length!=0){
        setApplications(ParsedData);
       } else {
         setApplications(init);
       }
     }
     else{
      localStorage.setItem("My-Application",JSON.stringify(init));
      setApplications(init);
     }
     if(LocalProfile){
       var ParsedData = JSON.parse(LocalProfile);
       if(Object.keys(ParsedData).length!=0){
        setResume(ParsedData)
       } else {
        setResume(initResume)
       }
     } else {
      localStorage.setItem("My-Resume",JSON.stringify(initResume));
      setResume(initResume);
     }

  }, []);

  useEffect(() => {
    localStorage.setItem("My-Application", JSON.stringify(Applications));
  }, [Applications]);
  useEffect(()=>{
    localStorage.setItem("My-Resume",JSON.stringify(initResume));
  },[Resume])

  useEffect(() => {
    setCurrentJob(Applications[JobId]);
  }, [JobId]);

  const NewApplication = (event, Company, Title, Category, Note, Url) => {
    event.preventDefault();
    const CurrentDate = new Date();
    const CurrentMonth = CurrentDate.getMonth() + 1;
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
  const JobUpdate = (notes, status) => {
    const ApplicationsCopy = [...Applications];
    console.log(ApplicationsCopy);
    ApplicationsCopy[JobId]["note"] = notes;
    ApplicationsCopy[JobId]["status"] = status;
    setApplications(ApplicationsCopy);
  };
  const JobDelete = (id) => {
    console.log(id);
    const ApplicationsCopy = [...Applications];
    console.log(ApplicationsCopy);
    ApplicationsCopy.splice(id, 1);
    console.log(ApplicationsCopy);
    setApplications(ApplicationsCopy);
  };
  const ResumeUpdate=(event)=>{
    event.preventDefault();
    const ResumeCopy=Resume;
    ResumeCopy['basics']['profiles'].push({Network:'',url:''})
    console.log(ResumeCopy);
    setResume(ResumeCopy);
  }
  return (
    <div className="App">
      <header>
        {
          <BrowserRouter>
            <Link target={"_blank"} to="/resume">
              Resume
            </Link>
            <Route path="/resume">
              {Object.keys(Resume).length!=0?<ResumeBuilder
              Data={Resume} Change={ResumeUpdate} />:null}
            </Route>
          </BrowserRouter>
        }
      </header>
      <div id="ApplicationTitle">Job Application Tracker</div>

      <span
        id="NewButton"
        onClick={() => {
          ModalBoolean();
          setModalType("form");
        }}
      >
        Log a new job application
      </span>
      {
      // Applications.length > 0 ? (
      //   <Dashboard
      //     slide={ShowData}
      //     setslide={setShowData}
      //     applications={Applications}
      //   />
      // ) : null
      }
      {ModalType === "form" ? (
        <JobForm
          reset={setModalType}
          click={NewApplication}
          set={setShowModal}
          modal={ShowModal}
          type={"form"}
        />
      ) : CurrentJob ? (
        <JobCard
          update={JobUpdate}
          job={CurrentJob}
          reset={setModalType}
          set={setShowModal}
          modal={ShowModal}
        />
      ) : null}
      <JobTable
        click={ModalBoolean}
        application={Applications}
        idSet={setJobId}
        delete={JobDelete}
      />
      <div>
        You can access the code repo for this project at:{" "}
        <a
          target="_blank"
          href="https://github.com/carlsopa/ApplicationTracker"
        >
          Application Tracker
        </a>
      </div>
    </div>
  );
}

export default App;
