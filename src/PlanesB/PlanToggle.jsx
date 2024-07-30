import React from 'react'
import '../PlanesB/ToggleStyles.css'

const PlanToggle = ({period , onToggle}) => {


  return (
    <> 
    <div className="switch-container">
      <label className="switch">
        <input 
          type="checkbox" 
          checked={period === 'Anual'} 
          onChange={() => onToggle(period === 'Mensual' ? 'Anual' : 'Mensual')} 
        />
        <span className="slider"></span>
      </label>
      <div className="switch-labels">
        <span className={period === 'Mensual' ? 'active' : ''}>Mensual</span>
        <span className={period === 'Anual' ? 'active' : ''}>Anual</span>
      </div>
      
    </div>

</>
  )
}
export default PlanToggle