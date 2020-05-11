import React, { useState } from "react";
import Modal from "./JobModal";

const JobForm = (props) => {
  const [Company, setCompany] = useState("");
  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [Url, setUrl] = useState("");

  const FormSubmit = (event) => {
    props.click(event, Company, Title, Category, Description, Url);
    setCompany("");
    setTitle("");
    setCategory("");
    setDescription("");
    setUrl("");
  };

  return (
    <Modal set={props.set} modal={props.modal} reset={props.reset}>
      <form id="JobForm">
        <div id="LeftForm">
          <label for="company">Company Name</label>
          <input
            type="text"
            id="Company"
            onChange={(e) => setCompany(e.target.value)}
          ></input>
          <label for="Title">Job title</label>
          <input
            type="text"
            id="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label for="Category">Category</label>
          <select id="Category" onChange={(e) => setCategory(e.target.value)}>
            <option value="Front End Developer">Front End Developer</option>
            <option value="Back End Developer">Back End Developer</option>
            <option value="Non-Developer">Non-Developer</option>
          </select>
          <label for="Link">Job link</label>
          <input
            type="text"
            id="Link"
            onChange={(e) => setUrl(e.target.value)}
          ></input>
        </div>
        <div id="FormNotes">
          <label id="DescriptionLabel" for="JobDescription">
            Notes
          </label>
          <textarea
            id="JobDescription"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div class="Controls" id="Form">
          <input
            id="SubmitJob"
            type="submit"
            onClick={(e) => FormSubmit(e)}
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
