import React, {useState} from 'react';


let useCreateCheckBoxes = (tempSurvey) => {

    let createCheckBoxes = (tempSurvey) =>{
        let {labels} = tempSurvey;
        let checkBoxes = document.createElement('div')
        checkBoxes.classList.add('text-left')        
        labels.forEach(label => {
            let checkBoxInputDiv = document.createElement("div")
            let checkBoxLabel = document.createElement("label")
            let checkBoxInput = document.createElement("input")
            //add classes
            checkBoxInputDiv.classList.add('form-check')
            checkBoxInputDiv.classList.add('form-check-inline')
            checkBoxLabel.classList.add('form-check-label')
            checkBoxInput.classList.add('form-check-input')
            checkBoxInput.classList.add('mx-1')
            //add attributes
            checkBoxInput.setAttribute("type", "checkbox")
            checkBoxLabel.innerText = `${label.value}`
            //append
            checkBoxInputDiv.appendChild(checkBoxLabel)
            checkBoxInputDiv.appendChild(checkBoxInput)
            checkBoxes.appendChild(checkBoxInputDiv)
        })
        return checkBoxes
 
    }


    return createCheckBoxes;
}

export default useCreateCheckBoxes


{/* <div className="form-check form-check-inline">
    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
    <label className="form-check-label" htmlFor="inlineCheckbox1">Bananas</label>
</div> */}