import React, { useState } from "react";
import SingleProfile from "./individual_profile";

const ProfileInformation = (props) => {
console.log("proflie render");
  const [ProfilesBoolean, setProfilesBoolean] = useState(false);
  const [profiles, setProfiles] = useState(props.Data['profiles'])

  const FieldAdd = (event)=>{
      event.preventDefault();
       setProfiles(prev=>[...prev,{Network:'',url:''}])
  }

  function CreateInput(){
      return profiles.map((data, index) =><SingleProfile index={index} data={data} />)
  }

  const accordion = (event) => {
    const NextElement = event.target.nextElementSibling;
    if (!event.target.className.includes("display")) {
      NextElement.style.maxHeight = NextElement.scrollHeight + "px";
    } else {
      NextElement.style.maxHeight = 0;
    }
  };
  return (
    <div className="AccordionItem">
      <div
        className={
          ProfilesBoolean ? "AccordionHeader-display" : "AccordionHeader"
        }
        onClick={(e) => setProfilesBoolean(!ProfilesBoolean)}
        id="ProfileForm"
      >
        Profiles
      </div>

      <div className="AccordionContent">
        <div className="AccordionBody">
          {
          profiles.map((data, index) => (
            <SingleProfile index={index} data={data} />
          ))
          }
          <button id="ProfileAdd" onClick={(e) => {FieldAdd(e)}}>
            Add a profile
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfileInformation;
