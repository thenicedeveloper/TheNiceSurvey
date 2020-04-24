import React, {useState, useEffect} from 'react';
// import { v4 as uuidv4 } from 'uuid';


// const checkAnswerType = (e) => {
//     e.preventDefault()
//     console.log(e)
// }

function Create_Survey(){

    ////////////////////////////////////////////////////context
    const [showCheckBoxInput, setShowCheckBoxInput] = useState(false)
    const [ questionInputValue, setQuestionInputValue] = useState("")
    /////////////////////////////////////////////////State Variables     

    

    ///////////////////////////////////////////////////Functions
    let handleQuestionInput = (e) =>{
        e.preventDefault()
        setQuestionInputValue(e.target.value)
    }

    let handleSelect = (e) => {
        e.preventDefault()
        console.log(e.target.value === 'CheckBox')
        setShowCheckBoxInput(!showCheckBoxInput)
    }    

    let handleNumberOfBoxes = (e) => {
        
    }


    let addQuestionButton = (e) => {
        // console.log(checkAnswerType(e))
    }

    useEffect(()=> {
        console.log(questionInputValue)
    })
    
    return(
        <div className="mt-2 bg-white text-left text-dark m-2 p-3">
            <form onSubmit={e => { e.preventDefault(); }}> 
                <h4 className="text-center">Create Survey</h4>                
                <div className="form-group mt-2 question-input mx-auto">
                    <label className="lead" htmlFor="name">Type your question:</label> 
                    <input 
                        name='qInputValue'
                        type="text" 
                        className="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="Enter your question" 
                        onChange={(e) => handleQuestionInput(e)}
                        value={questionInputValue} 
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
                                // value={number}
                                onChange={(e) => handleNumberOfBoxes(e)} 
                            />                          
                        </div>                        
                        {/* {showLabels && 
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
                        } */}
                        
                    </div>
                }
                <button 
                    className="d-block mx-auto btn btn-md bg-dark text-white w-25 mt-1" 
                    onClick={(e)=> addQuestionButton(e)}>
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

