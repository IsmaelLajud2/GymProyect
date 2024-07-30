import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container,Row } from 'react-bootstrap'
import TogglePlan from './TogglePlan'
import PlanCard from './PlanCard'
import '../PlanesB/PlanesStyles.css'

const PlanList = () => {

   const [period, setPeriod] = useState("mensual")
   const [plan, setPlan] = useState([])
   const [planselected, setPlanSelected] = useState(null) 

   const getAllPLanes= async() =>{
    try {
        const response = await axios.get('http://localhost:8320/planes/getAll')
        setPlan(response.data)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
   }
useEffect(() => {
 getAllPLanes() 
}, [])


const handlePeriod = (period) =>{
    setPeriod(period)
}
const handlePlan =(plan) =>{
    setPlanSelected(plan)
}


  return (
   <>
        <Container>
            <Row>
                <Col>
                <TogglePlan period={period} togglePeriodo={handlePeriod} ></TogglePlan>
               {planselected && (
                <div>
                    <ul>
                       {planselected?.beneficios?.map((beneficio,index) =>(
                        <li key={index} className={beneficio.incluido ? 'included' : 'not-included'}>
                            {beneficio.nombre}
                            {beneficio.incluido? (
                               <span className="included-icon">✔</span>
                            ) : (
                              <span className="not-included-icon">✘</span>
                            )}

                        </li>
                       ) )} 
                    </ul>
                </div>
               )}
                </Col>
                <Col>
              
                    <div>
                {plan.map((plan,index) =>(
                    <PlanCard
                    key={index}
                    plan={{
                        ...plan,
                        precio : period === "Anual" ? Math.round((plan.precio *12) * 0.8) : plan.precio
                    }}
                    selected={planselected && planselected._id === plan._id}
                    onselectedPlan={handlePlan}
                    >
                    </PlanCard>
                ))}             

                  
                    </div>
              
                </Col>
            </Row>
        </Container>
   </>
  )
}

export default PlanList