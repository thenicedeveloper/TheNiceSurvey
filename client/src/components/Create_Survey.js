import React, {useState} from 'react';
// import {QuestionContext} from '../App';
// import { set } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


function Create_Survey(){
    //State Variables
    const [showQuestionInput, setShowQuestionInput] = useState(false)
    const [showCheckBoxInput, setCheckBoxInput] = useState(false)
    const [questions, setQuestions] = useState([])
    // const {createElement} = useCreateElement()  
    const [state, setState] = useState({name: ''})
    
    let handleSelect = (e) => {
        e.preventDefault()
        if(e.target.value !== '' && e.target.value.trim() === 'Add Question'){
            setCheckBoxInput(false)
            setShowQuestionInput(!showQuestionInput)
        } else if(e.target.value !== '' && e.target.value === 'Add CheckBox'){            
            setShowQuestionInput(false)
            setCheckBoxInput(true)
        } else {
            setCheckBoxInput(false)
            setShowQuestionInput(false)
        }
        
    }

    let questionInputChange = (e) => {
        e.preventDefault()
        setState({[e.target.name]: e.target.value})
    }

    let addQuestion = (e) =>{
        e.preventDefault()
        //question, parentElement, elementName
        // let questionsContainer = document.getElementById("questionsContainer")
        let addQuestionInput = document.getElementById("addQuestionInput");
        addQuestionInput.value = ""
        let q = state.name.trim();
        if(q.trim().length === 0){
            return
        } 
        //Not using the create element function       
        // createElement(q, questionsContainer, 'h1')          
        setQuestions(questions => { 
            return [...questions, q]
        })  
        setState({name:""})                   
        
    }
    let removeItem = (e, idx) => {
        e.preventDefault()
        // let parent = e.target.parentNode.parentNode
        // let child = e.target.parentNode
        setQuestions(questions.filter(item => item !== questions[idx]))
    }

    return(
        <div className="mt-2 bg-white text-left text-dark m-2 p-3">
            <form onSubmit={e => { e.preventDefault(); }}> 
                <h4 className="text-center">Create Survey</h4>
                <select className="form-control form-control-md  mx-auto select-input" onChange={(e)=> {handleSelect(e)}}>
                    <option> Select </option>
                    <option>Add Question</option>
                    <option > Add CheckBox</option>
                </select>
                { showQuestionInput &&
                    <div>
                        {/* Add question input */}
                        <div className="form-group mt-2 question-input mx-auto"> 
                            <input 
                                id="addQuestionInput" 
                                type="text" 
                                name="name"
                                className="form-control" 
                                // id="formGroupExampleInput" 
                                placeholder="Enter your question" 
                                value={state.name}
                                onChange={(e) => questionInputChange(e)}
                            />
                        </div> 
                        {/* Add button for Add question input*/}
                        <button 
                            className="d-block mx-auto btn btn-md bg-dark text-white w-25 mt-1" 
                            onClick={(e)=> addQuestion(e)}>
                                Add
                        </button>
                    </div>                    
                }
                { showCheckBoxInput &&
                    <div>
                        <div className="form-group mt-3 mx-auto mb-2 label-input" >
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Label Name" />
                        </div> 
                        <div className="d-block mx-auto btn btn-md bg-dark text-white w-25 mt-0 pt-0">Add</div>
                    </div>                    
                }                               
            </form>

            <div id="questionsContainer" className="text-left">
                {
                    questions.map((question, idx) => (
                        <h1 id={uuidv4()} key={idx}> {question} <i onClick={(e) => removeItem(e, idx)} className="fa fa-trash-alt fa-xs ml-2"/></h1>
                    ))
                }
            </div>

        </div>
    )


}

export default Create_Survey;

{/* <div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
<label className="form-check-label" htmlFor="inlineCheckbox1">Apples</label>
</div> */}