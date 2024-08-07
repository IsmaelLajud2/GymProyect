
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import '../Navbar/NavbarStyles.css';

const NavbarHero = () => {
  return (
    <>
      <Navbar bg="bg-gym" data-bs-theme="dark" className='container-nav'>
        <Container>
          <Navbar.Brand href="#home">
            <img src='images/logo.png' className='imagen-brand' alt='logo'/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <ScrollLink to="home" smooth={true} duration={200} className='nav-text' id='nav-text'>Inicio</ScrollLink>
            <ScrollLink to="services" smooth={true} duration={200} className='nav-text' id='nav-text'>Beneficios</ScrollLink>
            <ScrollLink to="clases" smooth={true} duration={200} className='nav-text' id='nav-text'>Clases</ScrollLink>
            <ScrollLink to="planes" smooth={true} duration={200} className='nav-text' id='nav-text'>Planes</ScrollLink>
            <ScrollLink to="contacto" smooth={true} duration={200} className='nav-text' id='nav-text'>Contacto</ScrollLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHero;
