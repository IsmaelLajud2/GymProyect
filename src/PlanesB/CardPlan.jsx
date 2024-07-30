import React from 'react'
import '../PlanesB/PlanesStyles.css'
const CardPlan = ({ plan, selected, onSelect }) => {
  return (
    <div className={`plan-card ${selected ? 'selected' : ''}`} onClick={() => onSelect(plan)}>
      <h3>{plan.nombre}</h3>
      <p className="price">${plan.precio}</p>
    </div>
  );
};

export default CardPlan;