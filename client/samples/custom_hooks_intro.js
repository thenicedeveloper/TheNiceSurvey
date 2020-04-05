import React, {useState, useEffect, useContext, createContext} from 'react';

//Not how important are custom hook functions to offload functions and code to other files.

let App = () => {

  const {count, handleCountDecrease, handleCountIncrease} = useHandleCount();
  //note how the count variable/number and these functions are return from the custom hook function below


  return(

      <div className="text-center m-2">
        <button id='decrease' className="btn btn-lg bg-dark text-white m-1" onClick={handleCountDecrease}>Decrease</button>
        <button id='increase' className="btn btn-lg bg-dark text-white m-1" onClick={handleCountIncrease}>Increase</button>
        <h1 className="display-2">{count}</h1>
    </div>

  )

}
////////////////////////////This is a custom hook 'useHandleCount' --> Must start with 'use'
let useHandleCount = () =>{ 

  let [count, setCount] = useState(0)

  let handleCountDecrease = () => {
    setCount(count-1)
  }

  let handleCountIncrease = () => {
    setCount(count+1)
  }  

  
  useEffect(()=> { //No need for these below if you listen on the html tag (check the 'onClick' in the butoon above.)
    // let decreaseEvent = document.getElementById('decrease')
    // decreaseEvent.addEventListener('click', handleCountDecrease)
    // let increaseEvent = document.getElementById('increase')
    // increaseEvent.addEventListener('click', handleCountIncrease);

    return () => {
      // decreaseEvent.removeEventListener('click', handleCountDecrease);
      // increaseEvent.removeEventListener('click', handleCountIncrease);     
    }
  })

  return {count, handleCountDecrease, handleCountIncrease}

}

export default App;