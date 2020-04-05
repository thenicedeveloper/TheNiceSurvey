import React, {useState, useEffect, createContext, useContext} from 'react';
import Sample_Survey from './components/Sample_Survey';
import Modal from './components/Modal';
export const QuestionContext = createContext();


const App = () => {
  const [questionsArray, setQuestionsArray] = useState([])
  const [addedQuestionAlert, setAddedQuestionAlert] = useState(false) 
  const [viewQuestionsButton, setViewQuestionsButton] = useState(false) 

  const addQuestion = (e) => {
    e.preventDefault()
    const questionInput = document.getElementById('q_input')
    const questionInputTrimmed = questionInput.value.trim()
    if(questionInputTrimmed !== "" && questionInputTrimmed !== null){ 
      questionInput.value = ''
      setQuestionsArray((questionsArray)=> {        
        return [...questionsArray, questionInputTrimmed]
      })
      setAddedQuestionAlert(true)    
    } 
  }
  useEffect( () => {      
      return () =>{           
          setTimeout(() => {              
            setAddedQuestionAlert(false)
           }, 2000)
      }      
  },[addedQuestionAlert])

  return (
    <QuestionContext.Provider value={[questionsArray, setQuestionsArray]}>
      <div className="container text-center m-2 mx-auto d-block">
        <h1> TheNiceSurvey</h1>
        <div className="row bg-dark text-white p-4 justify-content-around">
          <h4 className="d-block col-12">Survey Generator</h4>
          <div className="col-sm-12 col-md-6">
            <form>
              <div className="form-group row">
                <p className="text-muted mx-auto mb-1 col-12">Add a question to your survey: </p>  

                <div className="col-sm-8 m-0">
                  <input id="q_input" className="form-control" type="text" placeholder="Type your a question" required/>
                </div>
                <div className="col-sm-4 text-center m-0">
                  <button className="form-control text-center btn" id="addQuestion" onClick={addQuestion} > 
                    Add Question               
                  </button>               
                </div>  
              </div>
            </form>
          </div>

          <div className="col-12">
            { addedQuestionAlert && <p id="questionAddedAlert" className="btn btn-md alert-success w-25 mx-auto">Question added!</p>}
          </div>

          <div className="col-12">
            <Modal />
          </div>   
          
          <div className="col-12">
            <button className="btn btn-lg btn-success mx-auto">Create Survey PDF</button>
          </div>
                           
          
        </div>
        <Sample_Survey />
      </div>
    </QuestionContext.Provider>
  )
}




export default App;

