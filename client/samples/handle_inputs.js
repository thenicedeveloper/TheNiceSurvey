import React, {useState} from 'react';



//Sample functional component using useState
function App(){

  const [state, setState] = useState({ //takeaway
    city: '',
    country: ''
  })

  let handleCity = (e) => { //takeaway
    setState({
      ...state, city: e.target.value //takeaway
    })
  }
  function handleCountry(e){
    setState({
      ...state, country: e.target.value
    })
  }

  return(
    <div className="mt-2 text-center">      
      <form>
        <div>
          <input 
            className="d-block mx-auto m-2"
            placeholder="Enter your City"
            type="text"
            type="text" value={state.city} //Set the value attribute to the state   //takeaway
            //The value property sets or returns the value of the value attribute of a text field.
            onChange={handleCity} //takeaway
          />
          <input 
            placeholder="Enter your State"
            type="text" value={state.country} //Set the value attribute to the state
            onChange={handleCountry} 
          />
        </div>
      </form>
      <h2>You live in {state.city}, {state.country}</h2>
      
    </div>
  )

}


export default App;
