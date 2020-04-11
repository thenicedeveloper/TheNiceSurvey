import React, {useState, useEffect, useContext} from 'react';
import {QuestionContext} from '../App';
import useCreateElement from './useCreateElement'; //This is a custom hook that returns an LI back
import useRemoveElement from '../useRemoveElement'; //This is a custom hook that returns an LI back
import { v4 as uuidv4 } from 'uuid';


const Modal = () => {

  const [questionsArray, setQuestionsArrays] = useContext(QuestionContext)
  const [element, setElement] = useState([])
  ///////////////////////////Problem:
  //problem: function is executing twice, everytime it re-renders

  const createElement = useCreateElement(); 
  const removeElement = useRemoveElement(); 
  
  useEffect(()=>{
    let modalBody = document.getElementById('modalBody')
    let elementId = uuidv4();

    {questionsArray.map((question) => {
      {
        let p = createElement(question, modalBody, elementId, 'p')
      } 
    })}
    return () => {
      let modalBody = document.getElementById('modalBody')
      {questionsArray.map((question) => {
        {
          removeElement(question, modalBody)
  
        } 
      })}
    }
  })


  return(
    <div>
      <button id="addModal" type="button" className="btn btn-sm bg-info m-2" data-toggle="modal" data-target="#exampleModal">
      View Your Question
      </button>

      <div id="exampleModal" className="modal text-dark" tabIndex="-1" role="dialog">
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="modal-header ">
              <h5 className="modal-title">Your questions</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div id="modalBody" className="modal-body text-left">

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Modal;