import React, {useState,useEffect} from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import '../Planes/PlanesStyles.css'
import PlanToggle from './PlanToggle'
import axios from 'axios'

import CardPlan from './CardPlan'
const Planes = () => {

const [plan, setPlan] = useState([])
const [period,setPeriod] =useState("mensual")
const [selectedPlan,setSelectedPlan] =useState(null)


const getPlans = async() =>{
  try {
    const response = await axios.get('http://localhost:8320/planes/getAll')
    setPlan(response.data)
    console.log(response)
  } catch (error) {
    return console.error()
  }
}


useEffect(() => {
getPlans()
}, [])

const handleSelectedPlan =(plan) =>{
setSelectedPlan(plan)
}

const handlePeriod =(period) =>{
  setPeriod(period)
}

  return (
    <>
    <Container className='clases-container'>
      <Row>
        <Col className='col-beneficios' >
          <Card className="plan-toggle-card">
            <Card.Body className='card-body'>
              <PlanToggle period={period} onToggle={handlePeriod} />
              {selectedPlan && (
                <div className='benefits-container'>
                  <h3 style={{color:'white'}}>Beneficios del Plan {selectedPlan.nombre}</h3>
                  <ul className="benefits">
                    {selectedPlan.beneficios.map((beneficio, index) => (
                      <li key={index} className={`benefit ${beneficio.incluido ? 'included' : 'not-included'}`}>
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
            </Card.Body>
          </Card>
        </Col>
    
        <Col className='col-prices'>
          <div className='prices-container'>
            {plan.map((plan) => (
              <CardPlan
                key={plan._id}
                plan={{
                  ...plan,
                  precio: period === "Anual" ? Math.round((plan.precio * 12) * 0.80) : plan.precio
                }}
                selected={selectedPlan && selectedPlan._id === plan._id}
                onSelect={handleSelectedPlan}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    </>
  
  )
}

export default Planes