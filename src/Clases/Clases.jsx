import {useEffect} from 'react'
import {  Container, Row } from 'react-bootstrap'
import '../Clases/ClasesStyles.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './file.json'
import Slider from "react-slick";
import CardClases from './CardClases'


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
    {
      data.clases.map((clase,index) =>{
        return (
          <CardClases key={index} imagen={clase.imagen} descripcion={clase.descripcion} coach={clase.coach}></CardClases>
        )
})
    }
      
    
        
    </Slider>
   </Row>
   </Container>
    </>
  )
}

export default Clases