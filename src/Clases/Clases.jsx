import {useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Clases/ClasesStyles.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Clases = () => {
  


  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };


  return (
    <>
   
   <Container className='clases-container'  >
   <h1 className='h1-clases'>Clases destacadas</h1>
   <Row className='clases-row' data-aos="fade-right">
   <Slider {...settings}>

        <Col className='clases-col'>
        <div className='clases-card'>
        <img src='images/Ciclismo.png' alt='bike' className='imagen-clases'/>
        <h4 className='h4-clases'>Ciclismo</h4>
        <p className='p-clases'>🙋‍♂️ Alejandro Martínez</p>
        </div>
       
        </Col>
        <Col className='clases-col'>
        <div className='clases-card'>
        <img src="images/Artesmarciales.png" alt="karate" className='imagen-clases' />
        <h4 className='h4-clases'>Artes Marciales</h4>
        <p className='p-clases'>🙋‍♂️ David López</p>
        </div>
      
        </Col>
        <Col className='clases-col'>
        <div className='clases-card'>
        <img src="images/Cardio.png" alt="runnig" className='imagen-clases' />
        <h4 className='h4-clases'>Clases de cardio</h4>
        <p className='p-clases'>🙋‍♂️ Carlos Herrera</p>
        </div>
       
        </Col>
        <Col className='clases-col'>
        <div className='clases-card'>
        <img src="images/gimnasiaartistica.png" alt="gimnasia" className='imagen-clases' />
        <h4 className='h4-clases'>Clases de gimnasia</h4>
        <p className='p-clases'>🙋‍♀️ Sofía Gómez</p>
        </div>
       
        </Col>
        <Col className='clases-col'>
        <div className='clases-card'>
        <img src="images/zumba.png" alt="zumba" className='imagen-clases' />
        <h4 className='h4-clases'>Clases de zumba</h4>
        <p className='p-clases'>🙋‍♀️ María Suarez</p>
        </div>
       
        </Col>
        
    </Slider>
   </Row>
   </Container>
    </>
  )
}

export default Clases