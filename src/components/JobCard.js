import React from "react";
import Modal from "./JobModal";
const JobCard = (props) => {
  return props.job ? (
    <Modal set={props.set} reset={props.reset} modal={props.modal}>
      <div class="JobCard" onClick={(e) => props.click}>
        <div class="company" id="Company">{props.job["company"]}</div>
        <div id="Title"><span>Title:</span> <span> {props.job["title"]}</span></div>
        <div id="Description"><span>Description:</span> <span> Description</span></div>
        <div id="Category"><span>Category:</span> <span> category</span></div>
        <div id="InterviewLevel">
          Interview process:
          <form>
            <select id="StatusSelect">
              <option value="Phone">Phone interview</option>
              <option value="Initial">Initial contact</option>
              <option value="Inperson">Inperson interview</option>
              <option value="Offered">Job offered</option>
              <option value="checkbox">Rejected</option>
            </select>
          </form>
        </div>
        <div id="Notes">
          Additional notes:
          <form>
            <textarea id="Notes"></textarea>
          </form>
        </div>
        <div id="Url"><span>Job link:</span> <span> {props.job["url"]}</span></div>
        <div class="Controls" id="Job">
        <input
            id="SubmitJob"
            type="submit"
           
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
        <div class="update" id="Updated"><span>Last updated:</span> <span> {props.job["update"]}</span></div>
      </div>
    </Modal>
  ) : null;
};
export default JobCard;
