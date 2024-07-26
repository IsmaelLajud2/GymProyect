
import { Container,Row,Col } from 'react-bootstrap'
import '../Services/ServicesStyles.css'
const ServicesHero = () => {
  return (
    <> 
   <Container className='services-container'>
        <h1 className='title-services'>Nuestros Servicios</h1>  
        <p className='p-title'>
   Bienvenido a nuestro gimnasio y centro de entrenamiento. 
        <br></br>
        Mejora tu condición físicaahora y disfruta de los beneficios de un cuerpo más fuerte y saludable.
        </p>
    <Row className='row-services'>
        <Col className='col-card'> 
     
        <div className='card-services'>
        <img src='images/service1.png' className='imagen-services'></img>
        <h3>01</h3>
        <h4>Entrenamiento de fuerza</h4>
        <p>ofrecemos máquinas de cuidado de la salud de la mejor calidad e instalaciones de ejercicios</p>

     
  
        </div>
        </Col>
        <Col  className='col-card'> 
        <div className='card-services'>
        <img className='imagen-services' src='images/service2.png'alt='services.photo'></img>
        <h3>02</h3>
        <h4>Perder peso adicional</h4>
        <p>Brindamos ayuda nutricional de la mejor calidad.</p> </div>
        </Col>
        <Col  className='col-card'>
        <div className='card-services'>
        <img src='images/service3.png' className='imagen-services'alt='services.photo'></img> 
        <h3>03</h3>
        <h4>Cardio y Fuerza</h4>
        <p>ofrecemos máquinas de cuidado de la salud de la mejor calidad e instalaciones de ejercicios</p> </div>
        </Col>
        <Col  className='col-card'>
        <div className='card-services'>
        <img src='images/service4.png' className='imagen-services'alt='services.photo'></img>
        <h3>04</h3>
        <h4>Entusiastas del gimnasio</h4>
        <p>Entre en un ambiente amigable</p>
        </div>
        </Col>
    </Row>
  
   </Container>
   </>
  )
}

export default ServicesHero