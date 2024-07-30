import React from 'react'
import '../PlanesB/ToggleStyles.css'
const TogglePlan = ({togglePeriodo ,period}) => {
  return (
    <>
     
    <div className='switch-container'>
        <label  className="switch" >
            <input checked={period === "Anual"} type='checkbox' onChange={() =>

                togglePeriodo(period === "Mensual" ? "Anual" : "Mensual")
            }></input>
            <span className='slider'></span>
        </label>
        <div className='switch-labels'>
            <span className={period === "Mensual" ? 'active' : ''}>Mensual</span>
            <span className={period === "Anual" ? 'active' : ''}>Anual</span>

        </div>
    </div>
    </>
  )
}

export default TogglePlan