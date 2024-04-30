import React from 'react'
import PlanetFacts from "./PlanetFacts"
import {useState} from 'react'

function PlanetCard({planet}) {
  const [isImage, setIsImage] = useState(true)
 /*  const handleFlip =()=>{
    setIsImage(!isImage)
  } */

  return (
    <div className="card" onClick={()=>setIsImage(!isImage)}> {/* () => console.log('Toggle!') */}
    {isImage?  
      (<>
      <h2>{planet.name}</h2>
      <img className={planet.is_planet ? "" : "not-planet"} src={planet.image} alt={planet.name} />
      </>):
      (<PlanetFacts planet={planet}/>)
      }
    </div>
  )
}

export default PlanetCard
