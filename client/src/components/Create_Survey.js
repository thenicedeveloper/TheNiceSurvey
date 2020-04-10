import React, {useState, useEffect, useContext} from 'react';
import {QuestionContext} from '../App';
import useCreateElement from '../useCreateElement'; //This is a custom hook that returns an LI back
import useRemoveElement from '../useRemoveElement'; //This is a custom hook that returns an LI back
// import { v4 as uuidv4 } from 'uuid';



function Create_Survey(){
    //State Variables
    const [showQuestionInput, setShowQuestionInput] = useState(false)
    const [showCheckBoxInput, setCheckBoxInput] = useState(false)
   


    let handleSelect = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        if(e.target.value != '' && e.target.value.trim() === 'Add Question'){
            setCheckBoxInput(false)
            setShowQuestionInput(!showQuestionInput)
        } else if(e.target.value != '' && e.target.value === 'Add CheckBox'){            
            setShowQuestionInput(false)
            setCheckBoxInput(true)
        } else {
            setCheckBoxInput(false)
            setShowQuestionInput(false)
        }
        
    }

    let addQuestion = (e) =>{
        e.preventDefault()
        //question, parentElement, elementName
        let questionElement = document.getElementById('addQuestionInput')
        
    }

    return(
        <div className="mt-2 bg-white text-left text-dark m-2 p-3">
            <form>
                <h4 className="text-center">Create Survey</h4>
                <select className="form-control form-control-md w-25 mx-auto" onChange={(e)=> {handleSelect(e)}}>
                    <option> Select </option>
                    <option>Add Question</option>
                    <option > Add CheckBox</option>
                </select>
                { showQuestionInput &&
                    <div>
                        {/* Add question input */}
                        <div className="form-group mt-2 w-75 mx-auto"> 
                            <input 
                                id="addQuestionInput" 
                                type="text" 
                                className="form-control" 
                                id="formGroupExampleInput" 
                                placeholder="Enter your question" 
                            />
                        </div> 
                        {/* Add button for Add question input*/}
                        <div 
                            className="d-block mx-auto btn btn-md bg-dark text-white w-25 mt-1" 
                            onClick={(e)=> addQuestion(e)}>
                                Add
                        </div>
                    </div>                    
                }
                { showCheckBoxInput &&
                    <div>
                        <div className="form-group mt-3 mx-auto mb-2" style={{maxWidth:"20%"}}>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Label Name" />
                        </div> 
                        <div className="d-block mx-auto btn btn-md bg-dark text-white w-25 mt-0 pt-0">Add</div>
                    </div>                    
                }
                               
            </form>

        </div>
        
        
    )


}

export default Create_Survey;

{/* <div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
<label className="form-check-label" htmlFor="inlineCheckbox1">Apples</label>
</div> */}