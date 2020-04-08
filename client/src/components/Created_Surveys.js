import React, {useContext, useEffect, useState} from 'react';
import {QuestionContext} from '../App.js'; ////////////Note the context between brackets!!!
import Modal from './Modal';
const axios = require('axios').default;
//need a key for the map? may need uuid
//import { v4 as uuidv4 } from 'uuid';


function Created_Surveys () {
    const [allSurveys, setAllSurveys] = useState([])
    
    useEffect(() => { 
        // useEffect requires a function to be returned
        async function fetchData(){
            //get title, id and questions
            const {data} = await axios.get('/api/surveys/')           
            setAllSurveys(data)                
        }

        
        fetchData()   
    }, [])

    return(
        <div>            
            { 
                allSurveys.map((data) => (     
                        <div className="card m-5" style={{width: "18rem"}} key={data._id}>              
                            <h5 className="card-title">
                                {data.title}
                            </h5> 
                        </div>                    
                ))
            }
            
        </div>
    )


}



export default Created_Surveys;