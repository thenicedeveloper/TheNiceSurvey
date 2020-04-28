import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import useAddQuestion from './customHooks/useAddQuestion';

function Create_Survey(){

    ////////////////////////////////////////////////////Hooks
    const [showCheckBoxInput, setShowCheckBoxInput] = useState(false)
    const [showLabels, setShowLabels] = useState(false)    
    const [tempSurvey, setTempSurvey] = useState({
        question: "", id: uuidv4(), tempNumCheckBoxes: 0, tempAnswerType:"", tempRadioButton: null, labels: []
    })
    // const [tracker, setTracker] = useState(0)
    const [survey, setSurvey] = useState([])

    //Custom hooks
    const addQuestion = useAddQuestion()
   
    ///////////////////////////////////////////////////Functions
    let handleQuestionInput = (e) =>{
        e.preventDefault()
        setTempSurvey({...tempSurvey, question:e.target.value})
    }

    let handleSelect = (e) => {
        e.preventDefault()
        console.log(e.target.value === 'CheckBox')
        setShowCheckBoxInput(!showCheckBoxInput)
        setTempSurvey({...tempSurvey, tempAnswerType:"checkbox"})
    }    

    let handleNumberOfBoxes = (e) => {
        e.preventDefault()
        let currentTarget = Number(e.currentTarget.value); 
        console.log(currentTarget)            
        if(currentTarget > tempNumCheckBoxes){ 
            console.log("tracker is more")      
            setTempSurvey( (tempSurvey) => { 
                return {...tempSurvey, tempNumCheckBoxes: currentTarget, labels:[...labels, {id: uuidv4(), value:"", amount: String(currentTarget)}]}
            })
         }else if (currentTarget < tempNumCheckBoxes){
             console.log("tracker is less")
            let temp = labels.splice(-1, 1)[0]
            setTempSurvey((tempSurvey) =>{
                return {...tempSurvey, tempNumCheckBoxes: currentTarget, labels: labels.filter(val => val !== temp) }
            })      
        }
    }

    let handleLabels = (index) => (e) => {
        e.preventDefault()
        console.log("index:", index)
        setTempSurvey({...tempSurvey}, labels[index].value = e.target.value)
    }
    ////////////////////////////////////////////////Add Question
    let addQuestionButton = (e) => {
        e.preventDefault()        
        if (question === ""){
            alert("Enter a question!")
            return false;
        }
        tempAnswerType !== "checkbox" && alert("Select an answer type!") 
        if ((tempAnswerType === "checkbox") && (0 < Number(tempNumCheckBoxes)) && Number(tempNumCheckBoxes < 6)){
            console.log("Nice")
            // addQuestion(e, tempSurvey);
            setSurvey([...survey, tempSurvey])
        }
        
    }
    /////////////////////////////////////////////////State Variables   
    let {question, tempNumCheckBoxes, tempAnswerType, tempRadioButton, labels} = tempSurvey;  
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
                        value={question} 
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
                                name="checkBoxes" min="0" max="5"
                                value={tempNumCheckBoxes}
                                onChange={(e) => handleNumberOfBoxes(e)}
                                required 
                            />                          
                        </div>
                       
                        {labels.length > 0 &&
                            labels.map(label => {
                                let index = labels.indexOf(label)
                                let {id, value, amount} = label;
                                return (
                                    <div key={id} className="form-group mt-3 mx-auto mb-3 label-input" >
                                        <input 
                                            name={`label${index}`}
                                            type="text" 
                                            className="form-control" 
                                            id="labelInput" 
                                            placeholder="Enter Label Name" 
                                            onChange={handleLabels(index)}                                            
                                            value={value}  
                                            required       
                                        />                            
                                    </div>
                                )
                            })
                        } 
                        
                    </div>
                }
                <button 
                    className="d-block mx-auto btn btn-md bg-dark text-white w-25 mt-1" 
                    onClick={(e)=> addQuestionButton(e)}>
                        Add
                </button>  
                {survey.length > 0 && 
                    survey.map(questionObj => {
                        let {question, id} = questionObj;
                        return (
                            <h4 key={id}>{question} {' '}</h4>
                        )
                    })                    
                }                             
            </form>            

        </div>
    )


}

export default Create_Survey;

