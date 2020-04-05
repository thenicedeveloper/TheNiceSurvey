import React, {useState, useEffect, component} from 'react';

//Timer function
//You may import this hook function into another component as follows:
//let currentTime = useGetDate()

let useGetDate = () => {
    let d = new Date();
    let hour = d.getHours().toString();
    let minutes = d.getMinutes().toString();
    let seconds = d.getSeconds().toString();
    let [currentTime, setCurrentTime] = useState(`${hour}:${minutes}:${seconds}`)
    
  
  
    useEffect(() => {
        let timer = setInterval(function(){
        let d = new Date();
        let hour = d.getHours().toString();
        let minutes = d.getMinutes().toString();
        let seconds = d.getSeconds().toString();     
        
        setCurrentTime(`${hour}:${minutes}:${seconds}`)
  
      }, 1000);
  
      return () =>{
        clearInterval(timer)
      }
    })
  
    return currentTime;
  
  }

  export default useGetDate;