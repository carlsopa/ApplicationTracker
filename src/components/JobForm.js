import React, { useState } from "react";
import Modal from "./JobModal";

const JobForm = (props) => {
  const [Company, setCompany] = useState("");
  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [Notes, setNotes] = useState("");
  const [Url, setUrl] = useState("");

  const FormSubmit = (event) => {
    props.click(event, Company, Title, Category, Notes, Url);
    setCompany("");
    setTitle("");
    setCategory("");
    setNotes("");
    setUrl("");
  };

  return (
    <Modal set={props.set} modal={props.modal} reset={props.reset}>
      <form id="JobForm">
        <div id="LeftForm">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            onChange={(e) => setCompany(e.target.value)}
          ></input>
          <label htmlFor="Title">Job title</label>
          <input
            type="text"
            id="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label htmlFor="Category">Category</label>
          <select id="Category" onChange={(e) => setCategory(e.target.value)}>
            <option value="Front End Developer">Front End Developer</option>
            <option value="Back End Developer">Back End Developer</option>
            <option value="Non-Developer">Non-Developer</option>
          </select>
          <label htmlFor="Link">Job link</label>
          <input
            type="text"
            id="Link"
            onChange={(e) => setUrl(e.target.value)}
          ></input>
        </div>
        <div id="FormNotes">
          <label id="DescriptionLabel" htmlFor="JobDescription">
            Description/Notes
          </label>
          <textarea
            id="JobDescription"
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        <div className="Controls" id="Form">
          <input
            id="SubmitJob"
            type="submit"
            onClick={(e) => {
              FormSubmit(e);
              props.set(false);
              props.reset(null);
            }}
            value="Submit Job"
          />
          <input
            id="CloseModal"
            type="submit"
            onClick={(e) => {
              props.set(false);
              props.reset(null);
            }}
            value="Close"
          />
        </div>
      </form>
    </Modal>
  );
};
export default JobForm;
