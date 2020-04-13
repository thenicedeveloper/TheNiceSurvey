import React, {useState, useEffect} from 'react';
// import {QuestionContext} from '../App';
// import { set } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


function Create_Survey(){
    //State Variables
    const [showYesNoInput, setShowYesNoInput] = useState(false)
    const [showCheckBoxInput, setCheckBoxInput] = useState(false)
    const [survey, setSurvey] = useState([])    
    let [name, setName] = useState('')
    let [label, setLabel] = useState('')
    let [checkBoxes, setCheckBoxes] = useState(0);
    
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
        setName(e.target.value)
    }

    let boxesInputChange = (e) => {
        e.preventDefault()
        setCheckBoxes(e.target.value)
    }

    let labelInputChange = (e) => {
        e.preventDefault()
        setLabel(e.target.value)
    }

    let addQuestion = (e) =>{
        e.preventDefault()
        //Check that user selects a response type
        if(!(showCheckBoxInput) && !(showYesNoInput)){
            alert("Select Respose Type!")
            return
        }
        let q = name.trim();
        let l = label.trim(); 
        let c = checkBoxes;
        //check that inputs are not empty:
        q.length > 0 ? console.log("Question Entered") : alert("Enter a question")       
        l.length > 0 ? console.log("Label Entered") : alert("Enter a label")
        console.log("Question is good")
        setSurvey(survey => {
            return[...survey, {question: q, label: l, checkboxes: c}]
        })
        setName("") //Reset name state (question input)
        setLabel("") //Reset label state (label input)
    }
    let addCheckBox = (e) => {
        console.log(e)
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
                                onChange={(e) => boxesInputChange(e)} 
                            />                          
                        </div>                        
                        <div className="form-group mt-3 mx-auto mb-3 label-input" >
                            <input 
                                name='label'
                                type="text" 
                                className="form-control" 
                                id="labelInput" 
                                placeholder="Enter Label Name" 
                                onChange={(e) => labelInputChange(e)}
                                value={label}         
                            />                            
                        </div>
                        
                    </div>
                }
                <button 
                    className="d-block mx-auto btn btn-md bg-dark text-white w-25 mt-1" 
                    onClick={(e)=> addQuestion(e)}>
                        Add
                </button>                               
            </form>

            <div id="questionsContainer" className="text-left">
                {
                    survey.map((surveyObj, idx) => (
                        <div>
                            <h1 id={uuidv4()} key={idx}> {surveyObj.question} <i onClick={(e) => removeItem(e, idx)} className="fa fa-trash-alt fa-xs ml-2"/></h1>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">{surveyObj.label}</label>
                            </div>
                        </div>
                    ))
                }
                {
                    
                }
            </div>

        </div>
    )


}

export default Create_Survey;

