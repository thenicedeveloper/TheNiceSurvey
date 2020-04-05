import React, {useState} from 'react';



const useCreateElement = (question, modalBody, elementId, elementName) => {

    // const [li, setLi] = useState()
    const createElement = (question, modalBody, elementId, elementName) => {        
        let element = document.createElement(`${elementName}`)
        let textnode = document.createTextNode(question)
        element.appendChild(textnode)
        element.setAttribute('id', `${elementId}`)
        element.classList.add('d-block')
        modalBody.appendChild(element)
        return element
    }
    
    return createElement;

}


export default useCreateElement;