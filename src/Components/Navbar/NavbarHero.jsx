
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import '../Navbar/NavbarStyles.css';
import ShowModal from './ShowModal';

const NavbarHero = () => {
  return (
    <>
      <Navbar  data-bs-theme="dark" expand="lg" className='container-nav' collapseOnSelect>
        <Container >
          <Navbar.Brand href="#home">
            <img src='images/logo.png' className='imagen-brand' alt='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav   className="me-auto" >
            <ScrollLink to="home" smooth={true} duration={200} className='nav-text' id='nav-text'>Inicio</ScrollLink>
            <ScrollLink to="services" smooth={true} duration={200} className='nav-text' id='nav-text'>Beneficios</ScrollLink>
            <ScrollLink to="clases" smooth={true} duration={200} className='nav-text' id='nav-text'>Clases</ScrollLink>
            <ScrollLink to="planes" smooth={true} duration={200} className='nav-text' id='nav-text'>Planes</ScrollLink>
            <ScrollLink smooth={true} duration={200} className='nav-text' id='nav-text'><ShowModal></ShowModal></ScrollLink>
           
       
          </Nav>
      
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </>
  );
};

export default NavbarHero;
