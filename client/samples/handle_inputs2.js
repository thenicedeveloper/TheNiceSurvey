import React, {useState} from 'react';

function App(){
  let [city, setCity] = useState('')
  let [country, setCountry] = useState('')

  let handleCityChange = (e) => {
    setCity(e.target.value)
  }

  let handleCountryChange = (e) => {
    setCountry(e.target.value)
  }


  return(
    <div>
      <form>
        <div className="text-center mt-2">
            <input 
              className="m-2"
              type="text"
              placeholder="Enter you city"
              onChange={handleCityChange}
              value={city}
            />
            <input 
              type="text"
              placeholder="Enter you city"
              onChange={handleCountryChange}
              value={country}
            />
            <h1>You live in {city}, {country}</h1>
        </div>
      </form>
    </div>
  )
}

export default App;