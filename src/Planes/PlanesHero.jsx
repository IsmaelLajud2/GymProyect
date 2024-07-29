import React from 'react'
import Planes from './Planes'
import '../Planes/PlanHeroStyles.css'
const PlanesHero = () => {
  return (
    <div className='App'>
        <h1 >Escoge tu plan</h1>
        <Planes></Planes>
    </div>
  )
}

export default PlanesHero