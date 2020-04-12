import React, {useState, useEffect} from 'react';
// import {QuestionContext} from '../App';
// import { set } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


function Create_Survey(){
    //State Variables
    const [showYesNoInput, setShowYesNoInput] = useState(false)
    const [showCheckBoxInput, setCheckBoxInput] = useState(false)
    // const [questionCount, setQuestionCount] = useState(0)
    const [survey, setSurvey] = useState([])    
    const [state, setState] = useState({name:'', label:''})
    
    let handleSelect = (e) => {
        e.preventDefault()
        console.log("handle select", e.target.value)
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
        setState({[e.target.name]: e.target.value})
    }

    let labelInputChange = (e) => {
        e.preventDefault()
        setState({[e.target.name]: e.target.value})
    }

    // let addQuestion = (e) =>{
    //     e.preventDefault()
    //     let q = state.name.trim();
    //     let label = state.name.trim();
    //     console.log(showCheckBoxInput)
    //     console.log(`name: ${label} label: ${label}`)
    //     if(q.trim().length === 0){
    //         return
    //     }           
    //     // console.log(survey)
    //     // setState({name:""})                   
        
    // }
    // let addCheckBox = (e) => {
    //     console.log(e)
    // }
    // let removeItem = (e, idx) => {
    //     e.preventDefault()
    //     // let parent = e.target.parentNode.parentNode
    //     // let child = e.target.parentNode
    //     // setQuestions(questions.filter(item => item !== questions[idx]))
    // }

    // useEffect(() => {
    //     setState({name:"", label: ""})
    // }, [])

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
                        value={state.name} 
                        
                    />
                </div> 
                <div className="form-group">
                    <select className="form-control form-control-md  mx-auto select-input mb-2" onChange={(e)=> {handleSelect(e)}} required>
                        <option defaultValue> Response Type </option>
                        <option> CheckBox </option>
                        <option> Yes/No </option>
                    </select>
                </div>
                
                    {/* Add button for Add question input*/}
 
                { showCheckBoxInput &&
                    <div className="form-group mt-3 mx-auto mb-3 label-input" >
                        <input 
                            name='label'
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            placeholder="Enter Label Name" 
                            onChange={(e) => labelInputChange(e)}
                            value={state.label}         
                        />
                    </div>
                }
                <button 
                    className="d-block mx-auto btn btn-md bg-dark text-white w-25 mt-1" 
                    onClick={(e)=> console.log(e)}>
                        {/* addQuestion(e) */}
                        Add
                </button>                               
            </form>

            <div id="questionsContainer" className="text-left">
                {/* {
                    questions.map((question, idx) => (
                        <h1 id={uuidv4()} key={idx}> {question} <i onClick={(e) => removeItem(e, idx)} className="fa fa-trash-alt fa-xs ml-2"/></h1>
                    ))
                }
                {
                    
                } */}
            </div>

        </div>
    )


}

export default Create_Survey;

