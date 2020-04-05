import React, {useState, useEffect, useContext, createContext, component} from 'react';

 //Create context is also used in classes
//useContext makes createContext much more easy in functional components 
//createContext is use to pass any state down the hierarchy 
//No need to use a consumer, just use: const variableName = useContext(contextName)
//IMPORTANT: when importing into a child, surround the context with brackets --> import {NameContext} from 'filepath'
const NameContext = createContext();
let App = () => {
  
  const [name, setName] = useState("Jose Paulino")

  //remember to use the 'value' property to pass the state down
  return (
    <div className="text-center m-2">  
      <NameContext.Provider value={name}> 
        <Child />
      </NameContext.Provider>        
    </div>
  )
}

let Child = () => {

  return(
    <Grandchild />
  )
}

let Grandchild = () => {

  return(
    <Button />
  )
}

let Button = () => {

  const name = useContext(NameContext)
  return(
    <button className="btn btn-lg btn-dark text-white">DevOps with {name}</button>
  )
}

export default App;