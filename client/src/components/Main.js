import React, {useState, useEffect} from 'react';
import SampleSurveys from './Sample_Survey';
import CreateSurvey from './Create_Survey';
import GetSurveys from './Get_Surveys'
// import ShowLabels from './ShowLabels';
// import {myContext} from '../App'

const SHOW_SURVEY_FORM_KEY = 'SHOW_SURVEY_FORM_KEY' //local storage needs a key and a value

const writeLocalStorage = (showSurveyForm) => {
    localStorage.setItem(
        SHOW_SURVEY_FORM_KEY,
        JSON.stringify({showSurveyForm}) //local storage only accepts strings
    )
}

const readLocalStorage = () => {
    let localState =  JSON.parse(localStorage.getItem(SHOW_SURVEY_FORM_KEY))
    return localState ? localState : {showSurveyForm: false} //if local state is null or undefine, set to false
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////Start Functional Component
function Main() {
    //////////////////////////////////////////////////////////////////////////////context
    
    ////////////////////////////////////////////////////////////////////////////////State
    //Get local storage value if any:
    let localState = readLocalStorage()
    //initial state is set to local storage value:
    const [showSurveyForm, setShowSurveyForm] = useState(localState.showSurveyForm) 
    const [survey, setSurvey] = useState([])


    ///////////////////////////////////////////////////////////////////////////////Local Functions

    let handleShowSurveyForm = ()=> { //Show or Hide the form to create a survey
        setShowSurveyForm(!showSurveyForm)
    }

    //useEffect
    useEffect(() => {
        //Write to local storage every time showSurveyForm updates
        writeLocalStorage(showSurveyForm)
    },[showSurveyForm])

    return(
        <div className="container  m-2 mx-auto d-block">
            <h1 className="text-center"> TheNiceSurvey </h1>
            <div id="createSurvey" className=" bg-dark text-white p-4 rounded">
                <div className="row text-center">
                    <h4 className="d-block col-12 p-1 text-center">Survey Creator</h4>
                    <div className="col-sm-12 text-center">
                        <div id="createSurveyButton" className="btn btn-lg btn-info" onClick={(e)=>handleShowSurveyForm(e)}>Create Survey</div>
                    </div>
                
                </div>
                  {showSurveyForm && <CreateSurvey />}
                
            </div>

            <GetSurveys />

  
            <SampleSurveys />
        </div>
    )
}


export default Main;
