import React, { useState } from "react";
import SingleProfile from "./individual_profile";

const ProfileInformation = (props) =>{

    
    const [ProfilesBoolean, setProfilesBoolean] = useState(false);

    const accordion = (event) =>{
        const NextElement = event.target.nextElementSibling;
        if(!event.target.className.includes("display")){
          NextElement.style.maxHeight = NextElement.scrollHeight + "px"}
        else{
          NextElement.style.maxHeight = 0;
        }
      }
    return(
        <div className="AccordionItem">
          <div className={ProfilesBoolean?"AccordionHeader-display":"AccordionHeader"} onClick={(e)=>setProfilesBoolean(!ProfilesBoolean)} id="ProfileForm">
            Profiles</div>
            
            <div className="AccordionContent">
              <div className="AccordionBody">
                  {
                  props.Data['profiles'].map((data,index)=>
                      <SingleProfile index={index} data={data}/>
                  )
              }
              <button id="ProfileAdd" onClick={(e)=>props.Change(e)}>Add a profile</button>
              </div>
            </div>
          
        </div>

    )
}
export default ProfileInformation;