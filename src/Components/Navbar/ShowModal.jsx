import {useState,useRef} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import '../Navbar/ModalStyles.css'
const ShowModal = () => {
    const [show, setShow] = useState(false);


   const formDataRef = useRef({
    email: "",
    name:"",
    asunto :""
   }) 

   const handleSubmit =(e) =>{
    e.preventDefault()
    setShow(false)
    console.log(formDataRef)
   } 

   const handleChange =(e) =>{
    const {name ,value} = e.target
    formDataRef.current= {
      ...formDataRef.current,
      [name] :value
    }
   }
 

    const handleClose = () => setShow(false);
    const handleShow = () => {
      
     formDataRef.current ={
      name:"",
      email:"",
      asunto:""
     } 
      setShow(true)};
  return (
    <>
    <p className='button-modal'  onClick={handleShow}>
      Contacto
    </p>

    <Modal style={{border:"none"}}  show={show} onHide={handleClose}>
      <Modal.Header style={{backgroundColor :"#1f212c",color:"white"}}  closeButton>
        <Modal.Title style={{backgroundColor :"#1f212c"}} >Enviame un correo</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor :"#1f212c",color:"white"}} >
        <Form onSubmit={handleSubmit}>
            
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Direccion de email</Form.Label>
            <Form.Control
            required
              type="email"
              placeholder="name@example.com"
              autoFocus
              name='email'
              defaultValue={formDataRef.current.email}
              onChange={handleChange}
            />
              </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
            required
              type="text"
              placeholder="name@example.com"
          
              name='name'
              defaultValue={formDataRef.current.name}
              onChange={handleChange}
            />
            
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Asunto</Form.Label>
            <Form.Control as="textarea" rows={3} name='asunto'
              defaultValue={formDataRef.current.asunto}
              onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{backgroundColor :"#1f212c",color:"white"}} >
        <Button variant="secondary"  onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit} type='submit'>
          Save Changes 
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ShowModal