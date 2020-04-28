import React, {useState} from 'react';



let useAddQuestion = (e, tempSurvey) => {
    let addQuestion = (e, tempSurvey) =>{
        e.preventDefault()
        console.log('Looking good')
        console.log(tempSurvey)    
    }

    return addQuestion
}


export default useAddQuestion;