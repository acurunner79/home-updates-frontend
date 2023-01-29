import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {

  const apiUrl = 'http://localhost:3000/locations'

  const [locations, setLocations] = useState(null)

  const getLocations = useRef()

  getLocations.current = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    setLocations(data)
    // console.log(data)
  }

   useEffect(() => {
    getLocations.current()
  }, [])

  const loaded = () => {

    return (
      locations?.map((location, index) => {
        // console.log('mapped data', location.projects[0].name)
        return (
          <div key={index}>
            <h1>Home Page</h1>
            <p>{location.name}</p>
          </div>
        )
      })
    )
  }

  const loading = () => {
    return (
      <h1>Loading .....</h1>
    )
  }

  return locations ? loaded() : loading()
}

export default App;
