import { Container, Row, Col } from 'react-bootstrap';
import '../Footer/FooterStyles.css'

function Footer() {
  return (
    <Container className='footer-container'>
        <Row className='footer-row'>
            <Col className='footer-col-contacto'>
            <img src='images/logo.png' className='footer-imagen' alt='logo'/>
            <h1 className='h1-footer'>CONTÁCTANOS!</h1>
         
            <div className="input-box">
  <label className="input-label" htmlFor="email">Email</label>
  <input id="email" placeholder="user@mail.com" className="input" name="email" type="email"/>
  <span className="input-helper">Enter a valid email</span>
</div>

            </Col>
            <Col className='footer-col'>
            <p className='p-footer'>Company</p>
            <p className='p-footer'>Social</p>
            <p className='p-footer'>Más</p>
            </Col>
            
        </Row>
    </Container>
  );
}

export default Footer;