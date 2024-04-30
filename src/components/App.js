import React, { useState, useEffect } from 'react'
import StarField from '../visual-effects/StarField'
import PlanetsContainer from "./PlanetsContainer"

function App() {
  
  const [planets, setPlanets] = useState([])
  const [isDark, setIsDark] = useState(true)

  const handleDark = ()=>{
    setIsDark(!isDark)
  }


  useEffect(() => {
    console.log('fetching planets...')
    fetch('http://localhost:4001/planets')
    .then(res => res.json())
    .then(planetsArray => setPlanets(planetsArray))
  }, [])
  console.log("planets: ",planets)

  return (
    <div className={"App " + (isDark? "dark-mode" :"light-mode")} >
      
      {/* You won't have to touch StarField, it's just here for visual things */}
      <StarField />

      <button onClick={handleDark}> {isDark? "Dark Mode":"Light Mode"}</button>

      <PlanetsContainer planets={planets} />
      

    </div>
  );
}

export default App;

