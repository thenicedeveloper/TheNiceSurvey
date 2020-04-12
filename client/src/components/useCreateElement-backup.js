import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const useCreateElement = (question, parentElement, elementName) => {    
    
    function createElement(question, parentElement, elementName){
        //double check the conditions
        if((question.trim().length !== 0 && elementName === 'p') || (question.trim().length !== 0 && elementName.startsWith('h'))){
            console.log("If statement")
            let element = document.createElement(`${elementName}`)
            let textnode = document.createTextNode(question)
            let element_id = uuidv4();
            let closeIcon = document.createElement('i')
            closeIcon.classList.add('fa')
            closeIcon.classList.add('fa-trash-alt')
            closeIcon.classList.add('fa-xs')
            closeIcon.classList.add('ml-2')
            element.appendChild(textnode)
            element.appendChild(closeIcon)
            element.classList.add('d-block')
            
            // parentElement.appendChild(element)
            return {element, element_id}

        }
    }   
    
    return {createElement};

}  
    


export default useCreateElement;

// const createElement = (question, modalBody, elementId, elementName) => {        
//     let element = document.createElement(`${elementName}`)
//     let textnode = document.createTextNode(question)
//     element.appendChild(textnode)
//     element.setAttribute('id', `${elementId}`)
//     element.classList.add('d-block')
//     modalBody.appendChild(element)
    
// }    