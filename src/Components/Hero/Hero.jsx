
import { Row,Container,Col } from 'react-bootstrap'
import '../Hero/HeroStyles.css'
const Hero = () => {
  return (
   <>
    <Container >
        <Row>
            <Col  className='hero-container'> 
            <div className='imagen-background'>
            <article>
                <img className='hero-imagen' src="images/hero.png" alt="heroimagen" />
            </article>
            </div>
            </Col>
            <Col className='col-article-left'>
            <article className='h1-article'>
                <h1 className='h1-text'>Es Hora<br></br><span>De Entrenar! </span> </h1>
                <p className='p-text'>Bienvenido a nuestro gimnasio y centro de entrenamiento.
                    <br></br>
                            Dolorido hoy, fuerte mañana. mejora tu condición física hoy.
                                        </p>
            </article>
            <Row >
                <Col>
                <article className='article-hero'>
                    <h2 className='h2-hero'>4.8 🌟 </h2>
                    <br /><p className='p-hero'>calificación promedio en plataforma de clientes</p>
                </article>
                </Col>
                <Col> 
                <article>
                    <h2 className='h2-hero' >10+</h2>
                    <br /><p className='p-hero'>Cursos de fisicoculturismo </p>
                </article>
                </Col>
                <Col> 
                <article>
                    <h2  className='h2-hero'>15+</h2>
                    <br /><p className='p-hero'>Mentores especializados </p>
                </article>
                </Col>
            </Row>
            </Col>
        </Row>
    </Container>

   </>
  )
}

export default Hero