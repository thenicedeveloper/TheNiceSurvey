import React, {useContext} from 'react';
import SampleSurvey from './Sample_Survey';
// import Modal from './Modal';
import CreateSurvey from './Create_Survey';
import GetSurveys from './Get_Surveys'
import ShowLabels from './ShowLabels';
import {myContext} from '../App'

function Main() {
    ////////////////////////////////////////////////////context
    const [surveyForm, showSurveyForm, survey, setSurvey, showYesNoInput, setShowYesNoInput, showCheckBoxInput, setCheckBoxInput, showLabelInputs, 
        setShowLabelInputs, name, setName, checkBoxes, setCheckBoxes, showLabels, setShowLabels, labels, setLabels] =  useContext(myContext)
    return(
        <div className="container  m-2 mx-auto d-block">
            <h1 className="text-center"> TheNiceSurvey </h1>
            <div id="createSurvey" className=" bg-dark text-white p-4 rounded">
                <div className="row text-center">
                <h4 className="d-block col-12 p-1 text-center">Survey Creator</h4>
                <div className="col-sm-12 text-center">
                    <div id="createSurveyButton" className="btn btn-lg btn-info" onClick={(e)=>showSurveyForm(e)}>Create Survey</div>
                </div>
                
                </div>
                {surveyForm && <CreateSurvey />}
                
                {showLabels && <ShowLabels />}
            </div>
            <GetSurveys />
            <SampleSurvey />
        </div>
    )
}


export default Main;
