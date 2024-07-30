import React from 'react'

const PlanCard = ({ onselectedPlan ,selected ,plan}) => {
  return (
    <div className={`plan-card ${selected ? 'selected' : ""}`  } onClick={() => onselectedPlan(plan)}>
        <h3>{plan.nombre}</h3>
        <p>€ {plan.precio}</p>
    </div>
  )
}

export default PlanCard