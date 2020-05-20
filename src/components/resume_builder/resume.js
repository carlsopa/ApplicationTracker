import React, {useState} from 'react';
import ResumeDisplay from './resume_display';
import ResumeForm from './resume_form';

const ResumeBuilder = ()=>{
    
return(
    <div>
        <h1>Resume BUilder</h1>
        <ResumeForm/>
        <ResumeDisplay/>
    </div>
)
}
export default ResumeBuilder;