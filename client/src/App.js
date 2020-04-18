import React, {useState, createContext} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Main from './components/Main';
import Landing from './components/Landing';
import Login from './components/Login';
export const myContext = createContext();


function App(){
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
      value={[surveyForm, showSurveyForm, survey, setSurvey, showYesNoInput, setShowYesNoInput, showCheckBoxInput, setCheckBoxInput, showLabelInputs, 
      setShowLabelInputs, name, setName, checkBoxes, setCheckBoxes, showLabels, setShowLabels, labels, setLabels]}>       
      
      <NavBar />
      <Switch>

        <Route path="/" component={Main} exact />
        <Route path="/landing" component={Landing} exact />
        <Route path="/login" component={Login} exact />

      </Switch>
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

