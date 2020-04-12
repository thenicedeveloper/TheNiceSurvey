import React, {useState, createContext} from 'react';
import SampleSurvey from './components/Sample_Survey';
// import Modal from './components/Modal';
import CreateSurvey from './components/Create_Survey';
import GetSurveys from './components/Get_Surveys'
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
          {surveyForm && <CreateSurvey />}
          
        </div>
        <GetSurveys />
        <SampleSurvey />
      </div>
    </QuestionContext.Provider>
  )
}




export default App;



//Removed code

// useEffect( () => {      
//     return () =>{           
//         setTimeout(() => {              
//           setAddedQuestionAlert(false)
//          }, 2000)
//     }      
// },[addedQuestionAlert])

