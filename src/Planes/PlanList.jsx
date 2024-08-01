import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TogglePlan from './TogglePlan'
import PlanCard from './PlanCard'
import '../Planes/PlanStyles.css'
import Aos from 'aos'
import 'aos/dist/aos.css'




 
const PlanList = () => {
    useEffect(() => {
        Aos.init({
          duration: 2000
        })
      }, [])
   const [period, setPeriod] = useState("Mensual")
   const [plan, setPlan] = useState([])
   const [planselected, setPlanSelected] = useState(null) 

   const getAllPLanes = async () => {
    try {
        const response = await axios.get('http://localhost:8320/planes/getAll')
        setPlan(response.data)
        setPlanSelected(response.data[1])
        console.log(response)
    } catch (error) {
        console.error(error)
    }
   }

   useEffect(() => {
       getAllPLanes() 
   }, [])

   const handlePeriod = (period) => {
       setPeriod(period)
   }

   const handlePlan = (plan) => {
       setPlanSelected(plan)
   }

   return (
       <Container className='main-container'>
           <Row className='row-planes'>
               <Col className="column planes-col" data-aos="fade-right" >
                   <TogglePlan period={period} togglePeriodo={handlePeriod} />
                   {planselected && (
                       <div>
                           <ul className='ul-planes'>
                               {planselected?.beneficios?.map((beneficio, index) => (
                                   <li key={index} className={beneficio.incluido ? 'included' : 'not-included'}>
                                       {beneficio.nombre}
                                       {beneficio.incluido ? (
                                           <span className="included-icon">✔</span>
                                       ) : (
                                           <span className="not-included-icon">✘</span>
                                       )}
                                   </li>
                               ))}
                           </ul>
                       </div>
                   )}
               </Col>
            
               <Col className="column" data-aos="fade-down"  >
                   <div className="container-plans">
                       {plan.map((plan, index) => (
                           <PlanCard
                               key={index}
                               plan={{
                                   ...plan,
                                   precio: period === "Anual" ? `${Math.round((plan.precio * 12) * 0.8)} / Anual` : `${plan.precio} / Mensual`,
                                   descuento: period === "Anual" ? 'Ahorra un 20%' : ''
                               }}
                               selected={planselected && planselected._id === plan._id}
                               onselectedPlan={handlePlan}
                           />
                       ))}
                   </div>
               </Col>
           </Row>
       </Container>
   )
}

export default PlanList
