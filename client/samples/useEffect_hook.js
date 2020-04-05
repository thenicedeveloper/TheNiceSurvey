import React, {useState, useEffect, Component} from 'react';

//use the getEventListeners(window) to get the listeners //provided by crhome

//The useEffect hook accepts a function as an argument 
//The function is what we call an effect or side effect
//Acts like a combination of componentDidmount, componentDidUpdate, componentWillMount

//So, useEffect will run anytime you render, update/re-render, etc
//Remember, anytime your state changes, you force a re-render

let App = () => {
  let [count, setCount] = useState(0)

  useEffect(() => {
    //Everytime you re-render, this function will be re-declared
    //This means that each time this fn runs, count will be up to date
    console.log(`I'm inside the useEffect function. The current count is ${count}`)
    //If you pass an empty [] as the second argument, this code only executes when mounting the 1 time.
    

    //You can also have a another function nested within this function
    //This function can act as the componentDidUpdate/componentWillUnmount life cycle method
    //Note that, in javaScript, you can use function anywhere you can use other data types
    return () => {

      //Here is the effect clean up / tear down of anything that got setup before
      //Note, that this is queued up and will execute on next rendering/re-rendering
      //It also executes when the component unmounts to act ast the componentWillUnmount lifecycle
      console.log("I will only run when being unmounted if you pass an empty array as a second argument")
      //This can be limited to run only when unmounting
      //So, only unmounting or unmounting will trigger any code whithin useEffect

    }
  }, []) //You can pass an empty array as a second argument to limit the execution
  return(
    <div className="text-center m-2">
      <button className="btn btn-lg m-1" onClick={()=> setCount(count-1)}>Decrease</button>
      <button className="btn btn-lg m-1" onClick={()=> setCount(count+1)}>Increase</button>
      <h1 className="display-4">{count}</h1>

    </div>
  )

}


export default App;