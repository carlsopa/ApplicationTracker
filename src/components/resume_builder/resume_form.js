import React, { useState } from "react";

const ResumeForm = () => {
  const [EndBoolean, setEndBoolean] = useState(false);
  const [SummaryBoolean, setSummaryBoolean] = useState(false);
  const [BasicBoolean, setBasicBoolean] = useState(false);
  const [ProfilesBoolean, setProfilesBoolean] = useState(false);
  const [WorkBoolean, setWorkBoolean] = useState(false);

  const accordion = (event) =>{
    const NextElement = event.target.nextElementSibling;
    if(!event.target.className.includes("display")){
      NextElement.style.maxHeight = NextElement.scrollHeight + "px"}
    else{
      NextElement.style.maxHeight = 0;
    }
  }
  return (
    <div class="accordion">
      <form id="ResumeForm">
        <div className="accordionitem">
          <div className={BasicBoolean?"AccordionHeader-display":"AccordionHeader"} onClick={(e)=>(setBasicBoolean(!BasicBoolean),accordion(e))}>
            Basic Information</div>
            <div className="AccordionContent">
              <div className="AccordionBody">
              <label for="name">Name</label>
              <input id="name" type="text" />
              <label for="image">Image</label>
              <input type="file"></input>
              <label for="title">Title</label>
              <input id="title" type="text" />
              <label for="email">Email</label>
              <input id="email" type="email" />
              <label for="phone">Phone</label>
              <input id="phone" type="tel" />
              <label id="basicsummarylabel" for="basicsummary">
                Summary
              </label>
              <textarea className="summary"></textarea>
              <div id="addressform">
                Address
                <div className="AccordionContent">
                  <label for="street">Street</label>
                  <input id="street" type="text" />
                  <label for="secondarystreet">Secondary</label>
                  <input id="secondarystreet" type="text" />
                  <label for="city">City</label>
                  <input id="city" type="text" />
                  <label for="state">State</label>
                  <input id="state" type="text" />
                  <label for="zip">Zipcode</label>
                  <input id="zip" type="number" />
                </div>
              </div>
              </div>
            </div>

        </div>
        <div class="accordionitem">
          <div className={ProfilesBoolean?"AccordionHeader-display":"AccordionHeader"} onClick={(e)=>setProfilesBoolean(!ProfilesBoolean)} id="profileform">
            Profiles</div>
            <div className="AccordionContent">
              <div className="AccordionBody">
              <div className="individualprofile">
                <label for="network">Network</label>
                <input id="network" type="text"></input>
                <label for="link">link</label>
                <input id="link" type="url"></input>
                <button id="profileremove">Remove</button>
              </div>
              <button id="profileadd">Add a profile</button>
              </div>
            </div>
          
        </div>
        <div class="accordionitem">
          <div className={WorkBoolean?"AccordionHeader-display":"AccordionHeader"} onClick={(e)=>setWorkBoolean(!WorkBoolean)}>
            Work</div>
            <div className="AccordionContent" id="work">
            <div className="AccordionBody">
              <div className="individualwork">
                <button>Remove</button>
                <label for="company">Company</label>
                <input id="company" type="text"></input>
                <label for="position">Position</label>
                <input id="position" type="text"></input>

                <div className="radioclass">
                  <span>Are you still employed</span>
                  <label for="employedyes">Yes</label>
                  <input
                    name="employedstatus"
                    id="employedyes"
                    type="radio"
                    onClick={(e) => setEndBoolean(true)}
                  ></input>
                  <label for="employedno">No</label>
                  <input
                    name="employedstatus"
                    id="employedno"
                    type="radio"
                    onClick={(e) => {
                      setEndBoolean(false);
                    }}
                  ></input>
                </div>
                <label for="start">Start date</label>
                <input id="start" type="month"></input>
                <label type="end">End date</label>
                <input id="end" type="month"></input>
                <div className="radioclass">
                  <span>Description type</span>
                  <label for="texttype">Text summary</label>
                  <input
                    name="summarytype"
                    id="texttype"
                    type="radio"
                    onClick={(e) => setSummaryBoolean(false)}
                  ></input>
                  <label for="bullettype">Bullet summary</label>
                  <input
                    name="summarytype"
                    id="bullettype"
                    type="radio"
                    onClick={(e) => setSummaryBoolean(true)}
                  ></input>
                </div>
                <label for="textsummary">Summary</label>
                <textarea className="summary" id={SummaryBoolean?"textsummary":"display textsummary"}></textarea>
                <div
                  id={
                    SummaryBoolean ? "display bulletsummary" : "bulletsummary"
                  }
                >
                  <ul>
                    <li>
                      <input type="text"></input>
                    </li>
                  </ul>
                <button>Add</button><button>Remove</button>
                </div>
              </div>
              <button>Remove</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ResumeForm;
