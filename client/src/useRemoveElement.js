import React, {useState} from 'react';


const useRemoveElement = (question, modalBody) => {

    // const [li, setLi] = useState()
    const removeElement = (question, modalBody) => {       
        modalBody.removeChild(modalBody.firstChild)
    }
    
    return removeElement;

}


export default useRemoveElement;