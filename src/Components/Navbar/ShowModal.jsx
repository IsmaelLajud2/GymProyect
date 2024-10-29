import {useState,useRef} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import '../Navbar/ModalStyles.css'
import emailjs from '@emailjs/browser';
const ShowModal = () => {

  const [error, setError] = useState(false) 
  const [succes, setSucces] = useState(false) 
  
  
  const formRef=useRef()


   
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w6601v4', 'template_waw8o0v', formRef.current, {
        publicKey: 'qXKTq5sqRYqCPKa5i',
      })
      .then(
        (result) => {
          setSucces(true)
        },
        (error) => {
          setError(true)
        },
      );
  };
       
        
    const [show, setShow] = useState(false);


  

  //  const handleSubmit =(e) =>{
  //   e.preventDefault()
  //   setShow(false)
  //   console.log(formDataRef)
  //  } 

  //  const handleChange =(e) =>{
  //   const {name ,value} = e.target
  //   formDataRef.current= {
  //     ...formDataRef.current,
  //     [name] :value
  //   }
  //  }
 
    const xClose=()=>setShow(false)
    const handleClose = () => {
      setTimeout(()=>{
        setShow(false);
      },2000)
      }
    const handleShow = () => {
                              setShow(true)};
  return (
    <>
    <p className='button-modal'  onClick={handleShow}>
      Contacto
    </p>

    <Modal style={{ border: "none" }} show={show} onHide={xClose}>
        <Modal.Header style={{ backgroundColor: "#1f212c", color: "white" }} closeButton>
          <Modal.Title>Envíame un correo</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1f212c", color: "white" }}>
          <Form onSubmit={sendEmail} ref={formRef}>
            <Form.Group className="mb-3" name="email" controlId="email">
              <Form.Label>Dirección de email</Form.Label>
              <input
                required
                type="email"
                placeholder="name@example.com"
                name='email'
                id='email'
              />
            </Form.Group>
            <Form.Group className="mb-3" name="name" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <input
                required
                type="text"
                placeholder="Nombre"
                name='name'
                id='name'
              />
            </Form.Group>
            <Form.Group className="mb-3" name="message" controlId="message">
              <Form.Label>Asunto</Form.Label>
              <textarea id='comentarios' placeholder='Buenas Ismael, me gustaria contactar contigo por...'   name='message' />
            </Form.Group>
            <Modal.Footer style={{ backgroundColor: "#1f212c", color: "white",display:"flex" ,justifyContent:"space-between",border:"none" }}>
        
       
            <Button variant="primary" type='submit' onClick={handleClose} >
              Enviar
            </Button>
            {error && <div style={{ color: "red" }}>Error al enviar el correo</div>}
            {succes && <div style={{ color: "green" }}>¡Correo enviado exitosamente,Gracias por contactar!</div>}
            <Button variant="secondary" onClick={xClose}>
            Cerrar
          </Button>
          </Modal.Footer>
          </Form>
        </Modal.Body>
       
      </Modal>
  </>
  )
}

export default ShowModal