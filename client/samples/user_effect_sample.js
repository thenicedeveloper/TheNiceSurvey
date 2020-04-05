import React, {useState, useEffect} from 'react';
//remember, by default, useEffect runs will run everytime you re-render
//window.addEventListener('event', function_to_call)  //Important

function App(){
  let [userText, setText] = useState('') //Initialize the variable

  let handleUserText = (e) => { //This function gets called on the event listener
    const {key, keyCode} = e;
    if(keyCode == 32 || keyCode >= 65 && keyCode <= 90){ //This clogs the DOM very quickly if you dont remove the eventLIstener
      setText(`${userText}${key}`)
    }
    
  }

  useEffect((e) => { //useEffect runs on first render, updates & component dismount.
    window.addEventListener('keydown', handleUserText)
    
    return () => { //This function gets executed on next render with any state update/component unmount 
      window.removeEventListener('keydown', handleUserText);//Basically, this clears stuff up
    }
  })

  return (
    <div className="text-center mt-2">
      <h1> Anything you type, you will see below: </h1>
      {userText}
    </div>
  )

}

export default App;