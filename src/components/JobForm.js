import React, { useState } from "react";

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
    <div className="modal">
      <div className="modal-content">
        <form id="JobForm">
          <label for="company">
            Company Name</label>
            <input
              type="text"
              id="Company"
              onChange={(e) => setCompany(e.target.value)}
            ></input>
          <label for="Title">
            Job title</label>
            <input
              type="text"
              id="Title"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          <label for="Category">
            Category</label>
            <select id="Category" onChange={(e) => setCategory(e.target.value)}>
              <option value="Front End Developer">Front End Developer</option>
              <option value="Back End Developer">Back End Developer</option>
              <option value="Non-Developer">Non-Developer</option>
            </select>
          <label id="DescriptionLabel" for="Description">
            Notes</label>
            <textarea id="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

          <label for="Link">
            Job link</label>
            <input
              type="text"
              id="Link"
              onChange={(e) => setUrl(e.target.value)}
            ></input>
          <input
            id="SubmitJob"
            type="submit"
            onClick={(e) => FormSubmit(e)}
            value="click this"
          />
        </form>
      </div>
    </div>
  );
};
export default JobForm;
