import React from 'react'
import PlanetCard from "./PlanetCard"

function PlanetsContainer({planets}) {

  const mappedPlanets = planets.map(planet => <PlanetCard key={planet.id} planet={planet} />)

  return (
    <div className="flex container">

      {mappedPlanets}

    </div>
  )
}

export default PlanetsContainer
