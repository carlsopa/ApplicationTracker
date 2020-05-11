import React from "react";
import Modal from "./JobModal";
//status ideas: applied, phone interview, inperson interview, offered, rejected
const JobCard = (props) => {
  return props.job ? (
    <Modal set={props.set} reset={props.reset} modal={props.modal}>
      <div onClick={(e) => props.click}>
        <div id="Company">Company: {props.job["company"]}</div>
        <div id="Title">Title: {props.job["title"]}</div>
        <div id="Description">Description: {props.job["description"]}</div>
        <div id="Category">Category: {props.job["category"]}</div>
        <div id="InterviewLevel">
          Interview process:
          <form>
            <label>
              <input type="checkbox" id="Initial" />
              Initial contact
            </label>
            <label>
              <input type="checkbox" id="Phone" />
              Phone interview
            </label>
            <label>
              <input type="checkbox" id="Inperson" />
              Inperson interview
            </label>
            <label>
              <input type="checkbox" id="Offered" />
              Job offered
            </label>
          </form>
        </div>
        <div id="Notes">
          Additional notes:
          <form>
            <textarea id="Notes"></textarea>
          </form>
        </div>
        <div id="Url">Job link: {props.job["url"]}</div>
        <div id="Updated">Last updated: {props.job["update"]}</div>
      </div>
    </Modal>
  ) : null;
};
export default JobCard;
