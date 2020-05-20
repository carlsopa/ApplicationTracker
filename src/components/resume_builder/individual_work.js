import React, { useState } from "react";

const SingleWork = (props) => {
  const [EndBoolean, setEndBoolean] = useState(false);
  const [SummaryBoolean, setSummaryBoolean] = useState(false);
  const [WorkBoolean, setWorkBoolean] = useState(false);

  const accordion = (event) => {
    const NextElement = event.target.nextElementSibling;
    if (!event.target.className.includes("display")) {
      NextElement.style.maxHeight = NextElement.scrollHeight + "px";
    } else {
      NextElement.style.maxHeight = 0;
    }
  };
  return (
    <div className="IndividualWork">
      <button>Remove</button>
      <label htmlFor="company">Company</label>
      <input id="company" type="text"></input>
      <label htmlFor="position">Position</label>
      <input id="position" type="text"></input>

      <div className="RadioClass">
        <span>Are you still employed</span>
        <label htmlFor="EmployedYes">Yes</label>
        <input
          name="EmployedStatus"
          id="EmployedYes"
          type="radio"
          onClick={(e) => setEndBoolean(true)}
        ></input>
        <label htmlFor="employedNo">No</label>
        <input
          name="EmployedStatus"
          id="EmployedNo"
          type="radio"
          onClick={(e) => {
            setEndBoolean(false);
          }}
        ></input>
      </div>
      <label htmlFor="start">Start date</label>
      <input id="start" type="month"></input>
      <label type="end">End date</label>
      <input id="end" type="month"></input>
      <div className="RadioClass">
        <span>Description type</span>
        <label htmlFor="TextType">Text summary</label>
        <input
          name="SummaryType"
          id="TextType"
          type="radio"
          onClick={(e) => setSummaryBoolean(false)}
        ></input>
        <label htmlFor="BulletType">Bullet summary</label>
        <input
          name="SummaryType"
          id="BulletType"
          type="radio"
          onClick={(e) => setSummaryBoolean(true)}
        ></input>
      </div>
      <label htmlFor="TextSummary">Summary</label>
      <textarea
        className="summary"
        id={SummaryBoolean ? "TextSummary" : "display TextSummary"}
      ></textarea>
      <div id={SummaryBoolean ? "display BulletSummary" : "BulletSummary"}>
        <ul>
          <li>
            <input type="text"></input>
          </li>
        </ul>
        <button>Add</button>
        <button>Remove</button>
      </div>
    </div>
  );
}
export default SingleWork;
