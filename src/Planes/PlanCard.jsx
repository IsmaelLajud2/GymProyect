import React from 'react'
import '../Planes/CardCheck.css'


const PlanCard = ({ onselectedPlan, selected, plan }) => {
  return (
    <div className={`plan-card ${selected ? 'selected' : ''}`}>
      <label className="container">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onselectedPlan(plan)}
        />
        <div className="checkmark">
       </div>
       <div className='plan-card-section'>
       <h3 className='plan-nombre'>{plan.nombre}</h3>
       <p className='plan-precio'>€ {plan.precio}</p>
       </div>
       <div className='discount-div'>
        {plan.descuento ?
        <span className='discount-message'>{plan.descuento} </span> 
        :""
      }
        

       </div>
    
      </label>
    </div>
  )
}

export default PlanCard
