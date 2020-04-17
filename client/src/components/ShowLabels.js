import React, {useEffect, useState, useContext} from 'react';
import {myContext} from '../App'


let ShowLabels = (props) =>{

    ///////////////////////////////////Context
    ////////////////////////////////////////////////////context
    const [showSurveyForm, survey, setSurvey, showYesNoInput, setShowYesNoInput, showCheckBoxInput, setCheckBoxInput, showLabelInputs, 
        setShowLabelInputs, name, setName, checkBoxes, setCheckBoxes, showLabels, setShowLabels, labels, setLabels] =  useContext(myContext)


    //state
    // let count = 0;
    // let mystr = ''

    // useEffect((mystr)=>{
        
    //     while(count < checkBoxes){
    //         mystr + 'label'
    //     }


    // },[])

    return (
        <div>
            <h1>Testing Labels</h1>
        </div>
    )
}


export default ShowLabels;



