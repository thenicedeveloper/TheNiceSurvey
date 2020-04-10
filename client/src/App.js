import React, {useState, useEffect, createContext, useContext} from 'react';
import Sample_Survey from './components/Sample_Survey';
// import Modal from './components/Modal';
import Create_Survey from './components/Create_Survey';
import Get_Surveys from './components/Get_Surveys'
export const QuestionContext = createContext();


const App = () => {
  const [questionsArray, setQuestionsArray] = useState([])
  const [surveyForm, setSurveyForm] = useState(false)  

  const showSurveyForm = (e)=>{
    e.preventDefault()
    setSurveyForm(!surveyForm)
    
  }

  return (
    <QuestionContext.Provider value={[questionsArray, setQuestionsArray]}>
      <div className="container  m-2 mx-auto d-block">
        <h1 className="text-center"> TheNiceSurvey </h1>
        <div id="createSurvey" className=" bg-dark text-white p-4 rounded">
          <div className="row text-center">
            <h4 className="d-block col-12 p-1 text-center">Survey Creator</h4>
            <div className="col-sm-12 text-center">
              <div id="createSurveyButton" className="btn btn-lg btn-info" onClick={(e)=>showSurveyForm(e)}>Create Survey</div>
            </div>
            
          </div>
          {surveyForm && <Create_Survey />} 
          
          
              
          
        </div>
        <Get_Surveys />
        <Sample_Survey />
      </div>
    </QuestionContext.Provider>
  )
}




export default App;



//Removed code

// const [addedQuestionAlert, setAddedQuestionAlert] = useState(false) 
// const [viewQuestionsButton, setViewQuestionsButton] = useState(false) 

// let createSurveyButton = document.getElementById('createSurveyButton')
    // if(e.target.innerText === "Create Survey"){  
    //   e.target.innerText = "Done"
    // } else if(e.target.innerText === "Done"){
    //   e.target.innerText = "Create Survey"
    // }

// const addQuestion = (e) => {
//   e.preventDefault()
//   const questionInput = document.getElementById('q_input')
//   const questionInputTrimmed = questionInput.value.trim()
//   if(questionInputTrimmed !== "" && questionInputTrimmed !== null){ 
//     questionInput.value = ''
//     setQuestionsArray((questionsArray)=> {        
//       return [...questionsArray, questionInputTrimmed]
//     })
//     setAddedQuestionAlert(true)    
//   } 
// }
// useEffect( () => {      
//     return () =>{           
//         setTimeout(() => {              
//           setAddedQuestionAlert(false)
//          }, 2000)
//     }      
// },[addedQuestionAlert])

{/* <div className="col-12">
  { addedQuestionAlert && <p id="questionAddedAlert" className="btn btn-md alert-success w-25 mx-auto">Question added!</p>}
</div>          */}
                  

{/* <div className="col-12">
  <Modal />
</div>    */}

{/* We can work on this feature later */}
{/* <div className="col-12">
  <button className="btn btn-lg btn-success mx-auto">Create Survey PDF</button>
</div> */}