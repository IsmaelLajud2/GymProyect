import { useEffect } from 'react'
import { Container,Row} from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
import dataService from './services.json'

import '../Services/ServicesStyles.css'
import CardServices from './CardServices'
const ServicesHero = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
  return (
    <> 
   <Container className='services-container'>
        <h1 className='title-services'>Nuestros Servicios</h1>  
        <p className='p-title'>
   Bienvenido a nuestro gimnasio y centro de entrenamiento. 
        <br></br>
        Mejora tu condición física ahora y disfruta de los beneficios de un cuerpo más fuerte y saludable.
        </p>
    <Row className='row-services'>
    {dataService.servicios.map((servicio,index) =>{

const dataAos = (index === 0 || index === 2) ? 'fade-up' : 'fade-down';
        return(
          <CardServices  dataAos={dataAos} data key={index} imagen={servicio.imagen} numero={servicio.numero} tipo={servicio.tipo} descripcion={servicio.descripcion}></CardServices>
        )
      })
    }

    </Row>
  
   </Container>
   </>
  )
}

export default ServicesHero