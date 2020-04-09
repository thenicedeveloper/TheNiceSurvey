import React, {useState, useEffect, useContext} from 'react';
import {QuestionContext} from '../App';
import useCreateElement from '../useCreateElement'; //This is a custom hook that returns an LI back
import useRemoveElement from '../useRemoveElement'; //This is a custom hook that returns an LI back
import { v4 as uuidv4 } from 'uuid';



function Create_Survey(){



    return(
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Actions
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
    )


}

export default Create_Survey;