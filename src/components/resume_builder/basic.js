import React, { useState,useEffect } from "react";

const BasicInformation = (props) =>{
    const [BasicBoolean, setBasicBoolean] = useState(false);
    const [name, setName] = useState(props.Data['name'])
    const [image, setImage] = useState(props.Data['picture'])
    const [title, setTitle] = useState(props.Data['label'])
    const [email, setEmail] = useState(props.Data['email'])
    const [phone, setPhone] = useState(props.Data['phone'])
    const [summary, setSummary] = useState(props.Data['summary'])
    const [address, setAddress] = useState(props.Data['location']['address'])
    const [city, setCity] = useState(props.Data['location']['city'])
    const [state, setState] = useState(props.Data['location']['region'])
    const [zip, setZip] = useState(94115)

    useEffect(()=>{
        console.log(props.Data)
    },[])
    // if(props.Data!==undefined){
    //     console.log(props.Data['profiles'])
    // }

    const accordion = (event) =>{
        const NextElement = event.target.nextElementSibling;
        console.log(event.target)
        if(!event.target.className.includes("display")){
          NextElement.style.maxHeight = NextElement.scrollHeight + "px"}
        else{
          NextElement.style.maxHeight = 0;
        }
      }
      
    return(
        <div className="AccordionItem">
          <div className={BasicBoolean?"AccordionHeader-display":"AccordionHeader"} onClick={(e)=>(setBasicBoolean(!BasicBoolean),accordion(e))}>
            Basic Information</div>
            <div className="AccordionContent">
              <div className="AccordionBody">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
              <label htmlFor="image">Image</label>
              <input type="file"></input>
              <label htmlFor="title">Title</label>
              <input id="title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              
                  <label htmlFor="street">Street</label>
                  <input id="street" type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                  <label htmlFor="city">City</label>
                  <input id="city" type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
                  <label htmlFor="state">State</label>
                  <input id="state" type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
                  <label htmlFor="zip">Zip code</label>
                  <input id="zip" type="number" value={zip} onChange={(e)=>setZip(e.target.value)}/>
                  <label id="BasicSummaryLabel" htmlFor="BasicSummary">
                Summary
              </label>
              <textarea className="summary" value={summary} onChange={(e)=>setSummary(e.target.value)}></textarea>
                </div>

              </div>
            </div>

        

    )
}
export default BasicInformation;