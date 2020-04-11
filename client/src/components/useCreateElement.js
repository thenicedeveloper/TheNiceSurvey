import React, {useState} from 'react';



const useCreateElement = (question, parentElement, elementName) => {    

    function createElement(question, parentElement, elementName){
        console.log(typeof elementName)
        if((elementName != '' && elementName === 'p') || (elementName != '' && elementName.startsWith('h'))){
            let element = document.createElement(`${elementName}`)
            let textnode = document.createTextNode(question)
            element.appendChild(textnode)
            element.classList.add('d-block')
            parentElement.appendChild(element)
            return element

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