import React, {useState} from 'react';



const useCreateElement = (question, parentElement, elementName) => {

    
    if(elementName === 'p'){
        let createElement = (question, parentElement, elementName) =>{
            let element = document.createElement(`${elementName}`)
            let textnode = document.createTextNode(question)
            element.appendChild(textnode)
            element.classList.add('d-block')
            parentElement.appendChild(element)
            return element
        }   
        
        return createElement;
    }
    // const createElement = (question, modalBody, elementId, elementName) => {        
    //     let element = document.createElement(`${elementName}`)
    //     let textnode = document.createTextNode(question)
    //     element.appendChild(textnode)
    //     element.setAttribute('id', `${elementId}`)
    //     element.classList.add('d-block')
    //     modalBody.appendChild(element)
        
    // }    
    

}


export default useCreateElement;