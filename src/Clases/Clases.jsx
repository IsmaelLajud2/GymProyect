import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Clases/ClasesStyles.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Clases = () => {
  return (
    <>
   
   <Container className='clases-container'  >
   <h1 className='h1-clases'>Clases destacadas</h1>
   <Row className='clases-row' data-aos="fade-right">
        <Col className='clases-col'>
        <div className='clases-card'>
        <img src='images/Ciclismo.png' alt='bike' className='imagen-clases'/>
        <h4 className='h4-clases'>Ciclismo</h4>
        <p className='p-clases'>👤 David Warner</p>
        </div>
       
        </Col>
        <Col className='clases-col'>
        <div className='clases-card'>
        <img src="images/Artesmarciales.png" alt="karate" className='imagen-clases' />
        <h4 className='h4-clases'>Artes Marciales</h4>
        <p className='p-clases'>👤 David Warner</p>
        </div>
      
        </Col>
        <Col className='clases-col'>
        <div className='clases-card'>
        <img src="images/Cardio.png" alt="runnig" className='imagen-clases' />
        <h4 className='h4-clases'>Clases de cardio</h4>
        <p className='p-clases'>👤 David Warner</p>
        </div>
       
        </Col>
        

   </Row>
   </Container>
    </>
  )
}

export default Clases