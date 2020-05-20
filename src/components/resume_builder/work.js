import React, { useState } from "react";
import SingleWork from "./individual_work";

const WorkInformation = (props) => {
    const [EndBoolean, setEndBoolean] = useState(false);
  const [SummaryBoolean, setSummaryBoolean] = useState(false);
    const [WorkBoolean, setWorkBoolean] = useState(false);

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
          <div className={WorkBoolean?"AccordionHeader-display":"AccordionHeader"} onClick={(e)=>setWorkBoolean(!WorkBoolean)}>
            Work</div>
            <div className="AccordionContent" id="work">
            <div className="AccordionBody">
              <SingleWork/>
              </div>
              <button>Remove</button>
            </div>
          </div>
        

    )
}
export default WorkInformation;