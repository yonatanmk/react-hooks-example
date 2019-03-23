import React, { useState } from 'react';


const MultipleState = () => {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  function handleCityChange(event) {
    setCity(event.target.value )
  }

  function handleCountryChange(event) {
    setCountry(event.target.value )
  } 

  return (
    <form>
      <div>
        <input 
          type="text"
          placeholder="City"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      <div>
        <input 
          type="text"
          placeholder="Country"
          value={country}
          onChange={handleCountryChange}
        />
      </div>

      <div>
        <p>You live in {city}, {country}</p>
      </div>
    </form>
  )
}

export default MultipleState;
