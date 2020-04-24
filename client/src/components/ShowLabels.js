import React, {useEffect, useState, useContext} from 'react';
import {showLabelsContext} from '../App'


let ShowLabels = () =>{

    ///////////////////////////////////Context
    ////////////////////////////////////////////////////context
    const [] =  useContext(showLabelsContext)



    return (
        <div>
            <h1>Testing Labels</h1>
        </div>
    )
}


export default ShowLabels;



