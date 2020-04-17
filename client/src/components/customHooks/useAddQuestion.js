import React, {useState} from 'react';



let useAddQuestion = (e) => {
    let addQuestion = (e) =>{
        e.preventDefault()
        //Check that user selects a response type
        // if(!(showCheckBoxInput) && !(showYesNoInput)){
        //     alert("Select Respose Type!")
        //     return
        // }
        // let q = name.trim();
        // let l = label.trim(); 
        // let c = checkBoxes;

        console.log(e)
        console.log('Looking good')




        //check that inputs are not empty:
        // q.length > 0 ? console.log("Question Entered") : alert("Enter a question")       
        // l.length > 0 ? console.log("Label Entered") : alert("Enter a label")
        // console.log("Question is good")
        // setSurvey(survey => {
        //     return[...survey, {question: q, label: l, checkboxes: c}]
        // })

    }

    return addQuestion
}


export default useAddQuestion;