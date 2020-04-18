import React, {useState, useEffect, useContext} from 'react';
import ReactHtmlParser from 'react-html-parser';
import { v4 as uuidv4 } from 'uuid';
import useAddQuestion from './customHooks/useAddQuestion'
import {myContext} from '../App'




function Create_Survey(){

    ////////////////////////////////////////////////////context
    const [surveyForm, showSurveyForm, survey, setSurvey, showYesNoInput, setShowYesNoInput, showCheckBoxInput, setCheckBoxInput, showLabelInputs, 
        setShowLabelInputs, name, setName, checkBoxes, setCheckBoxes, showLabels, setShowLabels, labels, setLabels] =  useContext(myContext)

    /////////////////////////////////////////////////State Variables     
    let addQuestion = useAddQuestion();
    let {number} = checkBoxes;
    

    ///////////////////////////////////////////////////Functions
    let handleSelect = (e) => {
        e.preventDefault()
        if(e.target.value !== '' && e.target.value.trim() === 'CheckBox'){
            setShowYesNoInput(false)
            setCheckBoxInput(true)
            
        } else if(e.target.value !== '' && e.target.value === 'Yes/No'){            
            setCheckBoxInput(false)
            setShowYesNoInput(!showYesNoInput)
        } else {
            setCheckBoxInput(false)
            setShowYesNoInput(false)
        }
        
    }
    let questionInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value.trim())
    }

    let boxesInputChange = (e) => {
        e.preventDefault()
        //{number: 0, labels:{}}
        let input = Number(e.target.value.trim())
        if(input > 8 || input < 0) {
            e.target.value = ""
            alert('Not a valid value!')
            return false
        } 
        setCheckBoxes({...checkBoxes, number: input})        
    }

    let handleLabels = (e) => {
        e.preventDefault()
        setLabels(e.target.value)
    }

    let handleAddQuestion = (e) => {        
        e.preventDefault()
        if(!name){
            alert('Enter a question!')
            return false
        } else if(!showCheckBoxInput){
            alert('Select a response type!')
            return false
        }
        console.log(checkBoxes)
        showSurveyForm(e)
        setShowLabels(true)
    }
    
    let removeItem = (e, idx) => {
        e.preventDefault()
        // setQuestions(questions.filter(item => item !== questions[idx]))
    }


    return(
        <div className="mt-2 bg-white text-left text-dark m-2 p-3">
            <form onSubmit={e => { e.preventDefault(); }}> 
                <h4 className="text-center">Create Survey</h4>                
                <div className="form-group mt-2 question-input mx-auto">
                    <label className="lead" htmlFor="name">Type your question:</label> 
                    <input 
                        name='name'
                        type="text" 
                        className="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="Enter your question" 
                        onChange={(e) => questionInputChange(e)}
                        value={name} 
                        required
                        
                    />
                </div> 
                <div className="form-group">
                    <select className="form-control form-control-md  mx-auto select-input mb-2" onChange={(e)=> {handleSelect(e)}} required>
                        <option defaultValue> Response Type </option>
                        <option> CheckBox </option>
                        <option> Yes/No </option>
                    </select>
                </div>
                
                { showCheckBoxInput &&
                    <div className="text-center">
                        <div className="row d-block">
                            <label className="" htmlFor="numberOfBoxes">How many check boxes? </label>
                            <input 
                                className="col-3 ml-1" 
                                type="number" 
                                name="checkBoxes" min="0" max="8"
                                value={number}
                                onChange={(e) => boxesInputChange(e)} 
                            />                          
                        </div>                        
                        {showLabels && 
                            <div className="form-group mt-3 mx-auto mb-3 label-input" >
                                <input 
                                    name='label'
                                    type="text" 
                                    className="form-control" 
                                    id="labelInput" 
                                    placeholder="Enter Label Name" 
                                    onChange={(e) => handleLabels(e)}
                                    value={labels}         
                                />                            
                            </div>
                        }
                        
                    </div>
                }
                <button 
                    className="d-block mx-auto btn btn-md bg-dark text-white w-25 mt-1" 
                    onClick={(e)=> handleAddQuestion(e)}>
                        Add
                </button>                               
            </form>

            <div id="questionsContainer" className="text-left">
                {/* {
                    survey.map((surveyObj, idx) => (
                        <div>
                            <h1 id={uuidv4()} key={idx}> {surveyObj.question} <i onClick={(e) => removeItem(e, idx)} className="fa fa-trash-alt fa-xs ml-2"/></h1>
                            {checkboxes === 1 ?
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">{surveyObj.label}</label>
                            </div>
                            : console.log("One Box")
                            }
                            { 1 < checkboxes > 3 ?
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">{surveyObj.label}</label>
                            </div>
                            : console.log("null")
                            }
                        </div>
                    ))
                } */}
                
            </div>

        </div>
    )


}

export default Create_Survey;

