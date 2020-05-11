import React, { useState, useEffect } from "react";
import Modal from "./JobModal";
const JobCard = (props) => {
  const [JobNotes, setJobNotes] = useState("");
  const [ReviewStatus, setReviewStatus] = useState("good");
  useEffect(() => {
    setJobNotes(props.job["note"]);
    setReviewStatus(props.job["status"]);
  }, [props.job]);

  return props.job ? (
    <Modal set={props.set} reset={props.reset} modal={props.modal}>
      <div className="JobCard" onClick={(e) => props.click}>
        <div className="company" id="Company">
          {props.job["company"]}
        </div>
        <div id="Title">
          <span>Title:</span> <span> {props.job["title"]}</span>
        </div>
        <div id="Category">
          <span>Category:</span> <span> category</span>
        </div>
        <div id="InterviewLevel">
          Interview process:
          <form>
            <select
              value={ReviewStatus}
              id="StatusSelect"
              onChange={(e) => setReviewStatus(e.target.value)}
            >
              <option value="Applied">Applied</option>
              <option value="Phone interview">Phone interview</option>
              <option value="In-person">In-person interview</option>
              <option value="Job offered">Job offered</option>
              <option value="Declined">Rejected</option>
            </select>
          </form>
        </div>
        <div id="Notes">
          Additional notes:
          <form>
            <textarea
              id="Notes"
              value={JobNotes}
              onChange={(e) => setJobNotes(e.target.value)}
            ></textarea>
          </form>
        </div>
        <div id="Url">
          <span>Job link:</span>{" "}
          {props.job["url"] ? (
            <a href={props.job["url"]} target="_blank">
              {props.job["url"].substring(0, 30) + "..."}
            </a>
          ) : null}
        </div>
        <div className="Controls" id="Job">
          <input
            id="SubmitJob"
            type="submit"
            onClick={(e) => {
              props.update(JobNotes, ReviewStatus);
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
        <div className="update" id="Updated">
          <span>Last updated:</span> <span> {props.job["update"]}</span>
        </div>
      </div>
    </Modal>
  ) : null;
};
export default JobCard;
