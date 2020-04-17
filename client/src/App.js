import React, {useState, createContext} from 'react';
import SampleSurvey from './components/Sample_Survey';
// import Modal from './components/Modal';
import CreateSurvey from './components/Create_Survey';
import GetSurveys from './components/Get_Surveys'
import ShowLabels from './components/ShowLabels';
export const myContext = createContext();


const App = () => {
  const [questionsArray, setQuestionsArray] = useState([])
  const [surveyForm, setSurveyForm] = useState(false)  
  const [survey, setSurvey] = useState([]) 
  const [showYesNoInput, setShowYesNoInput] = useState(false)
  const [showCheckBoxInput, setCheckBoxInput] = useState(false)
  const [showLabelInputs, setShowLabelInputs] = useState(false)  
  let [checkBoxes, setCheckBoxes] = useState({number: 0, labels:{}});  
  let [name, setName] = useState('') //question input name
  let [showLabels, setShowLabels] = useState(false)  
  let [labels, setLabels] = useState('')

  const showSurveyForm = (e)=>{
    e.preventDefault()
    setSurveyForm(!surveyForm)
    setShowLabels(false)
  }

  return (
    <myContext.Provider 
      value={[showSurveyForm, survey, setSurvey, showYesNoInput, setShowYesNoInput, showCheckBoxInput, setCheckBoxInput, showLabelInputs, 
      setShowLabelInputs, name, setName, checkBoxes, setCheckBoxes, showLabels, setShowLabels, labels, setLabels]}>
      
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
          
          {showLabels && <ShowLabels />}
        </div>
        <GetSurveys />
        <SampleSurvey />
      </div>
    </myContext.Provider>
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

