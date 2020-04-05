import React, {useState, useEffect, useContext, createContext, component} from 'react';
import Sample_Survey from './components/Sample_Survey';


const SurveyGenerator_form = () => {

  let [questions, setQuestions] = useState(0)
  let [checkBoxes, setCheckBoxes] = useState(0)

  let handleQuestions = (e) => {
    console.log(questions)
  }

  let handleCheckBoxes = (e) => {
    // console.log(e.target.value)
    console.log(checkBoxes)
  }


  let GenerateSurvey = () => {

  }
  return (
    <div className="container text-center m-2 mx-auto d-block">
      <h1> TheNiceSurvey</h1>
      <div className="row bg-dark text-white p-4 justify-content-around">
        <h4 className="d-block col-12">Survey Generator</h4>
        <div className="col-sm-12 col-md-4">
          <form>
            <div className="form-group row">
              <p className="text-muted mx-auto mb-1">Specify how many questions below: </p>              
              <label className="col-sm-8 col-form-label bg-secondary border border-2 mb-1 q-labels" htmlFor="questions">How many questions?</label>
              <div className="col-sm-4">
                <input 
                  type="number" 
                  className="form-control q-inputs"  
                  id="questions"
                  onChange={handleQuestions}                   
                />                
              </div>  
            </div>
          </form>
        </div>
        
        <div className="col-12">
          <button className="btn btn-lg btn-success mx-auto" onSubmit={GenerateSurvey}>Submit</button>
        </div>          

      </div>
    </div>
  )
}


export default SurveyGenerator_form;

