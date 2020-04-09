import React, {useState, useEffect, createContext, useContext} from 'react';
import Sample_Survey from './components/Sample_Survey';
import Modal from './components/Modal';
import Create_Survey from './components/Create_Survey';
import Created_Surveys from './components/Created_Surveys'
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
        <h1> TheNiceSurvey </h1>
        <div className="row bg-dark text-white p-4 justify-content-around rounded">
          <h4 className="d-block col-12 p-1">Survey Creator</h4>
          <div className="col-sm-12 col-md-6">
            <div className="btn btn-lg btn-info">Create Survey</div>
          </div>

          <div className="col-12">
            { addedQuestionAlert && <p id="questionAddedAlert" className="btn btn-md alert-success w-25 mx-auto">Question added!</p>}
          </div>

          {/* <div className="col-12">
            <Modal />
          </div>    */}
          
          {/* We can work on this feature later */}
          {/* <div className="col-12">
            <button className="btn btn-lg btn-success mx-auto">Create Survey PDF</button>
          </div> */}
                           
          
        </div>
        <Created_Surveys />
        <Sample_Survey />
      </div>
    </QuestionContext.Provider>
  )
}




export default App;

