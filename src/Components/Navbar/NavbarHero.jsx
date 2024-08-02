import React from 'react'
import { Navbar ,Nav,Container } from 'react-bootstrap'
import '../Navbar/NavbarStyles.css'
const NavbarHero = () => {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    
    <> 
    <Navbar sticky="top" bg="bg-gym" data-bs-theme="dark" className='container-nav'>
        <Container >
          <Navbar.Brand href="#home">
      <img src='images/logo.png' className='imagen-brand' alt='logo'/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav-text' id='nav-text'>Inicio</Nav.Link>
            <Nav.Link href="#features" className='nav-text' id='nav-text'>Beneficios</Nav.Link>
            <Nav.Link href="#pricing" className='nav-text'id='nav-text'>Clases</Nav.Link>
            <Nav.Link href="#pricing" className='nav-text'id='nav-text'>Planes</Nav.Link>
            <Nav.Link href="#pricing" className='nav-text'id='nav-text'>Contacto</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarHero