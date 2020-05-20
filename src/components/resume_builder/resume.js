import React from 'react';
import ResumeDisplay from './resume_display';
import ResumeForm from './resume_form';

const ResumeBuilder = (props)=>{
    console.log(typeof(props.Data));
    
return(
    <div>
        <h1>Resume BUilder</h1>
        {props.Data?<ResumeForm Data={props.Data} Change={props.Change}/>:null}
        <ResumeDisplay/>
    </div>
)
}
export default ResumeBuilder;